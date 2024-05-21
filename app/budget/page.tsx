"use client";

import { useState } from 'react';
import { FormInput, FormSelectInput, Button, Form } from '@/common';

// Définition des types pour les transactions
interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: string;
}

// Définition du composant BudgetPage
const BudgetPage: React.FC = () => {
  // Définition des catégories pour le champ select catégorie
  const categories = [
    "Catégories",
    "Habitation",
    "Alimentation",
    "Télécomunications",
    "Éducation",
    "Soins personnels",
    "Épargne",
    "Vêtements",
    "Loisirs",
    "Autres",
  ];

  const revenusDepenses = ['Revenu', 'Dépense'];

  // État pour gérer les transactions
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const date = formData.get("Date") as string;
    const description = formData.get("Description") as string;
    const category = formData.get("Category") as string;
    const amount = parseFloat(formData.get("Amount") as string);
    const type = formData.get("Type") as string;

    const newTransaction: Transaction = {
      id: transactions.length + 1,
      date,
      description,
      category,
      amount,
      type,
    };

    setTransactions([...transactions, newTransaction]);
  };

  // Calcul du solde des dépenses et des revenus cumulés
  const calculateBalance = (): number => {
    return transactions.reduce((balance, transaction) => {
      if (transaction.type === 'Revenu') {
        return balance + transaction.amount;
      } else if (transaction.type === 'Dépense') {
        return balance - transaction.amount;
      }
      return balance;
    }, 0);
  };

  const balance = calculateBalance();

  // Rendu du composant
  return (
    <div className="bg-gray-50 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto">
      <Form onSubmit={handleSubmit}>
        <FormInput name="Date" label="Date" type="date" />
        <FormInput name="Description" label="Description" type="text" />
        <FormSelectInput name="Category" options={categories} />
        <FormInput name="Amount" label="Montant" type="number" />
        <FormSelectInput name="Type" options={revenusDepenses} />
        <Button type="submit">Ajouter</Button>
      </Form>

      {/* Affichage du solde avec la couleur en fonction du signe */}
      <h2 style={{ color: balance >= 0 ? 'green' : 'red' }}>
        Solde: {balance}$
      </h2>

      {/* Affichage des transactions */}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description} ({transaction.category}) : {transaction.type} de {transaction.amount}$
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetPage;
