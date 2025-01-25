import { useCallback, useEffect, useState } from 'react'
import { GithubRepositorySearchResponse } from '../../../types/githubRepository.type'

function useGitubRepositorySearch() {
  const [searchResults, setSearchResults] = useState(
    {} as GithubRepositorySearchResponse
  )
  const [query, setQuery] = useState('')

  const fetchRepositories = useCallback(async (query: string) => {
    if (!query) return

    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}`
    )

    const json = await response.json()

    if (json.items.length) {
      setSearchResults(json)
    }
  }, [])

  useEffect(() => {
    fetchRepositories(query)
  }, [fetchRepositories, query])

  return {
    query,
    setQuery,
    searchResults,
    setSearchResults,
  }
}

export default useGitubRepositorySearch
