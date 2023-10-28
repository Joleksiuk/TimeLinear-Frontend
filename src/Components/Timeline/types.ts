import { TimeEvent } from '../TimeEvent/types'

export type TimelineModel = {
    id: number
    name: string
    description: string
    creationDate: string
    timeEvents: Array<TimeEvent>
}
