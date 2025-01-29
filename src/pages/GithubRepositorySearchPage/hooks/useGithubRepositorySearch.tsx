import { useCallback, useEffect } from 'react'
import { GithubRepositorySearchResponse } from '../../../types/githubRepository.type'
import { useSearchContext } from '../../../contexts/search/useSearchContext'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { PER_PAGE } from '../../../config/repositorySearchConfig'

const fetchRepositories = async (
  query: string,
  page: number
): Promise<GithubRepositorySearchResponse> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${PER_PAGE}`
  )
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories. Please try again later`)
  }
  return response.json()
}

function useGitubRepositorySearch() {
  const { query, setQuery, page, setPage, maxPages, setMaxPages } =
    useSearchContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('query') || ''

  const setSearchQuery = useCallback(
    (query: string) => {
      setQuery(query)
      setPage(1)
    },
    [setQuery, setPage]
  )

  const onSearchSubmit = async (data: { query: string }) => {
    setSearchQuery(data.query)
    setSearchParams({ query: data.query, page: '1' })
  }

  const onPageChange = useCallback(
    (newPageValue: number) => {
      setPage(newPageValue)
      setSearchParams({
        query: queryFromUrl,
        page: String(newPageValue),
      })
    },
    [queryFromUrl, setSearchParams, setPage]
  )

  const {
    data: searchResults,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ['repositories', query, page],
    queryFn: () => fetchRepositories(query, page),
    enabled: !!query,
    placeholderData: (prev) => prev,
  })

  useEffect(() => {
    if (searchResults?.total_count) {
      setMaxPages(Math.ceil(searchResults?.total_count / 20))
    }
  }, [searchResults, setMaxPages])

  useEffect(() => {
    setQuery(searchParams.get('query') || '')
    setPage(parseInt(searchParams.get('page') || '1'))
  }, [setQuery, setPage, searchParams])

  return {
    query,
    setSearchQuery,
    page,
    setPage,
    maxPages,
    searchResults,
    isLoading,
    isFetching,
    isError,
    error,
    onSearchSubmit,
    onPageChange,
  }
}

export default useGitubRepositorySearch
