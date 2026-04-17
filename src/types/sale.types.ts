import { Product } from "./product.types";

export interface SaleItem {
  id: string;
  saleId: string;
  productId?: string;
  valueTotal: string;
  quantity: number;
  deliveryStock?: unknown;
  deliveryPedding?: boolean;
  deliveryPeddingAmount?: number;
  product?: Product;
}

export interface Sale {
  id: string;
  userId: string;
  guildId: string;
  totalValue: string;
  feedbackStars?: number;
  saleProducts?: SaleItem[];
  createdAt?: Date;
}

export interface SaleStats {
  totalSales: number;
  totalRevenue: string;
  averageFeedback: number | null;
  totalWithFeedback: number;
}

export interface TopProduct {
  productId: string;
  totalQuantity: number;
  totalRevenue: string;
}