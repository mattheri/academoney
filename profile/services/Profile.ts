import httpClient, { type Http } from "@/http";
import type { PersonalInformationsDto, Profile } from "../profile";

export class ProfileService {
  constructor(
    private readonly http: Http = httpClient,
    private readonly endpoint: "/users"
  ) {}

  async getUser(id: number) {
    const { data } = await this.http.GET<Profile>(`${this.endpoint}/${id}`);

    return data;
  }

  async updatePersonalInformations(
    id: number,
    personalInformationsDto: PersonalInformationsDto
  ) {
    const birthDate = personalInformationsDto.birthDate
      ? new Date(personalInformationsDto.birthDate).toDateString()
      : null;

    const { data } = await this.http.PUT(`${this.endpoint}/${id}`, {
      body: JSON.stringify({
        ...personalInformationsDto,
        birthDate,
        isActive: true,
      }),
    });

    return data;
  }
}
