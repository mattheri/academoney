"use client"

import type { FormEvent } from "react";

const ContactPage = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/endpoint', { // changer le endpoint pour celui qui correspond
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        event.currentTarget.reset();
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
      } else {
        throw new Error('Erreur lors de la soumission du formulaire.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="max-w-lg h-full text-center m-auto p-4 mt-20 border-black border-2">
      <h1 className='text-2xl mb-2 mt-2'>Contactez-nous</h1>
      <p className=' mb-2 mt-2'>Pour toute question, suggestion ou commentaire concernant Academoney, n'hésitez pas à contacter notre équipe de développement. Nous sommes là pour vous aider à optimiser votre expérience financière étudiante. Envoyez-nous un e-mail à contact@academoney.com. Votre avis compte pour nous !</p>
      <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className='mt-2 mb-2 p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className='mt-2 mb-2 p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            required
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 mt-3 py-2.5 me-2 mb-2 ">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
