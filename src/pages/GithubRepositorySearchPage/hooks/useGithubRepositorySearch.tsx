import { useCallback, useEffect } from 'react'
import { GithubRepositorySearchResponse } from '../../../types/githubRepository.type'
import { useSearchContext } from '../../../contexts/search/useSearchContext'
import { useQuery } from '@tanstack/react-query'

const PER_PAGE = 20

const fetchRepositories = async (
  query: string,
  page: number
): Promise<GithubRepositorySearchResponse> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${PER_PAGE}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch repositories')
  }
  return response.json()
}

function useGitubRepositorySearch() {
  const { query, setQuery, page, setPage, maxPages, setMaxPages } =
    useSearchContext()

  const setSearchQuery = useCallback(
    (query: string) => {
      setQuery(query)
      setPage(1)
      setMaxPages(0)
    },
    [setQuery, setPage]
  )

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['repositories', query, page],
    queryFn: () => fetchRepositories(query, page),
    enabled: !!query,
  })

  useEffect(() => {
    if (searchResults?.total_count) {
      setMaxPages(Math.ceil(searchResults?.total_count / 20))
    }
  }, [searchResults, setMaxPages])

  return {
    query,
    setSearchQuery,
    page,
    setPage,
    maxPages,
    searchResults,
    isLoading,
    isError,
  }
}

export default useGitubRepositorySearch
