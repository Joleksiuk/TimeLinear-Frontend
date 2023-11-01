import { request } from '@/services/API'
import {
    Group,
    GroupBulkRequest,
    GroupBulkResponse,
    GroupRequest,
} from './GroupTypes'
import {
    GROUPS_BULK_URL,
    GROUPS_OWNED_URL,
    GROUPS_URL,
} from '@/services/APIConstants'

export default {
    async createGroup(groupRequestData: GroupRequest): Promise<Group> {
        const response = await request(GROUPS_URL, 'POST', groupRequestData)
        return response.data
    },

    async updateGroup(timeline: Group, timelineId: number): Promise<Group> {
        const response = await request(
            `${GROUPS_URL}/${timelineId}`,
            'DELETE',
            timeline
        )
        return response.data
    },

    async deleteGroup(timelineId: number): Promise<void> {
        await request(`${GROUPS_URL}/${timelineId}`, 'DELETE')
    },

    async getGroup(timelineId: number): Promise<Group> {
        const response = await request(`${GROUPS_URL}/${timelineId}`, 'GET')
        return response.data
    },

    async getOwnedGroups(): Promise<GroupBulkResponse> {
        const response = await request(GROUPS_OWNED_URL, 'GET')
        return response.data
    },

    async getGroupsInBulk(
        groupsIds: Array<number>
    ): Promise<GroupBulkResponse> {
        const requestData: GroupBulkRequest = {
            groupsIds,
        }
        const response = await request(GROUPS_BULK_URL, 'GET', requestData)
        return response.data
    },
}
