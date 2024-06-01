

export const labelsFrancais: { [key: string]: string } = {
    Revenue: 'Revenus',
    Expense: 'Dépenses'
  };
  
  export interface Option {
    value: string;
    label: string;
  }
  
  export const getOptionsWithLabels = (options: string[], labels: { [key: string]: string }): Option[] => {
    return options.map(option => ({
      value: option,
      label: labels[option] || option
    }));
  };
  