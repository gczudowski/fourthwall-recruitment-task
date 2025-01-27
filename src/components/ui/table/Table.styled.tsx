import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
`

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid silver;
  &:hover {
    background-color: #f4f6f8;
  }
`

export const StyledTableHead = styled.thead`
  text-align: left;
  font-weight: bold;
`

export const StyledTableHeader = styled.th`
  padding: 10px 0;
`

export const StyledTableCell = styled.td`
  padding: 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
