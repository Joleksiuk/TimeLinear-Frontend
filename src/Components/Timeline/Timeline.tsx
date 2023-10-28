import { useState } from 'react'
import { TimelineEvent } from './TimelineEvent'
import TimelineChart from './TimelineChart/TimelineChart'
import CreateEventForm from '../TimeEvent/CreateTimeEvent/CreateEventForm'
import { MainContainerStyled } from './Timeline.styled'
import { TimeEventsProvider } from '../TimeEventList/TimeEventsProvider'

const timelineChartParameters = {
    rootCircleRadius: 100,
    branchCircleRadius: 40,
    rootMargin: 50,
    branchWidth: 20,
    branchHeight: 200,
    dataFontSize: 30,
}
export default function Timeline() {
    const [timelineItems, setTimelineItems] = useState<TimelineEvent[]>([])

    return (
        <TimeEventsProvider>
            <MainContainerStyled>
                <CreateEventForm isInModal={false} />
                <TimelineChart
                    parameters={timelineChartParameters}
                    events={timelineItems}
                />
            </MainContainerStyled>
        </TimeEventsProvider>
    )
}
