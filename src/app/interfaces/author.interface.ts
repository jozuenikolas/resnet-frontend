export interface AuthorResult {
  scopusId: number
  names: string[]
  affiliations: string[]
  articles: number
  topics: string[]
}

export interface PaginationAuthorResult {
  data: AuthorResult[]
  total: number
}


export interface Author {
  scopusId: number
  firstName: string
  lastName: string
  authName: string
  initials: string
  affiliations: string[]
  articles: { scopusId: number, title: string }[]
}
