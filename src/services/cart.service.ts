import { ApiClient } from "../api";
import type { Cart } from "../types/cart.types";

export class CartService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: Omit<Cart, "id" | "guildId" | "items" | "createdAt" | "updatedAt">
  ): Promise<Cart> {
    return this.client.post<Cart>(
      `/guilds/${guildId}/carts`,
      data
    );
  }

  list(guildId: string): Promise<Cart[]> {
    return this.client.get<Cart[]>(
      `/guilds/${guildId}/carts`
    );
  }

  getById(guildId: string, id: string): Promise<Cart> {
    return this.client.get<Cart>(
      `/guilds/${guildId}/carts/${id}`
    );
  }

  getByUser(guildId: string, userId: string): Promise<Cart> {
    return this.client.get<Cart>(
      `/guilds/${guildId}/carts/user/${userId}`
    );
  }

  update(
    guildId: string,
    id: string,
    data: Partial<Omit<Cart, "id" | "guildId" | "userId" | "items" | "createdAt" | "updatedAt">>
  ): Promise<Cart> {
    return this.client.patch<Cart>(
      `/guilds/${guildId}/carts/${id}`,
      data
    );
  }

  delete(guildId: string, id: string): Promise<void> {
    return this.client.delete<void>(
      `/guilds/${guildId}/carts/${id}`
    );
  }

  // Cart Items
  addItems(
    guildId: string,
    cartId: string,
    items: Array<{
      productId: string;
      amount: number;
      amountAvaliable: number;
    }>
  ): Promise<Cart> {
    return this.client.post<Cart>(
      `/guilds/${guildId}/carts/${cartId}/items`,
      items
    );
  }

  updateItem(
    guildId: string,
    cartId: string,
    itemId: string,
    data: {
      amount?: number;
      amountAvaliable?: number;
    }
  ): Promise<Cart> {
    return this.client.patch<Cart>(
      `/guilds/${guildId}/carts/${cartId}/items/${itemId}`,
      data
    );
  }

  deleteItems(
    guildId: string,
    cartId: string,
    itemIds: string[]
  ): Promise<Cart> {
    return this.client.delete<Cart>(
      `/guilds/${guildId}/carts/${cartId}/items`,
      itemIds
    );
  }
}