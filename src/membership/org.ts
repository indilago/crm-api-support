import {IAddress, IUpdateAddressInput} from '../address'

export interface IOrg {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  active: boolean;
  subdomain?: string;
  quoteImageId?: number;
}

export interface IOrgDetails extends IOrg {
  addresses: IAddress[]
}

export interface UpdateOrgInput {
  name?: string
  active?: boolean
  subdomain?: string
  quoteImageId?: number
  address?: IUpdateAddressInput
}

export interface CreateOrgInput {
  name: string
  subdomain?: string
}

