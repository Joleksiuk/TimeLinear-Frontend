import { CHANGE_PASSWORD_URL, SIGN_IN_URL, SIGN_UP_URL } from './APIConstants'
import { request } from './API'
import { SignUpRequest } from '@/models/SignUp'
import { SignInRequest, SignInResponse } from '@/models/SignIn'
import { ChangePasswordRequest } from '@/Components/Forms/types'

export const register = (username: string, email: string, password: string) => {
    const data: SignUpRequest = {
        username,
        email,
        password,
        role: 'USER',
    }
    return request(SIGN_UP_URL, 'POST', data)
}

export const changePassword = (
    currentPassword: string,
    newPassword: string,
    confirmationPassword: string
) => {
    const data: ChangePasswordRequest = {
        currentPassword,
        newPassword,
        confirmationPassword,
    }
    return request(CHANGE_PASSWORD_URL, 'POST', data)
}

export const login = async (data: SignInRequest): Promise<SignInResponse> => {
    try {
        const response: any = await request(SIGN_IN_URL, 'POST', data)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
    } catch (error) {
        throw error
    }
}

export const logout = () => {
    localStorage.removeItem('user')
}

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user')
    if (userStr) return JSON.parse(userStr)

    return null
}
