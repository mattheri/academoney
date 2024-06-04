import httpClient from "@/http";
import { PersonalInformationsForm } from "@/profile/components/personal-informations/PersonalInformationsForm";
import { ProfileFormContainer } from "@/profile/components/personal-informations/ProfileFormContainer";
import { getUserId } from "@/utils/getUserId";
import type { Profile } from "@/profile/profile";

export default async function User() {
  const id = getUserId();
  const { data } = await httpClient.GET<Profile>(`/users/${id}`);

  return (
    <ProfileFormContainer>
      <PersonalInformationsForm
        id={id}
        birthDate={data.birthDate}
        email={data.email}
        firstName={data.firstName}
        lastName={data.lastName}
        phone={data.phone}
        password={data.password}
      />
    </ProfileFormContainer>
  );
}
