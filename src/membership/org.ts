export interface IOrg {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  active: boolean;
  subdomain?: string;
  quoteImageId?: number;
}

export interface UpdateOrgInput {
  name?: string
  active?: boolean
  subdomain?: string
  quoteImageId?: number
}

export interface CreateOrgInput {
  name: string
  subdomain?: string
}

