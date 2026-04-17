import type { PaymentProvider } from "./payment.types";

export type { PaymentProvider };

/**
 * Espelho de configSchema (API)
 */
export interface GuildConfig {
  guildId: string;

  colorHex: string;

  channelPublic?: string;
  channelPrivate?: string;
  channelFeds?: string;
  categoryCarts?: string;
  cartsNamePattern?: string;
  channelCall?: string;
  geminiKey?: string;

  staffRoles?: string[];
  staffUsers?: string[];
  clientRole?: string;
  clientRolePremium?: string;

  timeCart?: number;
  timePayment?: number;

  productMessage?: unknown;

  terms?: string;

  // Ticket
  ticketCategory?: string;
  ticketLogChannel?: string;
  ticketMessage?: unknown;
  ticketRoles?: string[];
  ticketAutoClose?: number;
  ticketMaxOpen?: number;
  ticketNamePattern?: string;
  ticketPriority?: boolean;

  updatedAt?: string;
}

export interface GuildPaymentConfig {
  guildId: string;
  providers: PaymentProvider[];

  chavePix?: string;
  chavePixStaticQrCode?: boolean;
  chavePixName?: string;
  chavePixCity?: string;

  walletApiKey?: string;

  mercadoPagoToken?: string;
  mercadoPagoWebhookSecret?: string;

  pagSeguroToken?: string;
  pagSeguroWebhookToken?: string;

  asaasApiKey?: string;
  asaasSandbox?: boolean;
  asaasWebhookToken?: string;

  efiBankClientId?: string;
  efiBankClientSecret?: string;
  efiBankPixKey?: string;
  efiBankWebhookHmac?: string;
  efiBankCertBase64?: string;
  efiBankSandbox?: boolean;
  efiBankToken?: string;

  stripePublicKey?: string;
  stripeSecretKey?: string;
  stripeWebhookSecret?: string;

  nowpaymentsApiKey?: string;
  nowpaymentsIpnSecret?: string;
  nowpaymentsSandbox?: boolean;
}
