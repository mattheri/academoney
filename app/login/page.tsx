"use client"

import { useState } from "react";
import { AuthService, signInWithCredentials } from "@/auth";
import { Form } from "@/common";
import { routes } from "@/routes";
import PasswordCheckModal from "@/auth/components/PasswordCheckModal"; // Importation du nouveau composant de vérification du mot de passe

const LoginPage = () => {
  const [isPasswordCheckOpen, setPasswordCheckOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [providerId, setProviderId] = useState("");
  const [redirectTo, setRedirectTo] = useState<string>(routes.INDEX);
  const [providerName, setProviderName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const providerId = formData.get("provider") as string;
    const redirectTo = formData.get("redirectTo") as string;
    const providerName = formData.get("name") as string;

    setEmail(email);
    setPassword(password);
    setProviderId(providerId);
    setRedirectTo(redirectTo);
    setProviderName(providerName);

    setPasswordCheckOpen(true); // Ouvre la modale de vérification du mot de passe
  };

  const handleVerifyPassword = async (reenteredPassword: string) => {
    if (password === reenteredPassword) {
      // Crée un objet FormData pour envoyer les données de connexion
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("provider", providerId);
      formData.append("redirectTo", redirectTo);
      formData.append("name", providerName);

      await signInWithCredentials(formData);
      setPasswordCheckOpen(false);
    } else {
      alert("Les mots de passe ne concordent pas. Veuillez réessayer."); // Alerte en cas de mot de passe incorrect
    }
  };

  return (
    <div>
      {AuthService.instance.getProvidersMap().map((provider) => (
        <Form key={provider.id} onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" required name="email" />
          <br />
          <label>Mot de passe:</label>
          <input type="password" required name="password" />
          <input type="hidden" name="provider" value={provider.id} />
          <input type="hidden" name="redirectTo" value={routes.INDEX} />
          <input type="hidden" name="name" value={provider.name} />
          <br />
          <button type="submit">Connexion</button>
        </Form>
      ))}
      <PasswordCheckModal
        isOpen={isPasswordCheckOpen}
        onClose={() => setPasswordCheckOpen(false)}
        onVerifyPassword={handleVerifyPassword}
      />
    </div>
  );
};

export default LoginPage;
