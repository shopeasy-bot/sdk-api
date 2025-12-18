import { ApiClient } from "../api";
import type { Customer } from "../types/customer.types";

export class CustomerService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: Omit<Customer, "id" | "guildId" | "createdAt" | "updatedAt">
  ): Promise<Customer> {
    return this.client.post<Customer>(
      `/guilds/${guildId}/customers`,
      data
    );
  }

  list(guildId: string): Promise<Customer[]> {
    return this.client.get<Customer[]>(
      `/guilds/${guildId}/customers`
    );
  }

  getById(guildId: string, id: string): Promise<Customer> {
    return this.client.get<Customer>(
      `/guilds/${guildId}/customers/${id}`
    );
  }

  getByUser(guildId: string, userId: string): Promise<Customer> {
    return this.client.get<Customer>(
      `/guilds/${guildId}/customers/user/${userId}`
    );
  }

  update(
    guildId: string,
    id: string,
    data: Partial<Omit<Customer, "id" | "guildId" | "userId" | "createdAt" | "updatedAt">>
  ): Promise<Customer> {
    return this.client.patch<Customer>(
      `/guilds/${guildId}/customers/${id}`,
      data
    );
  }

  addBalance(
    guildId: string,
    id: string,
    amount: string
  ): Promise<Customer> {
    return this.client.post<Customer>(
      `/guilds/${guildId}/customers/${id}/balance/add`,
      { amount }
    );
  }

  removeBalance(
    guildId: string,
    id: string,
    amount: string
  ): Promise<Customer> {
    return this.client.post<Customer>(
      `/guilds/${guildId}/customers/${id}/balance/remove`,
      { amount }
    );
  }

  delete(guildId: string, id: string): Promise<void> {
    return this.client.delete<void>(
      `/guilds/${guildId}/customers/${id}`
    );
  }
}