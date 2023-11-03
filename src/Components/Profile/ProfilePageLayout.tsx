import { ProfilePageContainerStyled } from './ProfilePageLayout.styled'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import AvatarChangeDialog from '../Group/changeAvatar/AvatarChangeDialog'
import { getCurrentUser } from '../../services/AuthService'
import AvatarUtils, {
    DiceBearAvatarCategory,
} from '../../utils/user/AvatarUtils'

type UserModel = {
    email: string
    username: string
    avatar_seed: string
    avatar_type: DiceBearAvatarCategory
}

export default function ProfilePageLayout() {
    const [loggedUser, setLoggedUser] = useState<UserModel>()

    useEffect(() => {
        const storedUser = getCurrentUser()
        if (storedUser !== undefined && storedUser != null) {
            setLoggedUser(storedUser)
        }
    }, [])

    return (
        <ProfilePageContainerStyled>
            {getCurrentUser() === undefined || loggedUser == null ? (
                <CircularProgress />
            ) : (
                <div>
                    <img
                        src={AvatarUtils.getAvatarUrl(
                            loggedUser.avatar_seed,
                            loggedUser.avatar_type
                        )}
                        alt=""
                    />
                    <AvatarChangeDialog setLoggedUser={setLoggedUser} />
                    <div>Email: {loggedUser?.email} </div>
                </div>
            )}
        </ProfilePageContainerStyled>
    )
}