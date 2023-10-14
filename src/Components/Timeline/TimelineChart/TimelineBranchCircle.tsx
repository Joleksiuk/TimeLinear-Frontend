import {
    BranchStyled,
    CircleRootStyled,
    InnerCircleRootStyled,
} from './TimelineChart.styled'

type Props = {
    display: boolean
    direction: string
    branchWidth: number
    branchHeight: number
    branchCircleRadius: number
}

export default function TimelineBranchCircle({
    display,
    direction,
    branchWidth,
    branchHeight,
    branchCircleRadius,
}: Props) {
    return (
        <>
            {direction === 'right' && (
                <BranchStyled
                    width={branchHeight}
                    height={branchWidth}
                    display={display}
                />
            )}
            <CircleRootStyled
                width={branchCircleRadius}
                height={branchCircleRadius}
                display={display}
            >
                <InnerCircleRootStyled
                    width={branchCircleRadius * 0.5}
                    height={branchCircleRadius * 0.5}
                />
            </CircleRootStyled>
            {direction === 'left' && (
                <BranchStyled
                    width={branchHeight}
                    height={branchWidth}
                    display={display}
                />
            )}
        </>
    )
}
