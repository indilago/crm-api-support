import {AddressId, CreateAddressInput, IAddress, ICreateAddressInput, IUpdateAddressInput} from '../address'
import {
  ArrayMaxSize,
  IsBoolean,
  IsEmail, IsEnum,
  IsInt, IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
  MaxLength, ValidateIf,
  ValidateNested,
} from 'class-validator'

export enum Grade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

export interface ILead {
  id: number
  createdAt: Date
  updatedAt: Date
  displayName: string // Coalesced name/company name
  companyName?: string
  name: string
  title?: string
  phone?: string
  homePhone?: string
  mobilePhone?: string
  businessPhone?: string
  faxNumber?: string
  email?: string
  primaryAddress?: Omit<IAddress, 'orgId'|'subject'|'isPrimary'>
  assignedUser?: {
    id: number,
    name: string
  }
  status?: {
    id: number
    name: string
  }
  stage?: {
    id: number
    name: string
  }
  source?: {
    id: number
    name: string
  }
  createdByUserId: number
  website?: string
  position?: string
  notes?: string
  lost: boolean
  expectedValue?: number
  grade?: Grade
}

export interface ICreateLeadInput {
  companyName?: string
  name?: string
  title?: string
  phone?: string
  homePhone?: string
  mobilePhone?: string
  businessPhone?: string
  faxNumber?: string
  email?: string
  addresses?: ICreateAddressInput[]
  assignedUserId?: number
  statusId?: number
  sourceId?: number
  website?: string
  position?: string
  notes?: string
  lost?: boolean
  expectedValue?: number
  grade?: Grade
}

export type IUpdateLeadInput = Omit<ICreateLeadInput, 'addresses'>
