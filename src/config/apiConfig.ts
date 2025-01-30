export const API_URL = import.meta.env.VITE_API_URL

export const ENDPOINTS = {
  GITHUB_REPOS_SEARCH: '/search/repositories',
}

export const QUERY_CLIENT_CONFIG = {
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
  },
}
