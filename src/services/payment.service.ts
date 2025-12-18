import { ApiClient } from "../api";
import type { Payment, PaymentValidationResult } from "../types/payment.types";

export class PaymentService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: Omit<Payment, "id" | "guildId" | "approved" | "createdAt" | "updatedAt">
  ): Promise<Payment> {
    return this.client.post<Payment>(
      `/guilds/${guildId}/payments`,
      data
    );
  }

  list(guildId: string): Promise<Payment[]> {
    return this.client.get<Payment[]>(
      `/guilds/${guildId}/payments`
    );
  }

  listApproved(guildId: string): Promise<Payment[]> {
    return this.client.get<Payment[]>(
      `/guilds/${guildId}/payments/approved`
    );
  }

  listPending(guildId: string): Promise<Payment[]> {
    return this.client.get<Payment[]>(
      `/guilds/${guildId}/payments/pending`
    );
  }

  getById(guildId: string, id: string): Promise<Payment> {
    return this.client.get<Payment>(
      `/guilds/${guildId}/payments/${id}`
    );
  }

  getByCart(guildId: string, cartId: string): Promise<Payment> {
    return this.client.get<Payment>(
      `/guilds/${guildId}/payments/cart/${cartId}`
    );
  }

  update(
    guildId: string,
    id: string,
    data: Partial<Omit<Payment, "id" | "guildId" | "cartId" | "createdAt" | "updatedAt">>
  ): Promise<Payment> {
    return this.client.patch<Payment>(
      `/guilds/${guildId}/payments/${id}`,
      data
    );
  }

  approve(guildId: string, id: string): Promise<Payment> {
    return this.client.patch<Payment>(
      `/guilds/${guildId}/payments/${id}/approve`,
      {}
    );
  }

  validate(guildId: string, id: string): Promise<PaymentValidationResult> {
    return this.client.get<PaymentValidationResult>(
      `/guilds/${guildId}/payments/${id}/validate`
    );
  }

  validateByCart(guildId: string, cartId: string): Promise<PaymentValidationResult> {
    return this.client.get<PaymentValidationResult>(
      `/guilds/${guildId}/payments/cart/${cartId}/validate`
    );
  }

  delete(guildId: string, id: string): Promise<void> {
    return this.client.delete<void>(
      `/guilds/${guildId}/payments/${id}`
    );
  }
}
