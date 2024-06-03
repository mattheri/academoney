
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string; 
  isActive: boolean;
  email: string;
  password: string;
  
};


export type BudgetEntry = {
    id: number;
    description: string;
    category: string;
    amount: number;
    type: string;
    isDone: Boolean;
    startDate: string;
    endDate: string | null;
    frequency: number;
    user: User;
    
  };


  
