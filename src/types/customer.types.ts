export interface Customer {
  id: string;
  userId: string;
  guildId: string;
  balance: string;
  notify: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
