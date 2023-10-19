import axios, { AxiosResponse } from 'axios'
import { API_BASE_URL } from './APIConstants'

function getAuthHeader() {
    const userStr = localStorage.getItem('user')
    let user = null
    if (userStr) user = JSON.parse(userStr)

    if (user && user.accessToken) {
        return {
            Authorization: 'Bearer ' + user.accessToken,
            'Content-Type': 'application/json',
        }
    } else {
        return { Authorization: '', 'Content-Type': 'application/json' }
    }
}

export async function request(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any
): Promise<AxiosResponse> {
    const userStr = localStorage.getItem('user')
    let user = null
    if (userStr) user = JSON.parse(userStr)

    const config = {
        method,
        url: `${API_BASE_URL}/${endpoint}`,
        headers: getAuthHeader(),
        data,
    }

    try {
        const response = await axios(config)
        console.log(response)
        return response
    } catch (error) {
        console.error('An error occurred:', error)
        throw error
    }
}
export async function noAuthRequest(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any
): Promise<unknown> {
    const config = {
        method,
        url: `${API_BASE_URL}/${endpoint}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    }
    return await axios(config)
}
