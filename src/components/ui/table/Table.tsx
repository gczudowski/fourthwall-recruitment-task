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

export const TableRow = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) => {
  return <StyledTableRow onClick={onClick}>{children}</StyledTableRow>
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
  label,
}: {
  children?: React.ReactNode
  showPlaceholder?: boolean
  label?: string
}) => {
  return (
    <StyledTableCell data-label={label}>
      {showPlaceholder ? <StyledTableRowPlaceholder /> : children}
    </StyledTableCell>
  )
}
