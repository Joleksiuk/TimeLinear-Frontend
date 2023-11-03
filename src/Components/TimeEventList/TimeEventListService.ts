import { request } from '@/services/API'
import { TIME_EVENTS_OWNED, TIME_EVENT_URL } from '@/services/APIConstants'
import { TimeEvent, TimeEventsBulkResponse } from '../TimeEvent/types'

export default {
    async getOwnedTimeEvents(): Promise<TimeEventsBulkResponse> {
        const response = await request(TIME_EVENTS_OWNED, 'GET')
        return response.data
    },

    async deleteTimeEvent(timeEventId: number): Promise<void> {
        await request(`${TIME_EVENT_URL}/${timeEventId}`, 'DELETE')
    },

    async updateTimeEvent(timeEvent: TimeEvent): Promise<TimeEvent> {
        const response = await request(
            `${TIME_EVENT_URL}/${timeEvent.id}`,
            'DELETE',
            timeEvent
        )
        return response.data
    },
}
