import ProfilePageLayout from '../Components/Profile/ProfilePageLayout'
import { getCurrentUser } from '../services/AuthService'
import SignIn from './SingIn'

export default function ProfilePage() {
    return <div>{getCurrentUser() ? <ProfilePageLayout /> : <SignIn />}</div>
}
