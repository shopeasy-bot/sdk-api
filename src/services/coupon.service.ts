import { ApiClient } from "../api";
import type { Coupon, CouponValidationResult } from "../types/coupon.types";

export class CouponService {
  constructor(private client: ApiClient) {}

  create(
    guildId: string,
    data: Omit<Coupon, "id" | "guildId" | "uses" | "createdAt" | "updatedAt">
  ): Promise<Coupon> {
    return this.client.post<Coupon>(
      `/guilds/${guildId}/coupons`,
      data
    );
  }

  list(guildId: string): Promise<Coupon[]> {
    return this.client.get<Coupon[]>(
      `/guilds/${guildId}/coupons`
    );
  }

  getById(guildId: string, id: string): Promise<Coupon> {
    return this.client.get<Coupon>(
      `/guilds/${guildId}/coupons/${id}`
    );
  }

  getByReference(guildId: string, reference: string): Promise<Coupon> {
    return this.client.get<Coupon>(
      `/guilds/${guildId}/coupons/reference/${reference}`
    );
  }

  update(
    guildId: string,
    id: string,
    data: Partial<Omit<Coupon, "id" | "guildId" | "reference" | "createdBy" | "uses" | "createdAt" | "updatedAt">>
  ): Promise<Coupon> {
    return this.client.patch<Coupon>(
      `/guilds/${guildId}/coupons/${id}`,
      data
    );
  }

  delete(guildId: string, id: string): Promise<void> {
    return this.client.delete<void>(
      `/guilds/${guildId}/coupons/${id}`
    );
  }

  validate(
    guildId: string,
    reference: string,
    totalValue: number
  ): Promise<CouponValidationResult> {
    return this.client.post<CouponValidationResult>(
      `/guilds/${guildId}/coupons/validate/${reference}`,
      { totalValue }
    );
  }

  incrementUse(guildId: string, id: string): Promise<Coupon> {
    return this.client.patch<Coupon>(
      `/guilds/${guildId}/coupons/${id}/increment-use`,
      {}
    );
  }
}
