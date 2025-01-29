import TablePaginaton from '../../../../components/common/TablePaginaton/TablePagination'
import {
  Table,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from '../../../../components/ui/table/Table'
import { PER_PAGE } from '../../../../config/repositorySearchConfig'
import { GithubRepositoryItem } from '../../../../types/githubRepository.type'
import useGitubRepositorySearch from '../../hooks/useGithubRepositorySearch'

const SearchResultsTable = () => {
  const {
    searchResults,
    isFetching,
    isError,
    query,
    page,
    maxPages,
    onPageChange,
  } = useGitubRepositorySearch()
  const isNoResults = query && !isFetching && searchResults?.items?.length === 0

  return (
    <>
      {query && !isNoResults && !isError ? (
        <>
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
              {!isFetching
                ? searchResults?.items?.map(
                    (repoItem: GithubRepositoryItem) => (
                      <TableRow key={repoItem.id}>
                        <TableCell showPlaceholder={isFetching}>
                          {repoItem.name}
                        </TableCell>
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
                    )
                  )
                : Array.from({ length: PER_PAGE }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell showPlaceholder={isFetching}></TableCell>
                      <TableCell showPlaceholder={isFetching}></TableCell>
                      <TableCell showPlaceholder={isFetching}></TableCell>
                      <TableCell showPlaceholder={isFetching}></TableCell>
                    </TableRow>
                  ))}
            </tbody>
          </Table>
          <TablePaginaton
            page={page}
            maxPages={maxPages}
            onPageChange={onPageChange}
          />
        </>
      ) : null}

      {isError ? <div>Error</div> : null}

      {isNoResults ? (
        <div>Sorry, there are no results for your query</div>
      ) : null}
    </>
  )
}

export default SearchResultsTable
