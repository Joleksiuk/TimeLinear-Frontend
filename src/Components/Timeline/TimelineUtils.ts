import dayjs from 'dayjs'
import { TimeEvent } from '../TimeEvent/types'
import { TimelineEvent } from './TimelineEvent'
import DateUtils from '@/utils/user/DateUtils'

export default {
    mapTimeEventToTimelineEvent(timeEvent: TimeEvent): TimelineEvent {
        return {
            date: DateUtils.stringToDayjsDate(timeEvent.startDate),
            eventName: timeEvent.name,
            description: timeEvent.description,
        }
    },
    mapTimeEventsToTimelineEvents(
        timeEvents: Array<TimeEvent>
    ): Array<TimelineEvent> {
        console.log('before mapping ->', timeEvents)
        const a = timeEvents.map((event) =>
            this.mapTimeEventToTimelineEvent(event)
        )
        console.log('after mapping ->', a)

        return a
    },
}
