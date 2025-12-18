import { Product } from "./product.types";

export interface SaleItem {
  id: string;
  saleId: string;
  productId: string;
  unitPrice: string;
  quantity: number;
  product?: Product;
}

export interface Sale {
  id: string;
  userId: string;
  guildId: string;
  total: string;
  feedbackStars?: number;
  items?: SaleItem[];
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