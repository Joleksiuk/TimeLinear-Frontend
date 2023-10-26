import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import { TableCellStyled } from './TimeEventsListStyled'
import { useTimeEventsContext } from './TimeEventsProvider'
import CircularProgress from '@mui/material/CircularProgress'

export default function TimeEventsList() {
    const { timeEvents, isLoadingData } = useTimeEventsContext()

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - timeEvents.length) : 0

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <div>
            {isLoadingData ? (
                <CircularProgress />
            ) : (
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 500 }}
                        aria-label="custom pagination table"
                    >
                        <TableBody>
                            <TableCell component="th"></TableCell>
                            <TableCell component="th">Name</TableCell>
                            <TableCell component="th">Description</TableCell>
                            <TableCell component="th">Start Date</TableCell>
                            <TableCell component="th">End Date</TableCell>
                            {(rowsPerPage > 0
                                ? timeEvents.slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                  )
                                : timeEvents
                            ).map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCellStyled width="4%">
                                        {index + page * rowsPerPage}
                                    </TableCellStyled>
                                    <TableCellStyled width="25%">
                                        {row.name}
                                    </TableCellStyled>
                                    <TableCellStyled width="30%">
                                        {row.description}
                                    </TableCellStyled>
                                    <TableCellStyled width="10%">
                                        {row.startDate}
                                    </TableCellStyled>
                                    <TableCellStyled width="10%">
                                        {row.endDate}
                                    </TableCellStyled>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[
                                        10,
                                        25,
                                        { label: 'All', value: -1 },
                                    ]}
                                    colSpan={3}
                                    count={timeEvents.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={
                                        handleChangeRowsPerPage
                                    }
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            )}
        </div>
    )
}
