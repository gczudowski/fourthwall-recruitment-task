import {
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
  StyledTableHead,
} from './Table.styled'

interface Props {
  children: React.ReactNode
}

export const Table = ({ children }: Props) => {
  return <StyledTable>{children}</StyledTable>
}

export const TableRow = ({ children }: Props) => {
  return <StyledTableRow>{children}</StyledTableRow>
}

export const TableHeader = ({ children }: Props) => {
  return <StyledTableHeader>{children}</StyledTableHeader>
}

export const TableHead = ({ children }: Props) => {
  return <StyledTableHead>{children}</StyledTableHead>
}

export const TableCell = ({ children }: Props) => {
  return <StyledTableCell>{children}</StyledTableCell>
}
