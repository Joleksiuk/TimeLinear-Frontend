import TimelineChart from './TimelineChart/TimelineChart'
import CreateEventForm from '../TimeEvent/CreateTimeEvent/CreateEventForm'
import {
    EventCreationContainer,
    GridColumnContainer,
    MainContainerStyled,
} from './Timeline.styled'
import { TimeEventsProvider } from '../TimeEventList/TimeEventsProvider'
import TimeEventsSearch from '../TimeEvent/TimeEventsSearch/TimeEventsSearch'
import { useSingleTimelineContext } from './TimelineProvider/SingleTimelineProvider'
import TimelineUtils from './TimelineUtils'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { TimeEvent } from '../TimeEvent/types'
import Button from '@mui/material/Button'

const timelineChartParameters = {
    rootCircleRadius: 100,
    branchCircleRadius: 40,
    rootMargin: 50,
    branchWidth: 20,
    branchHeight: 200,
    dataFontSize: 30,
}
export default function Timeline() {
    const { timeline, isLoadingData, addEventToTimeline } =
        useSingleTimelineContext()

    const [eventSearchValue, setEventSearchValue] = useState<TimeEvent>()

    const handleAddEventToTimeline = () => {
        if (eventSearchValue !== null && eventSearchValue !== undefined) {
            addEventToTimeline(eventSearchValue)
        }
    }
    return (
        <div>
            {isLoadingData ? (
                <CircularProgress />
            ) : timeline === null || timeline === undefined ? (
                <div>No timeline with this exists!</div>
            ) : (
                <TimeEventsProvider>
                    <MainContainerStyled>
                        <EventCreationContainer>
                            <CreateEventForm isInModal={false} />
                            <div> OR </div>
                            <GridColumnContainer>
                                <TimeEventsSearch
                                    setEventValue={setEventSearchValue}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleAddEventToTimeline}
                                >
                                    Add to timeline
                                </Button>
                            </GridColumnContainer>
                        </EventCreationContainer>

                        <TimelineChart
                            parameters={timelineChartParameters}
                            events={
                                timeline
                                    ? TimelineUtils.mapTimeEventsToTimelineEvents(
                                          timeline.timeEvents
                                      )
                                    : []
                            }
                        />
                    </MainContainerStyled>
                </TimeEventsProvider>
            )}
        </div>
    )
}
