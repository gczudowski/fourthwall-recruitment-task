import { useCallback, useEffect } from 'react'
import { GithubRepositorySearchResponse } from '../../../types/githubRepository.type'
import { useSearchContext } from '../../../contexts/search/useSearchContext'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { PER_PAGE } from '../../../config/repositorySearchConfig'
import { ENDPOINTS } from '../../../config/apiConfig'
import { useFetcher } from '../../../hooks/useFetcher'

function useGitubRepositorySearch() {
  const { query, setQuery, page, setPage, maxPages, setMaxPages } =
    useSearchContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('query') || ''
  const { fetcher } = useFetcher()

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
    queryFn: () =>
      fetcher<GithubRepositorySearchResponse>({
        endpoint: ENDPOINTS.GITHUB_REPOS_SEARCH,
        method: 'GET',
        queryParams: {
          q: query,
          page,
          per_page: PER_PAGE,
        },
      }),
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
