import { Typography } from '@mui/material'
import { TimelineEvent } from './TimelineEvent'

type Props = {
    events: TimelineEvent[]
}

export default function TimelineChart({ events }: Props) {
    return (
        <div>
            {events.map((ev, index) => (
                <Typography key={index}>{ev.eventName}</Typography>
            ))}
        </div>
    )
}
