import TimelineChart from '../TimelineChart/TimelineChart'
import { TimelineEvent } from '../TimelineEvent'
import dayjs from 'dayjs'
import { ItemStyled } from './TimelineList.styled'

const timelineItems: TimelineEvent[] = [
    {
        date: dayjs('2023-10-14T15:30:00'),
        eventName: 'some event',
        description: 'description',
    },
    {
        date: dayjs('2023-10-14T15:30:00'),
        eventName: 'some event',
        description: 'description',
    },
    {
        date: dayjs('2023-10-14T15:30:00'),
        eventName: 'some event',
        description: 'description',
    },
    {
        date: dayjs('2023-10-14T15:30:00'),
        eventName: 'some event',
        description: 'description',
    },
    {
        date: dayjs('2023-10-14T15:30:00'),
        eventName: 'some event',
        description: 'description',
    },
    {
        date: dayjs('2023-10-14T15:30:00'),
        eventName: 'some event',
        description: 'description',
    },
    {
        date: dayjs('2023-10-14T15:30:00'),
        eventName: 'some event',
        description: 'description',
    },
]

const timelineChartParameters = {
    rootCircleRadius: 50,
    branchCircleRadius: 35,
    rootMargin: 50,
    branchWidth: 10,
    branchHeight: 70,
    dataFontSize: 10,
}

export default function TimelineWidget() {
    return (
        <ItemStyled>
            <TimelineChart
                parameters={timelineChartParameters}
                events={timelineItems}
            />
        </ItemStyled>
    )
}
