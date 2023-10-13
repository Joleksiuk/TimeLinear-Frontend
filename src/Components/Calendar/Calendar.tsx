import React from 'react'
import { BodyCell, CalendarTable, HeaderCell } from './Calendar.styled'

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export default function Calendar() {
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    const hoursOfDay = Array.from({ length: 24 }, (_, i) => `${i}:00`)

    const calendar = []

    for (let hour = 0; hour < 24; hour++) {
        const row = []
        for (let day = 1; day <= daysInMonth; day++) {
            row.push(<BodyCell key={day} />)
        }
        calendar.push(row)
    }

    return (
        <CalendarTable>
            <thead>
                <tr>
                    <HeaderCell></HeaderCell>
                    {Array.from({ length: daysInMonth }, (_, i) => (
                        <HeaderCell key={i + 1}>
                            {i + 1}
                            <br />
                            {daysOfWeek[
                                new Date(
                                    currentYear,
                                    currentMonth,
                                    i + 1
                                ).getDay()
                            ].substring(0, 3)}
                        </HeaderCell>
                    ))}
                </tr>
            </thead>
            <tbody>
                {calendar.map((hourRow, index) => (
                    <tr key={index}>
                        <HeaderCell>{hoursOfDay[index]}</HeaderCell>
                        {hourRow}
                    </tr>
                ))}
            </tbody>
        </CalendarTable>
    )
}
