// components/LoginForm.tsx
"use client";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import TextInput from "../../../common/components/TextInput";
import Link from 'next/link';
import Logo from '../../../common/components/Logo';
import PageContainer from '../../../common/components/PageContainer';
import InscriptionModal from './InscriptionModal';

const LoginForm = () => {
  // Définition des états pour le courriel et le mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extraction des fonctions de mise à jour dans le composant pour éviter de les recréer à chaque re-render
  const onEmailUpdate = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onPasswordUpdate = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Connexion avec:", email, password);
  };

  return (
    <PageContainer>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-dark-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
            <Logo />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm">
                    <TextInput
                      id="email-address"
                      type="email"
                      autoComplete="email"
                      placeholder="Courriel"
                      value={email}
                      onChange={onEmailUpdate}
                      label="Courriel" 
                    />
                    <TextInput
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={onPasswordUpdate}
                      label="Mot de passe" 
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="relative w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Connexion
                    </button>
                  </div>
                </form>
                <div className="pt-6 text-center">
                  <button
                    className="font-medium text-blue-600 hover:text-blue-500"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Inscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <p>Ceci est un test.</p>
</InscriptionModal>

    </PageContainer>
  );
};

export default LoginForm;
