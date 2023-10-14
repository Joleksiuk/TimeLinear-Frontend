import { TimelineEvent } from '../TimelineEvent'
import TimelineBranchCircle from './TimelineBranchCircle'
import { BranchContainerStyled, LineStyled } from './TimelineChart.styled'
import { useTimelineChartContext } from './TimelineChartProvider'
import TimelineData from './TimelineData'

type BranchProps = {
    timelineEvent: TimelineEvent
    direction: 'left' | 'right'
}
export default function TimelineBranch({
    direction,
    timelineEvent,
}: BranchProps) {
    const { parameters } = useTimelineChartContext()

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
            <LineStyled
                width={parameters.branchWidth}
                height={parameters.branchHeight}
                display={true}
                rootMargin={parameters.rootMargin}
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
