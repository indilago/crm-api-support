import {CreateAddressInput, IAddress, ICreateAddressInput} from '../address'
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

interface IPhoneNumber {
  label?: string
  number: string
}

export enum Grade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

class PhoneNumber implements IPhoneNumber {
  constructor(number: string, label?: string) {
    this.label = label
    this.number = number
  }
  
  @IsOptional()
  @Length(2, 50)
  label?: string
  
  @Length(7, 50)
  number: string
}

export interface ICustomer {
  id: number
  createdAt: Date
  updatedAt: Date
  readonly displayName: string // Coalesced name/company name
  companyName: string
  name: string
  title: string
  firstName: string
  lastName: string
  phoneNumbers: IPhoneNumber[]
  email: string
  readonly addresses: IAddress[]
  assignedUser?: {
    id: number,
    name: string
  }
  status: {
    id: number
    name: string
  }
  stage: {
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
  lost?: boolean
  expectedValue?: number
  grade?: Grade
}

export interface ICreateCustomerInput {
  companyName?: string
  name?: string
  title?: string
  phoneNumbers?: IPhoneNumber[]
  email?: string
  readonly addresses: ICreateAddressInput[]
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

export class CreateCustomerInput implements ICreateCustomerInput {
  constructor(input: ICreateCustomerInput) {
    this.companyName = input.companyName
    this.name = input.name
    this.title = input.title
    this.phoneNumbers = input.phoneNumbers || []
    this.email = input.email
    this.addresses = input.addresses
    this.assignedUserId = input.assignedUserId
    this.statusId = input.statusId
    this.sourceId = input.sourceId
    this.website = input.website
    this.notes = input.notes
    this.lost = input.lost
    this.expectedValue = input.expectedValue
    this.grade = input.grade
  }
  
  @IsOptional()
  companyName?: string
  
  @IsOptional()
  name?: string
  
  @IsOptional()
  title?: string
  
  @IsOptional()
  @ValidateNested()
  @ArrayMaxSize(5)
  phoneNumbers: PhoneNumber[]
  
  @IsOptional()
  @IsEmail()
  email?: string
  
  @IsOptional()
  @ValidateNested()
  @ArrayMaxSize(5)
  readonly addresses: CreateAddressInput[]
  
  @IsOptional()
  @IsInt()
  assignedUserId?: number
  
  @IsOptional()
  @IsInt()
  statusId?: number
  
  @IsOptional()
  @IsInt()
  sourceId?: number
  
  @IsOptional()
  website?: string
  
  @IsOptional()
  @MaxLength(255)
  notes?: string
  
  @IsOptional()
  @IsBoolean()
  lost?: boolean
  
  @IsOptional()
  @IsNumber()
  expectedValue?: number
  
  @IsOptional()
  @IsEnum(Grade)
  grade?: Grade
}
