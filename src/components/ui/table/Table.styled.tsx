import styled, { keyframes } from 'styled-components'

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

const shimmer = keyframes`
  0% {
    background-position: -50px 0;
  }
  100% {
    background-position: 50px 0;
  }
`

export const StyledTableRowPlaceholder = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: ${shimmer} 1.5s infinite;
  height: 16px;
  width: 50%;
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
