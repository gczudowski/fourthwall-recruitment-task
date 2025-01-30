import styled, { keyframes } from 'styled-components'
import { media } from '../../../config/media'

export const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
`

export const StyledTableRow = styled.tr<{ onClick?: () => void }>`
  border-bottom: 1px solid silver;
  &:nth-child(even) {
    background-color: #fcfcfd;
  }
  &:hover {
    background-color: #f4f6f8;
  }
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : 'cursor: default;')}
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
  display: none;

  ${media.tabletAndDesktop`
    display: contents;
  `}
`

export const StyledTableBody = styled.tbody`
  width: 100%;
`

export const StyledTableHeader = styled.th`
  padding: 10px 16px;
`

export const StyledTableCell = styled.td`
  display: flex;
  padding: 10px 16px;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &::before {
    content: attr(data-label);
    font-weight: bold;
    padding-right: 15px;
  }

  ${media.tabletAndDesktop`
    display: table-cell;
    margin: 0 16px;

    &::before {
      content: none;
      padding-right: 0;
    }
  `}
`
