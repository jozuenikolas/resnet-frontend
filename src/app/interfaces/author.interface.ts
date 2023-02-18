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
  links: { source: number, target: number, collabStrength: number }[]
  nodes: AuthorNode[]
}

export interface AuthorNode {
  scopusId: number,
  initials: string,
  firstName: string,
  lastName: string
}


//{ scopusId: string, initials: string, firstName: string, lastName: string }

