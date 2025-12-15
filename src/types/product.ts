export type ProductStatus = "ACTIVED" | "DEACTIVATED" | "BANNED";
export type StockMode = "AUTOMATIC" | "MANUAL";

export interface Product {
  id: string;
  reference: string;
  guildId: string;
  createdBy: string;
  status: ProductStatus;

  title?: string | null;
  description?: string | null;
  price?: number | null;
  discount?: number | null;
  promotion?: boolean | null;
  promotivoValue?: number | null;

  stockMode: StockMode;
  stockText?: string | null;
  stockRepeat?: number | null;
  stockCount?: number | null;
  stockMin: number;
  stockMax: number;

  chat?: boolean | null;
  private?: boolean | null;
  sell?: boolean | null;
  coupon: boolean;

  createdAt?: string | null;
  updatedAt: string;
}

export interface CreateProductPayload {
  reference: string;
  createdBy: string;
  title?: string;
  description?: string;
  price?: number;
  discount?: number;
}
