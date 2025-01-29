import SearchResultsTable from './components/GithubRepositorySearchResultsTable/GithubRepositorySearchResultsTable'
import { PageWrapper } from './GithubRepositorySearchPage.styled'
import GithubRepositorySearchForm from './components/GithubRepositorySearchForm/GithubRepositorySearchForm'

const SearchPage = () => {
  return (
    <PageWrapper>
      <GithubRepositorySearchForm />
      <SearchResultsTable />
    </PageWrapper>
  )
}

export default SearchPage
