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
   
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Image src="/logo.png" alt="Logo" width={500} height={300} /> 
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">AcadeMoney</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> {/* Changement de la couleur indigo par blue */}
              Connexion
            </button>
          </div>
        </form>
        <div className="text-center">
          <a href="#" className="font-medium text-blue-600 hover:text-indigo-500"> 
            Inscription
          </a>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;
