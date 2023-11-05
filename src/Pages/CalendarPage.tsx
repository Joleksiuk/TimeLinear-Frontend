import Calendar from '@/Components/Calendar/Calendar'
import { getCurrentUser } from '@/Services/AuthService'
import SignIn from './SingIn'
import { TimeEventsProvider } from '@/Components/TimeEventList/TimeEventsProvider'

export default function CalendarPage() {
    return (
        <div>
            {getCurrentUser() ? (
                <TimeEventsProvider>
                    <Calendar />
                </TimeEventsProvider>
            ) : (
                <SignIn />
            )}
        </div>
    )
}
