import React, { useEffect, useState } from 'react'
import { BodyCell, CalendarTable, HeaderCellStyled } from './Calendar.styled'

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

type BodyCellData = {
    isMarked: boolean
}

export default function Calendar() {
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    const hoursOfDay = Array.from({ length: 24 }, (_, i) => `${i}:00`)
    const [calendar, setCalendar] = useState<Array<Array<BodyCellData>>>([])

    function handleBodyCellClick(rowIndex: number, cellIndex: number) {
        const updatedCalendar = [...calendar]
        updatedCalendar[rowIndex][cellIndex].isMarked =
            !updatedCalendar[rowIndex][cellIndex].isMarked
        setCalendar(updatedCalendar)
    }

    useEffect(() => {
        const tempCalendar = []
        for (let hour = 0; hour < 24; hour++) {
            const row: Array<BodyCellData> = []
            for (let day = 1; day <= daysInMonth; day++) {
                row.push({ isMarked: false })
            }
            tempCalendar.push(row)
        }
        setCalendar(tempCalendar)
    }, [])

    return (
        <CalendarTable>
            <thead>
                <tr>
                    <HeaderCellStyled></HeaderCellStyled>
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
                {calendar.map((row: Array<BodyCellData>, rowIndex: number) => (
                    <tr key={rowIndex}>
                        <HeaderCellStyled>
                            {hoursOfDay[rowIndex]}
                        </HeaderCellStyled>
                        {row.map((cell: BodyCellData, cellIndex: number) => (
                            <BodyCell
                                key={cellIndex}
                                isMarked={cell.isMarked}
                                onClick={() =>
                                    handleBodyCellClick(rowIndex, cellIndex)
                                }
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </CalendarTable>
    )
}
