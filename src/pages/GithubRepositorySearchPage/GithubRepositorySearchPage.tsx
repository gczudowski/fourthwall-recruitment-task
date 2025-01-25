import Input from '../../components/ui/input/Input'
import SearchResultsTable from './components/GithubRepositorySearchResultsTable'
import useGitubRepositorySearch from './hooks/useGithubRepositorySearch'

const SearchPage = () => {
  const { setQuery, searchResults } = useGitubRepositorySearch()

  return (
    <>
      <Input onInputChange={setQuery} />
      <SearchResultsTable searchResults={searchResults} />
    </>
  )
}

export default SearchPage
