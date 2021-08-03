import {ICustomValue} from '../custom-fields'
import {IAddress} from '../address'

export interface IQuoteSummary {
  id: number
  createdAt: Date;
  updatedAt: Date;
  number: string;
  invoiceDate: Date; // No time
  quoteDate: Date;
  billingName: string;
}

export interface IQuoteItem {
  id: number
  quoteId: number
  description?: string
  quantity: number
  notes?: string
  price?: number
  taxClassId?: number
  productId: number
  index?: number
  customValues: ICustomValue[]
}

export interface UpdateQuoteInput {
  number?: string
  addressId?: number
  quoteDate?: string
  billingName?: string
  notes?: string
  notes2?: string
}


export interface CreateItemInput {
  description: string
  quantity?: number
  notes?: string
  price?: number
  taxClassId?: number
  productId?: number
  index?: number
  // customValues?: ICustomValue[]
}

export interface UpdateItemInput {
  description?: string
  quantity?: number
  notes?: string
  price?: number
  taxClassId?: number
  productId?: number
  index?: number
  // customValues?: ICustomValue[]
}

export interface IQuote {
  id: number
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
  number: string;
  quoteDate: Date;
  invoiceDate: Date; // No time
  billingName: string;
  address?: IAddress;
  notes?: string;
  notes2?: string;
  items: IQuoteItem[];
  // emailed: boolean;
  // status: number;
  // quoted_user_id: number;
  // booked_user_id: number;
  // installed_user_id: number;
  // cancelled_user_id: number;
  // quoted_date: string;
  // booked_date: string;
  // installed_date: string;
  // cancelled_date: string;
  // quoted_amount: string;
  // booked_amount: string;
  // installed_amount: string;
  // cancelled_amount: string;
  // quoted_notes: string;
  // booked_notes: string;
  // installed_notes: string;
  // cancelled_notes: string;
}
