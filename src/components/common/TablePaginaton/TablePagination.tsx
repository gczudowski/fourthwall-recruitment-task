import styled from 'styled-components'
import Button from '../../ui/button/Button'

interface Props {
  page: number
  maxPages: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const CurrentPage = styled.span`
  padding: 10px;
`

const PaginationWrapper = styled.div`
  display: flex;
  height: 40px;
`

const TablePaginaton = ({ page, setPage, maxPages }: Props) => {
  return (
    <PaginationWrapper>
      <Button
        text="Prev"
        onClick={() => setPage((prev: number) => prev - 1)}
        disabled={page === 1}
      />
      <CurrentPage>Page: {page}</CurrentPage>
      <Button
        text="Next"
        onClick={() => setPage((prev: number) => prev + 1)}
        disabled={page === maxPages}
      />
    </PaginationWrapper>
  )
}

export default TablePaginaton
