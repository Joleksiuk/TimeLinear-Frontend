import { TimelineEvent } from '../TimelineEvent'
import TimelineBranch from './TimelineBranch'
import {
    BranchContainerStyled,
    BranchStyled,
    CircleRootStyled,
    ElementsStyled,
    InnerCircleRootStyled,
} from './TimelineChart.styled'

type Props = {
    events: TimelineEvent[]
    rootCircleRadius: number
    branchCircleRadius: number
    branchWidth: number
    branchHeight: number
    rootMargin: number
}

export default function TimelineChart({
    events,
    rootCircleRadius,
    branchCircleRadius,
    branchWidth,
    branchHeight,
    rootMargin,
}: Props) {
    return (
        <ElementsStyled>
            <BranchContainerStyled>
                <BranchStyled
                    width={branchWidth}
                    height={branchHeight}
                    display={false}
                />
                <CircleRootStyled
                    width={rootCircleRadius}
                    height={rootCircleRadius}
                    display={true}
                >
                    <InnerCircleRootStyled
                        width={rootCircleRadius * 0.32}
                        height={rootCircleRadius * 0.32}
                    />
                </CircleRootStyled>
                <BranchStyled
                    width={branchWidth}
                    height={branchHeight}
                    display={false}
                />
            </BranchContainerStyled>
            {events.map((ev, index) => (
                <TimelineBranch
                    direction={index % 2 === 0 ? 'right' : 'left'}
                    timelineEvent={ev}
                    branchWidth={branchWidth}
                    branchHeight={branchHeight}
                    branchCircleRadius={branchCircleRadius}
                    rootMargin={rootMargin}
                />
            ))}
        </ElementsStyled>
    )
}
