import Calendar from '@/Components/Calendar/Calendar'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'

export default function CalendarPage() {
    return <div>{getCurrentUser() ? <Calendar /> : <SignIn />}</div>
}
