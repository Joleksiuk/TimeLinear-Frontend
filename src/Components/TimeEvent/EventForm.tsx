import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { TextField, Button, Grid } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
    ContainerStyled,
    NameAndDateContainer,
} from '../Timeline/Timeline.styled'

export default function EventForm() {
    const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()))
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')

    const handleAddEvent = () => {}

    return (
        <div>
            <form>
                <ContainerStyled>
                    <NameAndDateContainer>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Controlled picker"
                                value={date}
                                onChange={(date) => setDate(date)}
                            />
                        </LocalizationProvider>
                        <TextField
                            label="Event Name"
                            multiline
                            rows={4}
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                        <TextField
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={4}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleAddEvent()}
                        >
                            Add Event
                        </Button>
                    </NameAndDateContainer>
                </ContainerStyled>
            </form>
        </div>
    )
}
