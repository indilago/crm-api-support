
export interface ISession {
  token: string;
  userId: number;
  orgId: number;
  issuedAt: Date;
  expiresAt: Date;
  clientId: string;
}
