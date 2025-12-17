import { ApiClient, type ApiClientOptions } from "./api";
import { CatalogService, ConfigsService, ProductService } from "./services";
import type { Product } from './types/product.types';
import { GuildConfig } from './types/configs.types';
import { Catalog } from './types/catalog.types';

export class ShopEasyApi {
  public products: ProductService;
  public configs: ConfigsService;
  public catalogs: CatalogService;

  private api: ApiClient;

  constructor(options: ApiClientOptions) {
    this.api = new ApiClient(options);

    this.products = new ProductService(this.api);
    this.configs = new ConfigsService(this.api);
    this.catalogs = new CatalogService(this.api);
  }
};

export type { Product, GuildConfig, Catalog };