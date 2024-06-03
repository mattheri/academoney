import httpClient from "@/http";
import { OptionsConnexionForm } from "@/profile/components/personal-informations/OptionsConnexionForm";
import { ProfileFormContainer } from "@/profile/components/personal-informations/ProfileFormContainer";
import { getUserId } from "@/utils/getUserId";
import type { Profile } from "@/profile/profile";

export default async function User() {
  const id = getUserId();
  const { data } = await httpClient.GET<Profile>(`/users/${id}`);

  return (
    <ProfileFormContainer>
      <OptionsConnexionForm
        id={id}
        email={data.email}
        password={data.password} // Valider si je dois ajouter dans mon OptionsConnexionForm si je dois ajouter les autres champs
      />
    </ProfileFormContainer>
  );
}
