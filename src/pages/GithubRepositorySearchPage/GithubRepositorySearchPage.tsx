import SearchResultsTable from './components/GithubRepositorySearchResultsTable/GithubRepositorySearchResultsTable'
import {
  PageHeader,
  PageTitle,
  PageWrapper,
} from './GithubRepositorySearchPage.styled'
import GithubRepositorySearchForm from './components/GithubRepositorySearchForm/GithubRepositorySearchForm'

const SearchPage = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>GitHub Repository Search App</PageTitle>
        <GithubRepositorySearchForm />
      </PageHeader>

      <SearchResultsTable />
    </PageWrapper>
  )
}

export default SearchPage
