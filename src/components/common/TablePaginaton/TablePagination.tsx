import useGitubRepositorySearch from '../../../pages/GithubRepositorySearchPage/hooks/useGithubRepositorySearch'
import Button from '../../ui/button/Button'

const TablePaginaton = () => {
  const { page, setPage, maxPages } = useGitubRepositorySearch()

  return (
    <>
      <Button
        text="Prev"
        onClick={() => setPage((prev: number) => prev - 1)}
        disabled={page === 1}
      />
      Curret page: {page}
      <Button
        text="Next"
        onClick={() => setPage((prev: number) => prev + 1)}
        disabled={page === maxPages}
      />
    </>
  )
}

export default TablePaginaton
