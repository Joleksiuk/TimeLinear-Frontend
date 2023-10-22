import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { TextField, Button, Grid } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ContainerStyled, NameAndDateContainer } from './CreateEventForm.styled'
import { request } from '@/services/API'
import { TIME_EVENT_URL } from '@/services/APIConstants'
import Alert from '@mui/material/Alert'

export default function CreateEventForm() {
    const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()))
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [eventAdded, setEventAdded] = useState(false)
    const handleAddEvent = async () => {
        try {
            await request(TIME_EVENT_URL, 'POST', {
                date,
                eventName,
                description,
            })
            setEventAdded(true)
        } catch (error) {}
    }

    return (
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
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAddEvent()}
                    >
                        Create new Event
                    </Button>
                </NameAndDateContainer>
                {eventAdded && (
                    <Alert severity="success">Event added successfully </Alert>
                )}
            </ContainerStyled>
        </form>
    )
}
