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
import { CreateEventRequest, TimeEvent } from './types'
import { useTimeEventsContext } from '../TimeEventList/TimeEventsProvider'

const MAX_NAME_LENGTH = 10
const MAX_DESCRIPTION_LENGTH = 10

export default function CreateEventForm() {
    const { timeEvents, setTimeEvents, setIsLoadingData } =
        useTimeEventsContext()

    const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()))
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [eventAdded, setEventAdded] = useState(false)

    const [descriptionError, setDescriptionError] = useState(false)
    const [nameError, setNameError] = useState(false)

    const handleAddEvent = async () => {
        if (isDataInvalid()) {
            return
        }
        try {
            await addNewEvent()
            setEventAdded(true)
            setDescriptionError(false)
            setNameError(false)
        } catch (error) {}
    }

    const addNewEvent = async () => {
        const requestData: CreateEventRequest = {
            startDate: date?.toDate().toDateString(),
            endDate: date?.toDate().toDateString(),
            name: eventName,
            description: description,
        }
        setIsLoadingData(true)
        const response = await request(TIME_EVENT_URL, 'POST', requestData)
        const newTimeEvent: TimeEvent = response.data
        const updatedTimeEvents = [...timeEvents]
        timeEvents.push(newTimeEvent)
        setTimeEvents(updatedTimeEvents)
        setIsLoadingData(false)
    }

    const isDataInvalid = (): boolean => {
        let wrongInput = false
        if (eventName.length === 0) {
            setNameError(true)
            wrongInput = true
        }

        if (description.length === 0) {
            setDescriptionError(true)
            wrongInput = true
        }
        return wrongInput
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
                        onChange={(e) => {
                            if (e.target.value.length <= MAX_NAME_LENGTH) {
                                setEventName(e.target.value)
                                setNameError(false)
                            } else {
                                setNameError(true)
                            }
                        }}
                        error={nameError}
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => {
                            if (
                                e.target.value.length <= MAX_DESCRIPTION_LENGTH
                            ) {
                                setDescription(e.target.value)
                                setDescriptionError(false)
                            } else {
                                setDescriptionError(true)
                            }
                        }}
                        error={descriptionError}
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
