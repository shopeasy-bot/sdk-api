export type ProductStatus =
  | "ACTIVED"
  | "DEACTIVATED"
  | "BANNED";

export type StockMode =
  | "AUTOMATIC"
  | "MANUAL";

/**
 * Espelho de productSchema (API)
 */
export interface Product {
  id: string;

  reference: string;
  createdBy: string;

  status?: ProductStatus;

  title?: string;
  description?: string;

  // Decimal do Prisma chega como string | number
  price: string ;
  discount?: string | number;

  promotion?: boolean;
  promotivoValue?: number;

  banners?: unknown;
  messages?: unknown;

  stockMode?: StockMode;
  stockItems?: string[];
  stockText?: string;
  stockRepeat?: number;
  stockCount?: number;

  instructions?: string;

  stockMin?: number;
  stockMax?: number;

  usersNotifyStock?: unknown;

  chat?: boolean;
  private?: boolean;
  deshighlight?: boolean;
  sell?: boolean;

  coupon?: boolean;
  colorHex?: string;

  createdAt?: string; // date → ISO string
  updatedAt?: string; // date → ISO string
}
