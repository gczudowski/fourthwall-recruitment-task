export type GithubRepositorySearchResponse = {
  total_count: number
  incomplete_results: boolean
  items: GithubRepositoryItem[]
}

export type GithubRepositoryItem = {
  id: number
  name: string
  owner: {
    login: string
  }
  html_url: string
  created_at: string
  stargazers_count: number
}
