import { Dayjs } from 'dayjs'

export type TimelineEvent = {
    date: Dayjs | null
    eventName: string
    description: string
}
