import { TimelineEvent } from '../TimelineEvent'
import TimelineBranch from './TimelineBranch'
import {
    BranchContainerStyled,
    BranchStyled,
    CircleRootStyled,
    ElementsStyled,
    InnerCircleRootStyled,
} from './TimelineChart.styled'
import { TimelineChartProvider } from './TimelineChartProvider'
import { Parameters } from './TimelineChartProvider'

type Props = {
    events: TimelineEvent[]
    parameters: Parameters
}

export default function TimelineChart({ events, parameters }: Props) {
    return (
        <TimelineChartProvider initialParams={parameters}>
            <ElementsStyled>
                <BranchContainerStyled>
                    <BranchStyled
                        width={parameters.branchWidth}
                        height={parameters.branchHeight}
                        display={false}
                    />
                    <CircleRootStyled
                        width={parameters.rootCircleRadius}
                        height={parameters.rootCircleRadius}
                        display={true}
                    >
                        <InnerCircleRootStyled
                            width={parameters.rootCircleRadius * 0.32}
                            height={parameters.rootCircleRadius * 0.32}
                        />
                    </CircleRootStyled>
                    <BranchStyled
                        width={parameters.branchWidth}
                        height={parameters.branchHeight}
                        display={false}
                    />
                </BranchContainerStyled>
                {events.map((ev, index) => (
                    <TimelineBranch
                        direction={index % 2 === 0 ? 'right' : 'left'}
                        timelineEvent={ev}
                    />
                ))}
            </ElementsStyled>
        </TimelineChartProvider>
    )
}
