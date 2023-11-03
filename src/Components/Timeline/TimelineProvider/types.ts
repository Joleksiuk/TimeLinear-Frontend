import { Group } from '@/Components/Group/GroupTypes'
import { TimeEvent } from '../../TimeEvent/types'

export type TimelineModel = {
    id: number
    name: string
    description: string
    creationDate: string
    timeEvents: Array<TimeEvent>
    allowedToBrowse: Group
    ownerEmail: string
}

export type TimelinePostRequest = {
    name: string
    description: string
}

export type TimelineTimeEventBean = {
    timelineId: number
    timeEventId: number
}

export type TimelineBulkResponse = {
    timelines: Array<TimelineModel>
}

export type TimelineBulkRequest = {
    timelineIds: Array<number>
}

export type TimelinePermissionRequest = {
    groupId: number
    timelineId: number
}
