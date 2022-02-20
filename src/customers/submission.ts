
export interface ILeadSubmissionInput {
  collectionDate: string
  city: string
  province?: string
  notes?: string
}

export interface ILeadInput {
  name: string
  phone?: string
  email?: string
  address?: string
  notes?: string
}

export interface ILeadSubmissionCreateResponse {
  submission: ISubmission
}

export interface ISubmission {
  id: number
  createdAt: Date
  orgId: number
  collectionDate: Date
  city: string
  province?: string
  sessionStart?: Date
  sessionEnd?: Date
  submitterUserId: number
  submitterName: string
  leadsCount: number
  notes?: string
}

export interface IListSubmissionsResponse {
  submissions: ISubmission[]
}

export interface ILeadSubmissionResponse {
  submission: ISubmission
}
