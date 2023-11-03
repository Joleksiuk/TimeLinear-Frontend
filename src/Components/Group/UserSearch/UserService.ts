import { request } from '../../../services/API'
import { USERS_CHANGE_AVATAR_URL } from '../../../services/APIConstants'
import { UserModel, getCurrentUser } from '../../../services/AuthService'
import { ChangeAvatarRequest } from './UserTypes'

export default {
    async changeAvatar(requestData: ChangeAvatarRequest): Promise<UserModel> {
        await request(USERS_CHANGE_AVATAR_URL, 'PUT', requestData)
        const userModel = { ...getCurrentUser() }

        userModel.avatar_seed = requestData.avatarSeed
        userModel.avatar_type = requestData.avatarType
        return userModel as UserModel
    },
}
