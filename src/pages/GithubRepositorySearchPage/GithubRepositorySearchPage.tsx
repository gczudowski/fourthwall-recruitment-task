import TablePaginaton from '../../components/common/TablePaginaton/TablePagination'
import Input from '../../components/ui/input/Input'
import SearchResultsTable from './components/GithubRepositorySearchResultsTable'
import {
  PageWrapper,
  SearchInputWrapper,
} from './GithubRepositorySearchPage.styled'
import useGitubRepositorySearch from './hooks/useGithubRepositorySearch'

const SearchPage = () => {
  const { query, setSearchQuery, page, setPage, maxPages } =
    useGitubRepositorySearch()

  return (
    <PageWrapper>
      <SearchInputWrapper>
        <Input onInputChange={setSearchQuery} />
      </SearchInputWrapper>
      {query ? (
        <>
          <SearchResultsTable />
          <TablePaginaton page={page} setPage={setPage} maxPages={maxPages} />
        </>
      ) : null}
    </PageWrapper>
  )
}

export default SearchPage
