import { request } from '@/services/API'
import { TIME_EVENTS_OWNED } from '@/services/APIConstants'
import { TimeEventsBulkResponse } from '../TimeEvent/types'

export default {
    async getOwnedTimeEvents(): Promise<TimeEventsBulkResponse> {
        const response = await request(TIME_EVENTS_OWNED, 'GET')
        return response.data
    },
}
