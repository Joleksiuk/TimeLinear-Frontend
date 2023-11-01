import { GroupUser } from '../GroupTypes'
import { GroupUserContainerStyled } from './GroupUserComponent.Styled'

type Props = {
    user: GroupUser
}

export default function GroupUserComponent({ user }: Props): JSX.Element {
    return <GroupUserContainerStyled>{user.username}</GroupUserContainerStyled>
}
