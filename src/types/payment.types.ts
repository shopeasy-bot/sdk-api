export type PaymentProvider = "MERCADO_PAGO" | "STRIPE" | "PAYPAL" | "PIX" | "MANUAL";

export interface Payment {
  id: string;
  cartId?: string;
  guildId: string;
  paymentProvider?: PaymentProvider;
  approved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PaymentValidationResult {
  valid: boolean;
  approved: boolean;
  message: string;
  payment?: Payment;
}