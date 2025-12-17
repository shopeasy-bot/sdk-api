import { ApiClient } from "../api";
import type { GuildConfig } from "../types/configs.types";

export class ConfigsService {
  constructor(private client: ApiClient) {}

  get(guildId: string): Promise<GuildConfig> {
    return this.client.get<GuildConfig>(
      `/guilds/${guildId}/configs`
    );
  }

  update(
    guildId: string,
    data: Omit<Partial<GuildConfig>, "guildId">
  ): Promise<GuildConfig> {
    return this.client.patch<GuildConfig>(
      `/guilds/${guildId}/configs`,
      data
    );
  }
}
