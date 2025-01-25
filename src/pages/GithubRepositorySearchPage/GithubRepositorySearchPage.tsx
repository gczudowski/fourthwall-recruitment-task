import TablePaginaton from '../../components/common/TablePaginaton/TablePagination'
import Input from '../../components/ui/input/Input'
import SearchResultsTable from './components/GithubRepositorySearchResultsTable'
import useGitubRepositorySearch from './hooks/useGithubRepositorySearch'

const SearchPage = () => {
  const { setSearchQuery, page, setPage, maxPages } = useGitubRepositorySearch()

  return (
    <>
      <Input onInputChange={setSearchQuery} />
      <SearchResultsTable />
      <TablePaginaton page={page} setPage={setPage} maxPages={maxPages} />
    </>
  )
}

export default SearchPage
