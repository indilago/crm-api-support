
export interface ILeadSubmissionInput {
  collectionDate?: string
  leads: ILeadInput[]
}
export interface LeadSubmissionInput {
  collectionDate: Date
  leads: ILeadInput[]
}
export interface ILeadInput {
  name: string
  phone?: string
  email?: string
  address?: string
  notes?: string
  city?: string
  province?: string
}

export interface ILeadSubmissionCreateResponse {
  leadSubmission: {
    id: number
    company_id: number
    user_id: number
    session_date: Date
    session_start?: Date
    session_end?: Date
  }
}
