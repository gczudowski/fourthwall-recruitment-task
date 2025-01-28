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
import Input from '../../components/ui/input/Input'

const SearchPage = () => {
  const {
    query,
    isLoading,
    isError,
    searchResults,
    onSearchSubmit,
    onPageChange,
    page,
    maxPages,
  } = useGitubRepositorySearch()
  const [searchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('query') || ''

  const { register, setValue, handleSubmit } = useForm<{
    query: string
  }>({
    defaultValues: {
      query: '',
    },
  })

  useEffect(() => {
    setValue('query', queryFromUrl)
  }, [queryFromUrl, setValue])

  return (
    <PageWrapper>
      <SearchInputWrapper>
        <form onSubmit={handleSubmit(onSearchSubmit)}>
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
