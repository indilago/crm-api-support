
export interface ILeadSubmissionInput {
  collectionDate?: string
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
  submission: ISubmission
}

export interface ISubmission {
  id: number
  orgId: number
  collectionDate: Date
  sessionStart?: Date
  sessionEnd?: Date
  submitterUserId: number
  submitterName: string
  leadsCount: number
}

export interface IListSubmissionsResponse {
  submissions: ISubmission[]
}

export interface ILeadSubmissionResponse {
  submission: ISubmission
}
