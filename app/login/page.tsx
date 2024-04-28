"use client"

import React, { useState, FormEvent } from 'react';

const LoginPage = () => {
  // Utilisation du hook useState pour gérer les états de email et password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de connexion 
    console.log('Connexion avec:', email, password);
  };

 
  return (
    <div>
      <div>
        <div>
          <h2>Logo</h2> 
        </div>
        <form onSubmit={handleSubmit}> 
          <div>
            <label htmlFor="email">Courriel</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état email lors de la saisie de l'utilisateur
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Mise à jour de l'état password lors de la saisie de l'utilisateur
              required
            />
          </div>
          <div>
            <button type="submit"> 
              Connexion
            </button>
          </div>
        </form>
        <div>
          <a href="#">Inscription</a> 
        </div>
      </div>
    </div>
  );
};


export default LoginPage;
