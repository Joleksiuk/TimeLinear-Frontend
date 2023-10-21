import { TimelineEvent } from '../TimelineEvent'
import TimelineBranchCircle from './TimelineBranchCircle'
import { BranchContainerStyled, LineStyled } from './TimelineChart.styled'
import TimelineData from './TimelineData'

type BranchProps = {
    timelineEvent: TimelineEvent
    direction: 'left' | 'right'
}
export default function TimelineBranch({
    direction,
    timelineEvent,
}: BranchProps) {
    return (
        <BranchContainerStyled>
            <TimelineData
                timelineEvent={timelineEvent}
                display={direction === 'left'}
            />
            <TimelineBranchCircle
                display={direction === 'left'}
                direction="left"
            />
            <TimelineBranchCircle
                display={direction === 'right'}
                direction="right"
            />
            <TimelineData
                timelineEvent={timelineEvent}
                display={direction === 'right'}
            />
        </BranchContainerStyled>
    )
}
