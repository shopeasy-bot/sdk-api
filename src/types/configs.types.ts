export type PaymentProvider =
  | "MERCADOPAGO"
  | "PIXSEMIAUTO"
  | "EFIBANK";

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
  channelCall?: string;

  staffRoles?: string[];
  staffUsers?: string[];
  clientRole?: string;
  clientRolePremium?: string;

  timeCart?: number;
  timePayment?: number;

  paymentProvider?: PaymentProvider;

  mercadoPagoToken?: string;
  efiBankToken?: string;

  chavePix?: string;
  chavePixStaticQrCode?: boolean;
  chavePixName?: string;
  chavePixCity?: string;

  terms?: string;

  updatedAt?: string;
}
