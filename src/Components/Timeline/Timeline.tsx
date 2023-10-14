import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { TextField, Button, Grid } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ContainerStyled, NameAndDateContainer } from './Timeline.styled'
import { TimelineEvent } from './TimelineEvent'
import TimelineChart from './TimelineChart/TimelineChart'

const timelineChartParameters = {
    rootCircleRadius: 100,
    branchCircleRadius: 40,
    rootMargin: 50,
    branchWidth: 20,
    branchHeight: 200,
    dataFontSize: 30,
}
export default function Timeline() {
    const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()))
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [timelineItems, setTimelineItems] = useState<TimelineEvent[]>([])

    const handleAddEvent = () => {
        const newEvent: TimelineEvent = {
            date: date,
            eventName,
            description,
        }
        const dupa = [...timelineItems, newEvent]
        setTimelineItems(dupa)
        setEventName('')
        setDescription('')
        console.log(newEvent)
    }

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
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleAddEvent()}
                        >
                            Add Event
                        </Button>
                    </NameAndDateContainer>
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={4}
                    />
                </ContainerStyled>
            </form>
            <TimelineChart
                parameters={timelineChartParameters}
                events={timelineItems}
            />
        </div>
    )
}
