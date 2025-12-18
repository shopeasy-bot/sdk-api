import { ApiClient } from "../api";
import type { Image } from "../types/image.types";

export class ImageService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: Omit<Image, "id" | "guildId" | "createdAt" | "updatedAt">
  ): Promise<Image> {
    return this.client.post<Image>(
      `/guilds/${guildId}/images`,
      data
    );
  }

  createMany(
    guildId: string,
    data: Array<Omit<Image, "id" | "guildId" | "createdAt" | "updatedAt">>
  ): Promise<Image[]> {
    return this.client.post<Image[]>(
      `/guilds/${guildId}/images/bulk`,
      data
    );
  }

  list(guildId: string): Promise<Image[]> {
    return this.client.get<Image[]>(
      `/guilds/${guildId}/images`
    );
  }

  getById(guildId: string, id: string): Promise<Image> {
    return this.client.get<Image>(
      `/guilds/${guildId}/images/${id}`
    );
  }

  getByReference(guildId: string, reference: string): Promise<Image> {
    return this.client.get<Image>(
      `/guilds/${guildId}/images/reference/${reference}`
    );
  }

  update(
    guildId: string,
    id: string,
    data: Partial<Omit<Image, "id" | "guildId" | "createdAt" | "updatedAt">>
  ): Promise<Image> {
    return this.client.patch<Image>(
      `/guilds/${guildId}/images/${id}`,
      data
    );
  }

  delete(guildId: string, id: string): Promise<void> {
    return this.client.delete<void>(
      `/guilds/${guildId}/images/${id}`
    );
  }

  deleteMany(guildId: string, ids: string[]): Promise<{ deleted: number; message: string }> {
    return this.client.delete<{ deleted: number; message: string }>(
      `/guilds/${guildId}/images`,
      ids
    );
  }
}