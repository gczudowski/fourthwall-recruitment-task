import {
  GithubRepositoryItem,
  GithubRepositorySearchResponse,
} from '../../../types/githubRepository.type'

interface Props {
  searchResults: GithubRepositorySearchResponse
}

const SearchResultsTable = ({ searchResults }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>Stars</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {searchResults?.items?.map((repoItem: GithubRepositoryItem) => (
          <tr key={repoItem.id}>
            <td>{repoItem.name}</td>
            <td>{repoItem.owner.login}</td>
            <td>{repoItem.stargazers_count}</td>
            <td>{new Date(repoItem.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SearchResultsTable
