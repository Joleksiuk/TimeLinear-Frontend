import { ContainerStyled } from './TimelineList.styled'
import TimelineWidget from './TimelineWidget'
import { useTimelineContext } from '../TimelineProvider/TimelinesProvider'
import CircularProgress from '@mui/material/CircularProgress'
import CreateTimelineModal from '../CreateTimeline/CreateTimelineModal'

export default function TimelineList() {
    const { timelines, isLoadingData } = useTimelineContext()
    return (
        <div>
            <CreateTimelineModal />
            <ContainerStyled>
                {isLoadingData ? (
                    <CircularProgress />
                ) : (
                    timelines.map((timeline) => (
                        <TimelineWidget timeline={timeline} />
                    ))
                )}
            </ContainerStyled>
        </div>
    )
}
