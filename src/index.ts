import { ApiClient, type ApiClientOptions } from "./api";
import { CartService, CatalogService, ConfigsService, ImageService, PaymentService, ProductService, SaleService } from "./services";
import type { Product } from './types/product.types';
import { GuildConfig } from './types/configs.types';
import { Catalog } from './types/catalog.types';
import { CustomerService } from "./services/customer.service";
import { Cart } from './types/cart.types';
import { Customer } from './types/customer.types';
import { Sale } from './types/sale.types';
import { Image } from './types/image.types';
import { Payment } from './types/payment.types';

export class ShopEasyApi {
  public products: ProductService;
  public configs: ConfigsService;
  public catalogs: CatalogService;
  public sales: SaleService;
  public carts: CartService;
  public customers: CustomerService;
  public images: ImageService;
  public payments: PaymentService;

  private api: ApiClient;

  constructor(options: ApiClientOptions) {
    this.api = new ApiClient(options);

    this.products = new ProductService(this.api);
    this.configs = new ConfigsService(this.api);
    this.catalogs = new CatalogService(this.api);
    this.sales = new SaleService(this.api);
    this.carts = new CartService(this.api);
    this.customers = new CustomerService(this.api);
    this.images = new ImageService(this.api);
    this.payments = new PaymentService(this.api);

  }
};

export type { Product, GuildConfig, Catalog, Cart, Customer, Sale, Image, Payment };