export type CreateEventRequest = {
    name: string
    description: string
    startDate: string | undefined
    endDate: string | undefined
    iconType?: 'emoji' | 'icon'
    iconSource?: string
}

export type CreateEventResponse = {}

export type TimeEvent = {
    id: number
    name: string
    description: string
    startDate: string
    endDate: string
    iconType?: 'emoji' | 'icon'
    iconSource?: string
}

export type TimeEventsBulkResponse = {
    timeEvents: Array<TimeEvent>
}
