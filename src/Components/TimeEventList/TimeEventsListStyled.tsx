import TableCell from '@mui/material/TableCell'
import styled from 'styled-components'

export type TableCellProps = {
    width?: string
}

export const TableCellStyled = styled(TableCell)<TableCellProps>`
    width: ${(props) => props.width || '20%'};
    word-wrap: wrap;
    word-break: break-all;
`
