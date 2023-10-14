import { TimelineEvent } from '../TimelineEvent'
import TimelineBranchCircle from './TimelineBranchCircle'
import { BranchContainerStyled, LineStyled } from './TimelineChart.styled'
import TimelineData from './TimelineData'

type BranchProps = {
    timelineEvent: TimelineEvent
    direction: 'left' | 'right'
    branchWidth: number
    branchHeight: number
    branchCircleRadius: number
    rootMargin: number
}
export default function TimelineBranch({
    direction,
    timelineEvent,
    branchWidth,
    branchHeight,
    branchCircleRadius,
    rootMargin,
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
                branchWidth={branchWidth}
                branchHeight={branchHeight}
                branchCircleRadius={branchCircleRadius}
            />
            <LineStyled
                width={branchWidth}
                height={branchHeight}
                display={true}
                rootMargin={rootMargin}
            />
            <TimelineBranchCircle
                display={direction === 'right'}
                direction="right"
                branchWidth={branchWidth}
                branchHeight={branchHeight}
                branchCircleRadius={branchCircleRadius}
            />
            <TimelineData
                timelineEvent={timelineEvent}
                display={direction === 'right'}
            />
        </BranchContainerStyled>
    )
}
