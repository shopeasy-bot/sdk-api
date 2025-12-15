import type { ApiClient } from "../api";
import type { CreateProductPayload, Product } from "../types/product";

export class ProductsService {
  constructor(private api: ApiClient) {}

  getById(guildId: string, id: string) {
    return this.api.get<Product>(`/guilds/${guildId}/products/${id}`);
  }

  create(guildId: string, payload: CreateProductPayload) {
    return this.api.post<Product>(`/guilds/${guildId}/products`, payload);
  }

  update(guildId: string, id: string, payload: Partial<CreateProductPayload>) {
    return this.api.patch<Product>(
      `/guilds/${guildId}/products/${id}`,
      payload,
    );
  }

  delete(guildId: string, id: string) {
    return this.api.delete<{ success: boolean }>(
      `/guilds/${guildId}/products/${id}`,
    );
  }
}
