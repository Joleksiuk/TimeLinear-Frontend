import TimelineChart from '../TimelineChart/TimelineChart'
import { ItemStyled } from './TimelineList.styled'
import { TimelineModel } from '../TimelineProvider/types'
import { useNavigate } from 'react-router-dom'
import TimelineUtils from '../TimelineUtils'
import { Typography } from '@mui/material'

const timelineChartParameters = {
    rootCircleRadius: 50,
    branchCircleRadius: 35,
    rootMargin: 50,
    branchWidth: 10,
    branchHeight: 70,
    dataFontSize: 10,
    iconSize: 40,
}
type Props = {
    timeline: TimelineModel
}

export default function TimelineWidget({ timeline }: Props) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/timeline/${timeline.id}`)
    }

    return (
        <ItemStyled onClick={handleOnClick}>
            <Typography
                sx={{
                    color: '#4c58aa',
                    fontSize: '30px',
                    wordWrap: 'break-word',
                    marginBottom: '10px',
                }}
            >
                {timeline.name}
            </Typography>
            <TimelineChart
                parameters={timelineChartParameters}
                events={TimelineUtils.mapTimeEventsToTimelineEvents(
                    timeline.timeEvents
                )}
            />
        </ItemStyled>
    )
}
