import { TimelineEvent } from '../TimelineEvent'
import {
    DateStyled,
    DescriptionStyled,
    EventDataContainer,
    EventNameStyled,
} from './TimelineChart.styled'

type Props = {
    timelineEvent: TimelineEvent
    display: boolean
}

export default function TimelineData({ timelineEvent, display }: Props) {
    return (
        <EventDataContainer display={display}>
            <EventNameStyled display={display}>
                {timelineEvent.date?.day()}- {timelineEvent.date?.month()}-
                {timelineEvent.date?.year()}
            </EventNameStyled>
            <DateStyled display={display}>{timelineEvent.eventName}</DateStyled>
            <DescriptionStyled display={display}>
                {timelineEvent.description}
            </DescriptionStyled>
        </EventDataContainer>
    )
}
