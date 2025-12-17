//#region src/api.d.ts
interface ApiClientOptions {
  baseUrl: string;
  token?: string;
}
declare class ApiClient {
  private options;
  constructor(options: ApiClientOptions);
  private get headers();
  request<T>(path: string, options?: RequestInit): Promise<T>;
  get<T>(path: string): Promise<T>;
  post<T>(path: string, body?: unknown): Promise<T>;
  patch<T>(path: string, body?: unknown): Promise<T>;
  delete<T>(path: string): Promise<T>;
}
//#endregion
//#region src/types/product.d.ts
type ProductStatus = "ACTIVED" | "DEACTIVATED" | "BANNED";
type StockMode = "AUTOMATIC" | "MANUAL";
interface Product {
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
interface CreateProductPayload {
  reference: string;
  createdBy: string;
  title?: string;
  description?: string;
  price?: number;
  discount?: number;
}
//#endregion
//#region src/services/product.service.d.ts
declare class ProductsService {
  private api;
  constructor(api: ApiClient);
  getById(guildId: string, id: string): Promise<Product>;
  create(guildId: string, payload: CreateProductPayload): Promise<Product>;
  update(guildId: string, id: string, payload: Partial<CreateProductPayload>): Promise<Product>;
  delete(guildId: string, id: string): Promise<{
    success: boolean;
  }>;
}
//#endregion
//#region src/index.d.ts
declare class ShopEasyApi {
  products: ProductsService;
  private api;
  constructor(options: ApiClientOptions);
}
//#endregion
export { ShopEasyApi };