import { ApiClient } from "../api";

export class MobileDeviceService {
  constructor(private client: ApiClient) {}

  register(guildId: string, token: string): Promise<void> {
    return this.client.post<void>(`/guilds/${guildId}/mobile-devices`, { token });
  }

  unregister(guildId: string, token: string): Promise<void> {
    return this.client.delete<void>(`/guilds/${guildId}/mobile-devices`, { token });
  }
}
