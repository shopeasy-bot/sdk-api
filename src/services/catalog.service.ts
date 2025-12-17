import { ApiClient } from "../api";
import type { Catalog } from "../types/catalog.types";

export class CatalogService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: Omit<Catalog, "id" | "guildId" | "products" | "createdAt" | "updatedAt">
  ): Promise<Catalog> {
    return this.client.post<Catalog>(
      `/guilds/${guildId}/catalogs`,
      data
    );
  }

  list(guildId: string): Promise<Catalog[]> {
    return this.client.get<Catalog[]>(
      `/guilds/${guildId}/catalogs`
    );
  }

  getById(guildId: string, id: string): Promise<Catalog> {
    return this.client.get<Catalog>(
      `/guilds/${guildId}/catalogs/${id}`
    );
  }

  update(
    guildId: string,
    id: string,
    data: Partial<Omit<Catalog, "id" | "guildId" | "reference" | "createBy" | "products">>
  ): Promise<Catalog> {
    return this.client.patch<Catalog>(
      `/guilds/${guildId}/catalogs/${id}`,
      data
    );
  }

  delete(
    guildId: string,
    id: string
  ): Promise<Catalog> {
    return this.client.delete<Catalog>(
      `/guilds/${guildId}/catalogs/${id}`
    );
  }

  addProducts(
    guildId: string,
    productIds: string[]
  ): Promise<Catalog> {
    return this.client.post<Catalog>(
      `/guilds/${guildId}/catalogs/products`,
      productIds
    );
  }
}
