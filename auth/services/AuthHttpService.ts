import { User } from "next-auth";

import httpClient, { Http } from "@/http";

export class AuthHttpService {
  constructor(private readonly http: Http = httpClient) {}

  async getUserByEmail(email: string) {
    const { data } = await this.http.GET<User>(`/users/email/${email}`);

    return data;
  }

  async createUser(user: User) {
    const { data } = await this.http.POST<User>("/users", {
      body: user,
    });

    return data;
  }

  async getUserById(id: number) {
    const { data } = await this.http.GET<User>(`/users/${id}`);

    return data;
  }

  async updateUser(user: User) {
    const { data } = await this.http.PUT<User>("/users", {
      body: JSON.stringify(user),
    });

    return data;
  }

  async deleteUser(id: number) {
    const { data } = await this.http.DELETE<User>(`/users/${id}`);

    return data;
  }
}
