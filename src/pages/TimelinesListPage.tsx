import TimelineList from '../Components/Timeline/TimelineList/TimelineList'
import { TimelinesProvider } from '../Components/Timeline/TimelineProvider/TimelinesProvider'
import { getCurrentUser } from '../services/AuthService'
import SignIn from './SingIn'

export default function TimelinesListPage() {
    return (
        <TimelinesProvider>
            {getCurrentUser() ? <TimelineList /> : <SignIn />}
        </TimelinesProvider>
    )
}
