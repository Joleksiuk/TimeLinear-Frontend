import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CreateEventForm from '@/Components/TimeEvent/CreateEventForm'
import { EventFormContainerStyled } from '@/Components/TimeEvent/CreateEventForm.styled'
import { TimelineEvent } from '@/Components/Timeline/TimelineEvent'
import dayjs from 'dayjs'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'

const timeEventMock = {
    eventName: 'event',
    description: 'description',
    date: dayjs('2023-10-20'),
}

const timeEvents: Array<TimelineEvent> = new Array(100).fill(timeEventMock)

export default function EventsListPage() {
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
            {getCurrentUser() ? (
                <EventFormContainerStyled>
                    <CreateEventForm />
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 500 }}
                            aria-label="custom pagination table"
                        >
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? timeEvents.slice(
                                          page * rowsPerPage,
                                          page * rowsPerPage + rowsPerPage
                                      )
                                    : timeEvents
                                ).map((row) => (
                                    <TableRow key={row.eventName}>
                                        <TableCell component="th" scope="row">
                                            {row.eventName}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.description}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.date?.toString()}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{ height: 53 * emptyRows }}
                                    >
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
                                        ActionsComponent={
                                            TablePaginationActions
                                        }
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </EventFormContainerStyled>
            ) : (
                <SignIn />
            )}
        </div>
    )
}
