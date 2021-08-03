export enum EntityType {
  Customer = 1,
  Quote = 2,
  QuoteItem = 3,
}

export interface ICustomValue {
  id: number
  fieldId: number
  entityId: number
  fieldName: string
  value: string
}

export interface ICustomField {
  id: number
  entityTypeId: EntityType
  name: string
}

