// src/index.ts
import { ApiClient, type ApiClientOptions } from "./api";
import { ProductsService } from "./services";

export class ShopEasyApi {
  public products: ProductsService;

  private api: ApiClient;

  constructor(options: ApiClientOptions) {
    this.api = new ApiClient(options);

    this.products = new ProductsService(this.api);
  }
}
