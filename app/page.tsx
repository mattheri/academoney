"use client"

import { useState, useEffect } from "react";
import { SignOutButton } from "@/auth";
import PasswordCheckModal from "@/auth/components/PasswordCheckModal";
import  handleValidate  from "@/auth/components/PasswordCheckModal";

const HomePage = () => {

  const [validationPass, setValidationPass] = useState(false);

  useEffect(() =>{
    const validationStatus = sessionStorage.getItem("validationPass") === "true";
    setValidationPass(validationStatus);
  }, []);

  const handleValidation = (isValid:any) => {
      setValidationPass(isValid);
      sessionStorage.setItem("validationPass", isValid ? "true" : "false");
  };

  return (
    <main>
      <p>Vous êtes connectés.</p>
      {!validationPass && <PasswordCheckModal onValidation={handleValidation}/>
      }
      <SignOutButton />
    </main>
  );
};

export default HomePage;
