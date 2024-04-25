

import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
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
    <div>
      <h1>Contactez-nous</h1>
      {submitted ? (
        <p>Merci pour votre message ! Nous vous répondrons bientôt.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
