// À retravailler
"use client"
import React from "react";
import { validateUserPassword } from "@/auth";
import { Form } from "@/common";


const PasswordCheckModal = ({ onValidation }:any) => {

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = sessionStorage.getItem("userEmail") as string;
    const password = formData.get("password") as string;
    const isValid = await validateUserPassword(email, password);
    onValidation(isValid);
    sessionStorage.setItem("validationPass", isValid ? "true" : "false"); // Storage de l'état de validation.
}
  return (
    <div>
      <Form onSubmit={handleValidate}>
        <label>2FA: À des fins de sécurité, veuillez confirmer votre mot de passe:</label> {/* Dans une vrai app, ça serait remplacé par une question de sécurité, ou code texto / email.*/ }
        <input type="password" name="password" required />
        <br/>
        <button type="submit">Valider</button>
      </Form>
    </div>
  );
};

export default PasswordCheckModal;
