import Calendar from '@/Components/Calendar/Calendar'
import { getCurrentUser } from '@/Services/AuthService'
import SignIn from './SingIn'

export default function CalendarPage() {
    return <div>{getCurrentUser() ? <Calendar /> : <SignIn />}</div>
}
