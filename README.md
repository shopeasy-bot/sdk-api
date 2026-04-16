# shopeasy-api-js

Node.js SDK para a API da plataforma [ShopEasy](https://shopeasy.site).

## Instalação

```bash
npm install shopeasy-api-js
```

## Uso

```ts
import { ShopEasyApi } from "shopeasy-api-js";

const api = new ShopEasyApi({
  token: "seu-token-aqui",
  // baseUrl: "https://api.shopeasy.site" (padrão)
});
```

## Serviços disponíveis

| Serviço | Descrição |
|---|---|
| `api.products` | Produtos |
| `api.catalogs` | Catálogos |
| `api.carts` | Carrinhos e itens |
| `api.customers` | Clientes |
| `api.sales` | Vendas |
| `api.payments` | Pagamentos |
| `api.configs` | Configurações do servidor |
| `api.images` | Imagens |

## Exemplos

### Produtos

```ts
const guildId = "123456789";

// Listar
const products = await api.products.list(guildId);

// Buscar por ID
const product = await api.products.getById(guildId, "product-id");

// Criar
const newProduct = await api.products.create(guildId, {
  name: "Produto",
  price: 29.90,
  // ...
});

// Atualizar
await api.products.update(guildId, "product-id", { price: 19.90 });

// Deletar
await api.products.delete(guildId, "product-id");
```

### Carrinhos

```ts
// Criar carrinho
const cart = await api.carts.create(guildId, { userId: "user-id" });

// Buscar por usuário
const cart = await api.carts.getByUser(guildId, "user-id");

// Adicionar itens
await api.carts.addItems(guildId, cart.id, [
  { productId: "product-id", amount: 1, amountAvaliable: 10 },
]);

// Remover itens
await api.carts.deleteItems(guildId, cart.id, ["item-id"]);
```

## Tipos exportados

```ts
import type {
  Product,
  Catalog,
  Cart,
  Customer,
  Sale,
  Image,
  Payment,
  GuildConfig,
} from "shopeasy-api-js";
```

## Licença

MIT
