"use client";

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';


const LoginPage = () => {
  // Utilisation du hook useState pour gérer les états de email et password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log('Connexion avec:', email, password); 
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
                    <div>
                      <label htmlFor="email-address" className="sr-only">Courriel</label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" // Changement de la couleur indigo par blue
                        placeholder="Courriel"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">Mot de passe</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" // Changement de la couleur indigo par blue
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> {/* Changement de la couleur indigo par blue */}
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


export default LoginPage;
