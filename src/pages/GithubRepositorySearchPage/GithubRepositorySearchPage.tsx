import TablePaginaton from '../../components/common/TablePaginaton/TablePagination'
import Input from '../../components/ui/input/Input'
import SearchResultsTable from './components/GithubRepositorySearchResultsTable'
import {
  PageWrapper,
  SearchInputWrapper,
} from './GithubRepositorySearchPage.styled'
import useGitubRepositorySearch from './hooks/useGithubRepositorySearch'

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

  return (
    <PageWrapper>
      <SearchInputWrapper>
        <Input onInputChange={setSearchQuery} initialValue={query} />
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
