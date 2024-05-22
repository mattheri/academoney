import type { Credentials } from "../auth";

import { number, object, ref, string, ValidationError } from "yup";
import { validationErrors } from "../constants";

export class Validator {
  static get credentialsSchema() {
    return object().shape({
      email: string()
        .email(validationErrors.INVALID_EMAIL)
        .required(validationErrors.EMAIL_REQUIRED),
      password: string()
        .required(validationErrors.PASSWORD_REQUIRED)
        .min(8, validationErrors.PASSWORD_MIN_LENGTH),
    });
  }

  static get errorResponseSchema() {
    return object().shape({
      data: object().shape({
        statusCode: number().required().is([404]),
        message: string().required(),
      }),
    });
  }

  static get registerCredentialsSchema() {
    return object()
      .shape({
        confirmPassword: string().oneOf(
          [ref("password")],
          validationErrors.INVALID_CONFIRM_PASSWORD
        ),
        firstName: string().required(validationErrors.FIRST_NAME_REQUIRED),
        lastName: string().optional(),
        birthDate: string().optional(),
        phone: string().optional(),
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

  async validateCredentials(args: Partial<Record<string, unknown>>) {
    try {
      return await Validator.credentialsSchema.validate(args, {
        abortEarly: false,
        disableStackTrace: true,
      });
    } catch (e) {
      const error = e as Error;

      if (error instanceof ValidationError) {
        throw this.formatError(error);
      }
      throw error;
    }
  }

  async validateCredentialsWithPasswordConfirm(
    args: Partial<Record<string, unknown>>
  ) {
    return await Validator.registerCredentialsSchema.validate(args, {
      abortEarly: false,
      disableStackTrace: true,
    });
  }

  async validateErrorResponse(data: any) {
    try {
      return await Validator.errorResponseSchema.validate(data, {
        abortEarly: false,
        disableStackTrace: true,
      });
    } catch (e) {
      const error = e as Error;
      console.log(error);

      if (error instanceof ValidationError) {
        throw this.formatError(error);
      }
      throw error;
    }
  }
}
