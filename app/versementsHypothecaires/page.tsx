"use client"

import { columnTransformDependencies } from 'mathjs';
import React, { useState, FormEvent } from 'react';

const VersementsHypothecairesPage = () => {
  // Utilisation du hook useState pour gérer les états de email et password
  const [cout, setCout] = useState('');
  const [MiseFond, setMiseFond] = useState('');
  const [Montant, setMontant] = useState('');
  const [Taux, setTaux] = useState('');
  const [Amortissement, setAmortissement] = useState('');
  const [Frequence, setFrequence] = useState('');
  const [MontantVersement, setMontantVersement] = useState('');
  //const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

 
  return (
    <div>
      <div class="w-2/3 my-6 mx-auto">
        <div>
          <h2 class="w-2/3 py-6 text-center">Versements Hypothécaires</h2> 
        </div>




        
        <form onSubmit={handleSubmit} class="w-full max-w-lg"> 


        <div class="flex flex-wrap -mx-3 mb-6">
            <div  class="w-full px-3">
                    <label 
                    htmlFor="cout"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"
                     >Coût des études</label>
                    <input
                    type="text"
                    id="cout"
                    value={cout}
                    onChange={(e) => setCout(e.target.value)}
                    required 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
            </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div  class="w-full px-3">
                    <label 
                    htmlFor="MiseFond"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                     >Mise de fond</label>
                    <input
                    type="text"
                    id="MiseFond"
                    value={MiseFond}
                    onChange={(e) => setMiseFond(e.target.value)}
                    required 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
            </div>
        </div>


        <div class="flex flex-wrap -mx-3 mb-6">
            <div  class="w-full px-3">
                    <label 
                    htmlFor="Montant"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                     >Montant de l'emprunt</label>
                    <input
                    type="text"
                    id="Montant"
                    value={Montant}
                    onChange={(e) => setMontant(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
            </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div  class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label 
                    htmlFor="Taux"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                     >Taux d'intérêt</label>
                    <input
                    type="text"
                    id="Taux"
                    value={Taux}
                    onChange={(e) => setTaux(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
            </div>

            <div  class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label 
                    htmlFor="Amortissement"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                     >Amortissement</label>
                    <input
                    type="text"
                    id="Amortissement"
                    value={Amortissement}
                    onChange={(e) => setAmortissement(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
            </div>
        </div>




        <div class="flex flex-wrap -mx-3 mb-6">
            <div  class="w-full px-3">
                    <label 
                    htmlFor="Frequence"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                     >Fréquence des versements</label>
                    <input
                    type="text"
                    id="Frequence"
                    value={Frequence}
                    onChange={(e) => setFrequence(e.target.value)}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
            </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Calculer</button>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-6">
            <div  class="w-full px-3">
                    <label 
                    htmlFor="MontantVersement"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                     >Montant des versements</label>
                    <input
                    type="text"
                    id="MontantVersement"
                    value={MontantVersement}
                    onChange={(e) => setMontantVersement(e.target.value)} 
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
            </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <button class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">Tableau des versements mensuels</button>
        </div>



        
        </form>
      </div>
    </div>
  );
};


export default VersementsHypothecairesPage;
