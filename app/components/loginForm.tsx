// components/LoginForm.tsx
"use client"; // Utilisation du client-side rendering pour ce composant
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Input from "./input"; 

const LoginForm = () => {
  // Définition des états pour le courriel et le mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Extraction des fonctions de mise à jour dans le composant pour éviter de les recréer à chaque re-render
  const onEmailUpdate = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onPasswordUpdate = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Connexion avec:", email, password);
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm">
                    <Input
                      id="email-address"
                      type="email"
                      autoComplete="email"
                      placeholder="Courriel"
                      value={email}
                      onChange={onEmailUpdate}
                    />
                    <Input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={onPasswordUpdate}
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Connexion
                    </button>
                  </div>
                </form>
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