export type PaymentProvider =
  | "mercadoPago"
  | "pixsemiauto"
  | "efibank"
  | "wallet"
  | "pagseguro"
  | "asaas"
  | "stripe"
  | "nowpayments";

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
