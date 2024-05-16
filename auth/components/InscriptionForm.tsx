import { FormEvent } from 'react';
import { FormInput } from '../../common/components/Form/FormInput';

const InscriptionForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logique d'inscription
    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };
    const firstName = target.firstName.value; 
    const lastName = target.lastName.value; 
    const email = target.email.value; 
    const password = target.password.value; 
    console.log(`Inscription avec: ${firstName}, ${lastName}, ${email}, ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h2 className="text-center text-lg font-bold">Bienvenue!</h2>
        <h3 className="text-center text-md font-bold">Créer votre compte</h3>
      </div>
      <FormInput id="firstName" label="Prénom:" required />
      <FormInput id="lastName" label="Nom:" required />
      <FormInput id="email" type="email" label="Courriel:" required />
      <FormInput id="password" type="password" label="Mot de passe:" required />
      <FormInput id="confirmPassword" type="password" label="Confirmer le mot de passe:" required />
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Soumettre
        </button>
      </div>
    </form>
  );
};

export default InscriptionForm;
