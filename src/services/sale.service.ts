// sale.service.ts
import { ApiClient } from "../api";
import type { Sale, SaleItem, SaleStats, TopProduct } from "../types/sale.types";

export class SaleService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: {
      userId: string;
      total: string;
      items: Array<{
        productId: string;
        unitPrice: string;
        quantity: number;
      }>;
    }
  ): Promise<Sale> {
    return this.client.post<Sale>(
      `/guilds/${guildId}/sales`,
      data
    );
  }

  list(guildId: string): Promise<Sale[]> {
    return this.client.get<Sale[]>(
      `/guilds/${guildId}/sales`
    );
  }

  getById(guildId: string, id: string): Promise<Sale> {
    return this.client.get<Sale>(
      `/guilds/${guildId}/sales/${id}`
    );
  }

  getByUser(guildId: string, userId: string): Promise<Sale[]> {
    return this.client.get<Sale[]>(
      `/guilds/${guildId}/sales/user/${userId}`
    );
  }

  getByPeriod(
    guildId: string,
    startDate?: string,
    endDate?: string
  ): Promise<Sale[]> {
    const params = new URLSearchParams();
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    
    return this.client.get<Sale[]>(
      `/guilds/${guildId}/sales/period?${params.toString()}`
    );
  }

  getStats(
    guildId: string,
    startDate?: string,
    endDate?: string
  ): Promise<SaleStats> {
    const params = new URLSearchParams();
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);
    
    return this.client.get<SaleStats>(
      `/guilds/${guildId}/sales/stats?${params.toString()}`
    );
  }

  getTopProducts(guildId: string, limit: number = 10): Promise<TopProduct[]> {
    return this.client.get<TopProduct[]>(
      `/guilds/${guildId}/sales/top-products?limit=${limit}`
    );
  }

  getItems(guildId: string, saleId: string): Promise<SaleItem[]> {
    return this.client.get<SaleItem[]>(
      `/guilds/${guildId}/sales/${saleId}/items`
    );
  }

  addFeedback(
    guildId: string,
    id: string,
    feedbackStars: number
  ): Promise<Sale> {
    return this.client.post<Sale>(
      `/guilds/${guildId}/sales/${id}/feedback`,
      { feedbackStars }
    );
  }

  delete(guildId: string, id: string): Promise<void> {
    return this.client.delete<void>(
      `/guilds/${guildId}/sales/${id}`
    );
  }
}
