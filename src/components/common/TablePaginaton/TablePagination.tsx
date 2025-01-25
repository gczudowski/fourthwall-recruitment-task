import Button from '../../ui/button/Button'

interface Props {
  page: number
  maxPages: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const TablePaginaton = ({ page, setPage, maxPages }: Props) => {
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
