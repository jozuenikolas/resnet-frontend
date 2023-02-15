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

export interface Coauthors {
  links: { source: string, target: string, collabStrength: string }[]
  nodes: { scopusId: string, initials: string, firstName: string, lastName: string }[]
}


