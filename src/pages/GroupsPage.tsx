import GroupsPageLayout from '@/Components/Group/page/GroupsPageLayout'
import { getCurrentUser } from '@/Services/AuthService'
import SignIn from './SingIn'

export default function GroupsPage() {
    return <div>{getCurrentUser() ? <GroupsPageLayout /> : <SignIn />}</div>
}
