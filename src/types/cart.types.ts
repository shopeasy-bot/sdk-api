import { Product } from "./product.types";

export type CartStatus = "MAIN" | "COUPON" | "PAYMENT" | "APPROVED" | "PENDING_APPROVAL";

export type PaymentMode = "PIX" | "MERCADOPAGO" | "SALDO" | "CRIPTO";

export interface CartProduct {
  id: string;
  cartId: string;
  productId: string;
  amount: number;
  amountAvaliable: number;
  product?: Product;
}

export interface Cart {
  id: string;
  guildId: string;
  userId: string;
  message: string;
  status: CartStatus;
  paymentMode: PaymentMode;
  products?: CartProduct[];
  expireAt?: Date;
  botClient?: string;
  orderId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
