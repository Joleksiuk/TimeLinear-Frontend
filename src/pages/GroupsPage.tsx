import GroupsPageLayout from '@/Components/Group/page/GroupsPageLayout'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'

export default function GroupsPage() {
    return <div>{getCurrentUser() ? <GroupsPageLayout /> : <SignIn />}</div>
}
