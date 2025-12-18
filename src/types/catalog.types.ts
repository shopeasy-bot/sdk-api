import type { Product } from "./product.types";

/**
 * Relação catalog ↔ product
 */
export interface CatalogProduct {
  catalogId: string;
  productId: string;
  product?: Product;
}

/**
 * Espelho de catalogSchema (API)
 */

export interface Catalog {
  id: string;

  guildId: string;
  reference: string;
  createBy: string;

  title?: string;
  description?: string;

  messages?: Array<string>;
  banners?: Array<string>;
  color?: string;
  placeholder?: string;

  createdAt?: string;
  updatedAt?: string;

  products?: CatalogProduct[];
}
