export type CreateEventRequest = {
    name: string
    description: string
    startDate: string | undefined
    endDate: string | undefined
}

export type CreateEventResponse = {}

export type TimeEvent = {
    id: number
    name: string
    description: string
    startDate: string
    endDate: string
}

export type TimeEventsBulkResponse = {
    timeEvents: Array<TimeEvent>
}
