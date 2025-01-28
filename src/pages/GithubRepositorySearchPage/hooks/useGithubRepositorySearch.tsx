import { useCallback, useEffect, useMemo } from 'react'
import { GithubRepositorySearchResponse } from '../../../types/githubRepository.type'
import { useSearchContext } from '../../../contexts/search/useSearchContext'
import { useQuery } from '@tanstack/react-query'
import {
  NavigateOptions,
  URLSearchParamsInit,
  useSearchParams,
} from 'react-router-dom'

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
  const [searchParams, setSearchParams] = useSearchParams()

  // console.log('#debug searchParams value', searchParams)

  const searchParamsValue = useMemo(() => searchParams, [searchParams])

  const setSearchQuery = useCallback(
    (query: string) => {
      setQuery(query)
      setPage(1)
    },
    [setQuery, setPage]
  )

  const {
    data: searchResults,
    isLoading,
    isFetching,
    isError,
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

  // useEffect(() => {
  // setQuery(searchParams.get('query') || '')
  // setPage(parseInt(searchParams.get('page') || '1'))
  // }, [])

  useEffect(() => {
    console.log('#debug hook useEffect onSearchParamsChange')
    setQuery(searchParamsValue.get('query') || '')
    setPage(parseInt(searchParamsValue.get('page') || '1'))
  }, [setQuery, setPage, searchParamsValue])

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
  }
}

export default useGitubRepositorySearch
