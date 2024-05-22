import { AuthService, signInWithCredentials } from "@/auth";
import Image from "next/image";
import Input from "./input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form } from "@/common";


const schema = yup.object().shape({
  email: yup.string().email("Veuillez entrer un courriel valide.").required("Veuillez entrer votre courriel."),
  password: yup.string().matches(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/gm).required(),
});

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  });

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-dark-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <Image src="/logo.png" alt="Logo" width={500} height={300} /> 
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {AuthService.instance.getProvidersMap().map((provider) => (
                  <Form key={provider.id} action={signInWithCredentials}>
                    <div className="rounded-md shadow-sm">
                      <Input
                        id="email-address"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Courriel"
                        {...register("email")}
                      />
                      {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                      <Input
                        id="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        placeholder="Mot de passe"
                        {...register("password")}
                      />
                      {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Connexion
                      </button>
                    </div>
                  </Form>
                ))}
                <div className="pt-6 text-center">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Inscription
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;