export interface Article {
  title: string
  abstract: string
  authors: { scopusId: string, name: string }[]
  affiliations: string[]
  topics: string[]
}
