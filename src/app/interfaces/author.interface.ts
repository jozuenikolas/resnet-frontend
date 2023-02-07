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
