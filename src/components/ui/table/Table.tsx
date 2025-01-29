import {
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
  StyledTableHead,
  StyledTableRowPlaceholder,
  StyledTableBody,
} from './Table.styled'

export const Table = ({ children }: { children: React.ReactNode }) => {
  return <StyledTable>{children}</StyledTable>
}

export const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <StyledTableRow>{children}</StyledTableRow>
}

export const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>
}

export const TableHead = ({ children }: { children: React.ReactNode }) => {
  return <StyledTableHead>{children}</StyledTableHead>
}

export const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <StyledTableBody>{children}</StyledTableBody>
}

export const TableCell = ({
  children,
  showPlaceholder,
}: {
  children?: React.ReactNode
  showPlaceholder?: boolean
}) => {
  return (
    <StyledTableCell>
      {showPlaceholder ? <StyledTableRowPlaceholder /> : children}
    </StyledTableCell>
  )
}
