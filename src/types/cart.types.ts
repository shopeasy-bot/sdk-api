import { Product } from "./product.types";

export type CartStatus = "MAIN" | "COUPON" | "PAYMENT" | "APPROVED";

export interface CartItem {
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
  items?: CartItem[];

  createdAt?: Date;
  updatedAt?: Date;
}


