import {
  Table,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from '../../../components/ui/table/Table'
import { GithubRepositoryItem } from '../../../types/githubRepository.type'
import useGitubRepositorySearch from '../hooks/useGithubRepositorySearch'

const SearchResultsTable = () => {
  const { searchResults, isFetching } = useGitubRepositorySearch()

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Owner</TableHeader>
          <TableHeader>Stars</TableHeader>
          <TableHeader>Created At</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {searchResults?.items?.map((repoItem: GithubRepositoryItem) => (
          <TableRow key={repoItem.id}>
            <TableCell showPlaceholder={isFetching}>{repoItem.name}</TableCell>
            <TableCell showPlaceholder={isFetching}>
              {repoItem.owner.login}
            </TableCell>
            <TableCell showPlaceholder={isFetching}>
              {repoItem.stargazers_count}
            </TableCell>
            <TableCell showPlaceholder={isFetching}>
              {new Date(repoItem.created_at).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}

export default SearchResultsTable
