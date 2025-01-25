import TablePaginaton from '../../components/common/TablePaginaton/TablePagination'
import Input from '../../components/ui/input/Input'
import SearchResultsTable from './components/GithubRepositorySearchResultsTable'
import useGitubRepositorySearch from './hooks/useGithubRepositorySearch'

const SearchPage = () => {
  const { setSearchQuery, searchResults } = useGitubRepositorySearch()

  return (
    <>
      <Input onInputChange={setSearchQuery} />
      <SearchResultsTable searchResults={searchResults} />
      <TablePaginaton />
    </>
  )
}

export default SearchPage
