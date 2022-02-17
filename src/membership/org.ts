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
  address?: IAddress
}

export interface IUpdateOrgInput {
  name?: string
  active?: boolean
  subdomain?: string
  quoteImageId?: number
  address?: IUpdateAddressInput
}

export interface ICreateOrgInput {
  name: string
  subdomain?: string
}

