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
import {Grade} from '../leads'

interface IPhoneNumber {
  label?: string
  number: string
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
  addresses: IAddress[]
  assignedUser?: {
    id: number,
    name: string
  }
  status?: {
    id: number
    name: string
  }
  stage?: {
    name: string
  }
  source?: {
    id: number
    name: string
  }
  createdByUserId?: number
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
  phone?: string
  homePhone?: string
  mobilePhone?: string
  businessPhone?: string
  faxNumber?: string
  email?: string
  addresses: ICreateAddressInput[]
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
    this.phone = input.phone
    this.homePhone = input.homePhone
    this.mobilePhone = input.mobilePhone
    this.businessPhone = input.businessPhone
    this.faxNumber = input.faxNumber
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
  phone?: string
  
  @IsOptional()
  homePhone?: string
  
  @IsOptional()
  mobilePhone?: string
  
  @IsOptional()
  businessPhone?: string
  
  @IsOptional()
  faxNumber?: string
  
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
