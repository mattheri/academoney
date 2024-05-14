import Image from "next/image";

import { Form, Link } from "@/common";

import { LoginInputs } from "./LoginInputs";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-dark-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <Image src="/logo.png" alt="Logo" width={500} height={300} />
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <Form>
              <LoginInputs initialValues={INITIAL_VALUES} />
            </Form>
            <div className="pt-6 text-center">
              <Link href="#">Inscription</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
