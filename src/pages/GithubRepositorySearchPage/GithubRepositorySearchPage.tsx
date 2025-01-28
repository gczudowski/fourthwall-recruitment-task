import { useSearchParams } from 'react-router-dom'
import TablePaginaton from '../../components/common/TablePaginaton/TablePagination'
import SearchResultsTable from './components/GithubRepositorySearchResultsTable'
import {
  PageWrapper,
  SearchInputWrapper,
} from './GithubRepositorySearchPage.styled'
import useGitubRepositorySearch from './hooks/useGithubRepositorySearch'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const SearchPage = () => {
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

  const { register, setValue, handleSubmit } = useForm<{ query: string }>({
    defaultValues: {
      query: query,
    },
  })
  const queryFromUrl = searchParams.get('query') || ''

  const onSubmit = async (data: { query: string }) => {
    setSearchQuery(data.query)
    setSearchParams({ query: data.query })
  }

  useEffect(() => {
    setValue('query', queryFromUrl)
  }, [queryFromUrl, setValue])

  return (
    <PageWrapper>
      <SearchInputWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('query')} placeholder="Search..." />
        </form>
      </SearchInputWrapper>
      {query && !isLoading && !isError && searchResults?.items?.length ? (
        <>
          <SearchResultsTable />
          <TablePaginaton page={page} setPage={setPage} maxPages={maxPages} />
        </>
      ) : null}
    </PageWrapper>
  )
}

export default SearchPage
