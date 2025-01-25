import { useCallback, useEffect, useState } from 'react'
import { GithubRepositorySearchResponse } from '../../../types/githubRepository.type'
import { useSearchContext } from '../../../contexts/search/useSearchContext'

const PER_PAGE = 20

function useGitubRepositorySearch() {
  const [searchResults, setSearchResults] = useState(
    {} as GithubRepositorySearchResponse
  )
  const { query, setQuery, page, setPage, maxPages, setMaxPages } =
    useSearchContext()

  const setSearchQuery = useCallback(
    (query: string) => {
      setQuery(query)
      setPage(1)
    },
    [setQuery, setPage]
  )

  const fetchRepositories = useCallback(
    async (query: string, page: number) => {
      if (!query) return

      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${PER_PAGE}`
      )

      const json = await response.json()

      if (json?.items?.length) {
        setSearchResults(json)
        setMaxPages(Math.ceil(json.total_count / 20))
      }
    },
    [setSearchResults, setMaxPages]
  )

  useEffect(() => {
    fetchRepositories(query, page)
  }, [fetchRepositories, query, page])

  return {
    query,
    setSearchQuery,
    searchResults,
    setSearchResults,
    page,
    setPage,
    maxPages,
  }
}

export default useGitubRepositorySearch
