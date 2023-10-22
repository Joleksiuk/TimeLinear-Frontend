import Timeline from '@/Components/Timeline/Timeline'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'

export default function TimelinePage() {
    return <div>{getCurrentUser() ? <Timeline /> : <SignIn />}</div>
}
