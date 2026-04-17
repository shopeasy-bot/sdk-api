export interface Image {
  id: string;
  guildId: string;
  name?: string;
  url: string;
  reference: string;
  expiration?: Date;
  blobId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
