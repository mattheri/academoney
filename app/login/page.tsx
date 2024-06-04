import { AuthService, signInWithCredentials } from "@/auth";
import { Form } from "@/common";
import { routes } from "@/routes";

// Création de la page de connexion qui utilise le composant loginForm
const LoginPage = () => {
  return (
    <div>
      {AuthService.instance.getProvidersMap().map((provider) => (
        <Form key={provider.id} action={signInWithCredentials}>
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
    </div>
  );
};

export default LoginPage;



