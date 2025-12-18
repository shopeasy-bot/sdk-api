export interface Coupon {
  id: string;
  reference: string;
  guildId: string;
  createdBy: string;
  discount?: number;
  
  discountMax?: string;
  valorMin?: string;
  valorMax?: string;
  amount?: number;
  uses?: number;
  expiration?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CouponValidationResult {
  valid: boolean;
  approved: boolean;
  discount?: string;
  discountValue?: string;
  message?: string;
  coupon?: Coupon;
}