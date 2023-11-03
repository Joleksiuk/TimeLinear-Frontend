import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'
import ProfilePageLayout from '@/Components/Profile/ProfilePageLayout'

export default function ProfilePage() {
    return <div>{getCurrentUser() ? <ProfilePageLayout /> : <SignIn />}</div>
}
