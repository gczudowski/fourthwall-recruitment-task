import Button from '../../ui/button/Button'
import { CurrentPage, PaginationWrapper } from './TablePagination.styled'

interface Props {
  page: number
  maxPages: number
  onPageChange: (newPageValue: number) => void
}

const TablePaginaton = ({ page, maxPages, onPageChange }: Props) => {
  return (
    <PaginationWrapper aria-label="Page navigation">
      <Button
        text="Prev"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      />
      <CurrentPage>Page: {page}</CurrentPage>
      <Button
        text="Next"
        onClick={() => onPageChange(page + 1)}
        disabled={page === maxPages}
      />
    </PaginationWrapper>
  )
}

export default TablePaginaton
