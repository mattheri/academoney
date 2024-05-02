import { object, ref, string, ValidationError } from "yup";
import type { Credentials } from "../auth";
import { validationErrors } from "../constants";

export class Validator {
  private get credentialsSchema() {
    return object().shape({
      username: string()
        .email(validationErrors.INVALID_EMAIL)
        .required(validationErrors.EMAIL_REQUIRED),
      password: string()
        .required(validationErrors.PASSWORD_REQUIRED)
        .min(8, validationErrors.PASSWORD_MIN_LENGTH),
    });
  }

  private get passwordConfirmSchema() {
    return object()
      .shape({
        confirmPassword: string().oneOf(
          [ref("password")],
          validationErrors.INVALID_CONFIRM_PASSWORD
        ),
      })
      .concat(this.credentialsSchema);
  }

  private formatError(error: ValidationError) {
    return error.inner.reduce<Record<string, string[]>>((acc, e) => {
      const key = e.path ?? "unknown";
      const message = e.message;

      if (acc[key]) {
        acc[key].push(message);
      } else {
        acc[key] = [message];
      }

      return acc;
    }, {});
  }

  async validateCredentials({ username, password }: Credentials) {
    try {
      return await this.credentialsSchema.validate(
        { username, password },
        { abortEarly: false, disableStackTrace: true }
      );
    } catch (e) {
      const error = e as Error;

      if (error instanceof ValidationError) {
        throw this.formatError(error);
      }
      throw error;
    }
  }

  async validateCredentialsWithPasswordConfirm({
    username,
    password,
    confirmPassword,
  }: Credentials & { confirmPassword: string }) {
    return await this.passwordConfirmSchema.validate(
      {
        username,
        password,
        confirmPassword,
      },
      { abortEarly: false, disableStackTrace: true }
    );
  }
}
