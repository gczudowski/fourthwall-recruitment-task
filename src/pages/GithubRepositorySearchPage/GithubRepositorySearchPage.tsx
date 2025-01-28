import {
  NavigateOptions,
  URLSearchParamsInit,
  useSearchParams,
} from 'react-router-dom'
import TablePaginaton from '../../components/common/TablePaginaton/TablePagination'
import SearchResultsTable from './components/GithubRepositorySearchResultsTable'
import {
  PageWrapper,
  SearchInputWrapper,
} from './GithubRepositorySearchPage.styled'
import useGitubRepositorySearch from './hooks/useGithubRepositorySearch'
import { useForm } from 'react-hook-form'
import { useCallback, useEffect } from 'react'
import Input from '../../components/ui/input/Input'

const SearchPage = () => {
  const setSearchParamsCallback = useCallback(
    (
      nextInit?:
        | URLSearchParamsInit
        | ((prev: URLSearchParams) => URLSearchParamsInit),
      navigateOpts?: NavigateOptions
    ) => {
      setSearchParams(nextInit, navigateOpts)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const {
    query,
    isLoading,
    isError,
    searchResults,
    setSearchQuery,
    page,
    setPage,
    maxPages,
  } = useGitubRepositorySearch()
  const [searchParams, setSearchParams] = useSearchParams()

  const { register, setValue, handleSubmit } = useForm<{
    query: string
    page: number
  }>({
    defaultValues: {
      query: '',
      page: 1,
    },
  })
  const queryFromUrl = searchParams.get('query') || ''
  const pageFromUrl = searchParams.get('page') || '1'

  useEffect(() => {
    setValue('query', queryFromUrl)
  }, [queryFromUrl, setValue])

  useEffect(() => {
    setValue('page', parseInt(pageFromUrl))
  }, [pageFromUrl, setValue])

  const onSubmit = async (data: { query: string; page: number }) => {
    setSearchQuery(data.query)
    setSearchParams({ query: data.query, page: '1' })
  }

  const onPageChange = useCallback(
    (newPageValue: number) => {
      setPage(newPageValue)
      setSearchParamsCallback({
        query: queryFromUrl,
        page: String(newPageValue),
      })
    },
    [queryFromUrl, setSearchParamsCallback, setPage]
  )

  return (
    <PageWrapper>
      <SearchInputWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('query')} />
        </form>
      </SearchInputWrapper>
      {query && !isLoading && !isError && searchResults?.items?.length ? (
        <>
          <SearchResultsTable />
          <TablePaginaton
            page={page}
            maxPages={maxPages}
            onPageChange={onPageChange}
          />
        </>
      ) : null}
    </PageWrapper>
  )
}

export default SearchPage
