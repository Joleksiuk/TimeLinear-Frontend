import {
    BodyCell,
    CalendarTable,
    HeaderCellStyled,
    BodyCellContentContainer,
    HeaderContainerStyled,
} from './Calendar.styled'
import { useTimeEventsContext } from '../TimeEventList/TimeEventsProvider'
import dayjs from 'dayjs'
import { TimeEvent } from '../TimeEvent/types'
import EventIconComponent from '../IconSearch/EventIconComponent'
import { Divider, IconButton, Tooltip, Typography } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { daysOfWeek, months } from './CalendarConstants'
import { useState } from 'react'
import { homepageURL } from '@/Services/APIConstants'

export default function Calendar() {
    const today = new Date()
    const [currentMonth, setCurrentMonth] = useState(today.getMonth())
    const [currentYear, setCurrentYear] = useState(today.getFullYear())

    const changeMonth = (direction: number) => {
        const currentDate = dayjs().year(currentYear).month(currentMonth)
        const newDate = currentDate.add(direction, 'month')

        setCurrentMonth(newDate.month())
        setCurrentYear(newDate.year())
    }

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

    const { timeEvents } = useTimeEventsContext()

    const isEventInTableCell = (
        day: number,
        event: TimeEvent,
        currentYear: number,
        currentMonth: number
    ) => {
        let eventStart = dayjs(event.startDate).set('second', 0)
        eventStart = dayjs(eventStart).set('minute', 0)
        eventStart = dayjs(eventStart).set('hour', 0)

        let eventEnd = dayjs(event.endDate).set('second', 0)
        eventEnd = dayjs(eventEnd).set('minute', 0)
        eventEnd = dayjs(eventEnd).set('hour', 0)

        const targetTime = dayjs(
            `${currentYear}-${currentMonth + 1}-${day} 00:00:00`
        )

        return (
            targetTime.isSame(eventStart) ||
            targetTime.isSame(eventEnd) ||
            (targetTime.isBefore(eventEnd) && targetTime.isAfter(eventStart))
        )
    }

    const renderBodyCellsForRow = (timeEvent: TimeEvent) => {
        const bodyCells: any = []
        const cellIndices = new Set()

        days.forEach((day, index) => {
            if (cellIndices.has(index)) {
                return
            }

            if (isEventInTableCell(day, timeEvent, currentYear, currentMonth)) {
                let currentDay = day
                const consecutiveMarkedDays = [day]
                let colSpan = 1

                while (
                    index + colSpan < daysInMonth &&
                    isEventInTableCell(
                        currentDay + 1,
                        timeEvent,
                        currentYear,
                        currentMonth
                    )
                ) {
                    consecutiveMarkedDays.push(currentDay + 1)
                    currentDay++
                    colSpan++
                }

                const isIconOnly = colSpan <= 3

                bodyCells.push(
                    <BodyCell
                        key={day}
                        colSpan={colSpan}
                        style={{ width: `${(100 / daysInMonth) * colSpan}%` }}
                        onClick={() => {
                            window.open(
                                homepageURL + `/timeEvent/${timeEvent.id}`,
                                '_blank'
                            )
                        }}
                        categoryColor={timeEvent.category?.color || '#887a96ef'}
                    >
                        <Tooltip
                            title={
                                timeEvent.name + ' - ' + timeEvent.description
                            }
                            arrow
                        >
                            <BodyCellContentContainer>
                                <div
                                    className={`content-container ${
                                        isIconOnly ? 'icon-only' : ''
                                    }`}
                                >
                                    {isIconOnly ? (
                                        <EventIconComponent
                                            eventIcon={{
                                                source: timeEvent.iconSource,
                                                type: timeEvent.iconType,
                                            }}
                                            style={{
                                                height: '50px',
                                                width: '50px',
                                            }}
                                        />
                                    ) : (
                                        <BodyCellContentContainer>
                                            <Typography
                                                sx={{ color: '#887a96ef' }}
                                            >
                                                {timeEvent.name}
                                            </Typography>
                                            <EventIconComponent
                                                eventIcon={{
                                                    source: timeEvent.iconSource,
                                                    type: timeEvent.iconType,
                                                }}
                                                style={{
                                                    height: '50px',
                                                    width: '50px',
                                                }}
                                            />
                                        </BodyCellContentContainer>
                                    )}
                                </div>
                            </BodyCellContentContainer>
                        </Tooltip>
                    </BodyCell>
                )

                for (let i = index; i < index + colSpan; i++) {
                    cellIndices.add(i)
                }
            } else {
                bodyCells.push(
                    <BodyCell key={day} colSpan={1} categoryColor={'#121529'} />
                )
            }
        })

        return bodyCells
    }

    return (
        <div>
            <HeaderContainerStyled>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => changeMonth(-1)}
                >
                    <KeyboardDoubleArrowLeftIcon />
                </IconButton>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => changeMonth(1)}
                >
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </HeaderContainerStyled>
            <Divider
                sx={{ marginBottom: '80px' }}
                orientation="horizontal"
                flexItem
            >
                {months[currentMonth]} {currentYear}
            </Divider>
            <CalendarTable key="calendar-table">
                <thead>
                    <tr>
                        {Array.from({ length: daysInMonth }, (_, i) => (
                            <HeaderCellStyled key={i + 1}>
                                {i + 1}
                                <br />
                                {daysOfWeek[
                                    new Date(
                                        currentYear,
                                        currentMonth,
                                        i + 1
                                    ).getDay()
                                ].substring(0, 3)}
                            </HeaderCellStyled>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeEvents.map((timeEvent) => (
                        <tr key={timeEvent.id}>
                            {renderBodyCellsForRow(timeEvent)}
                        </tr>
                    ))}
                </tbody>
            </CalendarTable>
        </div>
    )
}
