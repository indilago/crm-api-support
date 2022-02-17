import {
  Length, IsBoolean, IsOptional, IsNumber,
} from 'class-validator'

export enum AddressableType {
  Customer = 'Customer',
  Company = 'Company',
  Quote = 'Quote',
}

export interface IAddress {
  id: number
  orgId: number
  subject: {
    type: AddressableType,
    id: number,
  }
  isPrimary: boolean
  label?: string
  street: string[]
  unit?: string
  city?: string
  postalCode?: string
  province?: string
  country?: string
  coordinates?: IPoint
}

export interface IPoint {
  lat: number
  lng: number
}

export class Point implements IPoint {
  constructor(lat: number, lng: number) {
    this.lat = lat
    this.lng = lng
  }
  
  @IsNumber()
  lat: number
  
  @IsNumber()
  lng: number
}

export interface IUpdateAddressInput {
  primary?: boolean
  label?: string
  street?: string[]
  unit?: string
  city?: string
  postalCode?: string
  province?: string
  country?: string
  coordinates?: IPoint
}

export class UpdateAddressInput implements IUpdateAddressInput {
  @IsBoolean()
  primary?: boolean
  
  @IsOptional()
  @Length(3, 50)
  label?: string
  
  @IsOptional()
  street?: string[]
  
  @IsOptional()
  unit?: string
  
  @IsOptional()
  city?: string
  
  @IsOptional()
  postalCode?: string
  
  @IsOptional()
  province?: string
  
  @IsOptional()
  country?: string
}

export interface ICreateAddressInput {
  primary?: boolean
  label?: string
  street?: string[]
  unit?: string
  city?: string
  postalCode?: string
  province?: string
  country?: string
}

export class CreateAddressInput implements ICreateAddressInput {
  @IsBoolean()
  primary?: boolean
  
  @IsOptional()
  @Length(3, 50)
  label?: string
  
  @IsOptional()
  street?: string[]
  
  @IsOptional()
  unit?: string
  
  @IsOptional()
  city?: string
  
  @IsOptional()
  postalCode?: string
  
  @IsOptional()
  province?: string
  
  @IsOptional()
  country?: string
}
