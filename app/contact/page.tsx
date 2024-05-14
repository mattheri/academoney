"use client"
import styles from './styles.module.css';
import React, { useState } from 'react';

import type { FormEventHandler } from "react";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
   
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
   
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg h-full text-center m-auto p-4 mt-20 border-black border-2">
      <h1 className='text-2xl mb-2 mt-2'>Contactez-nous</h1>
      <p className=' mb-2 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      {submitted ? (
        <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>
      ) : (
        <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>
          <div>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className=' mt-2 mb-2 p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'

            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=' mt-2 mb-2  p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button type="submit"  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 mt-3 py-2.5 me-2 mb-2 ">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
