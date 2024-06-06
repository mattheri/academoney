interface KeyPair {
  [key: string]: string;
}

export const frequencyDictionary: KeyPair = {
  weekly: "Hebdomadaire",
  monthly: "Mensuel",
};

export const unitHorizonDictionry: KeyPair = {
  years: "Années",
  months: "Mois",
};

export const compoundingFrequencyDictionary: KeyPair = {
  year: "une fois par an",
  month: "une fois par mois",
};
