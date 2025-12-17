import { ApiClient } from "../api";
import type { Product } from "../types/product.types";

export class ProductService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: Omit<Product, "id" | "createdAt" | "updatedAt">
  ): Promise<Product> {
    return this.client.post<Product>(
      `/guilds/${guildId}/products`,
      data
    );
  }

  list(guildId: string): Promise<Product[]> {
    return this.client.get<Product[]>(
      `/guilds/${guildId}/products`
    );
  }

  getById(guildId: string, id: string): Promise<Product> {
    return this.client.get<Product>(
      `/guilds/${guildId}/products/${id}`
    );
  }

  update(
    guildId: string,
    id: string,
    data: Partial<Omit<Product, "id" | "reference" | "createdBy">>
  ): Promise<Product> {
    return this.client.patch<Product>(
      `/guilds/${guildId}/products/${id}`,
      data
    );
  }

  delete(
    guildId: string,
    id: string
  ): Promise<Product> {
    return this.client.delete<Product>(
      `/guilds/${guildId}/products/${id}`
    );
  }
}
