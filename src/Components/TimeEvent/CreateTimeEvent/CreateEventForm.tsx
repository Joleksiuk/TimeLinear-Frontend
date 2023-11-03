import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { TextField, Button, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
    ContainerStyled,
    IconFormContainerStyled,
} from './CreateEventForm.styled'
import { request } from '@/Services/API'
import { TIME_EVENT_URL } from '@/Services/APIConstants'
import Snackbar from '@mui/material/Snackbar'
import { CreateEventRequest, TimeEvent } from '../types'
import { useTimeEventsContext } from '../../TimeEventList/TimeEventsProvider'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useSingleTimelineContext } from '@/Components/Timeline/TimelineProvider/SingleTimelineProvider'
import DateUtils from '@/Utils/DateUtils'
import { EventIcon } from '@/Components/IconSearch/types'
import IconSearchDialog from '@/Components/IconSearch/IconSearchDialog'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    }
)

const MAX_NAME_LENGTH = 50
const MAX_DESCRIPTION_LENGTH = 255

type Props = {
    isInModal?: boolean
    isOnTimelinePage?: boolean
}

export default function CreateEventForm({ isInModal = false }: Props) {
    const { timeEvents, setTimeEvents, setIsLoadingData } =
        useTimeEventsContext()
    const { addEventToTimeline } = useSingleTimelineContext()
    const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()))
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [eventAdded, setEventAdded] = useState(false)
    const [eventIcon, setEventIcon] = useState<EventIcon>()
    const [descriptionError, setDescriptionError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [openSnackbar, setOpenSnackbar] = React.useState(false)

    const handleAddEvent = async () => {
        if (isDataInvalid()) {
            return
        }
        try {
            const newTimeEvent = await addNewEvent()
            addEventToTimeline(newTimeEvent)
            setOpenSnackbar(true)
            setEventAdded(true)
            setDescriptionError(false)
            setNameError(false)
        } catch (error) {}
    }

    const addNewEvent = async (): Promise<TimeEvent> => {
        const requestData: CreateEventRequest = {
            startDate: DateUtils.dayjsDateToString(date),
            endDate: DateUtils.dayjsDateToString(date),
            name: eventName,
            description: description,
            iconType: eventIcon?.type,
            iconSource: eventIcon?.source,
        }
        setIsLoadingData(true)
        const response = await request(TIME_EVENT_URL, 'POST', requestData)
        const newTimeEvent: TimeEvent = response.data
        const updatedTimeEvents = [...timeEvents]
        updatedTimeEvents.push(newTimeEvent)
        setTimeEvents(updatedTimeEvents)
        setIsLoadingData(false)
        console.log(newTimeEvent)

        return newTimeEvent
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

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSnackbar(false)
    }

    return (
        <form>
            <ContainerStyled>
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
                        if (e.target.value.length <= MAX_DESCRIPTION_LENGTH) {
                            setDescription(e.target.value)
                            setDescriptionError(false)
                        } else {
                            setDescriptionError(true)
                        }
                    }}
                    error={descriptionError}
                />
                <IconSearchDialog
                    eventIcon={eventIcon}
                    setEventIcon={setEventIcon}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddEvent()}
                >
                    Create Event
                </Button>
                {eventAdded && isInModal && (
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={2000}
                        onClose={handleClose}
                    >
                        <Alert
                            onClose={handleClose}
                            severity="success"
                            sx={{ width: '100%' }}
                        >
                            Event created successfully!
                        </Alert>
                    </Snackbar>
                )}
            </ContainerStyled>
        </form>
    )
}
