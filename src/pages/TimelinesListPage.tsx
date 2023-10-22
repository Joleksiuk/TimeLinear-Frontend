import TimelineList from '@/Components/Timeline/TimelineList/TimelineList'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'

export default function TimelinesListPage() {
    return <div>{getCurrentUser() ? <TimelineList /> : <SignIn />}</div>
}
