import CreateEventForm from '@/Components/TimeEvent/CreateEventForm'
import { EventFormContainerStyled } from '@/Components/TimeEvent/CreateEventForm.styled'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'
import TimeEventsList from '@/Components/TimeEventList/TimeEventsList'
import CircularProgress from '@mui/material/CircularProgress'
import { useTimeEventsContext } from '@/Components/TimeEventList/TimeEventsProvider'

export default function EventsListPage() {
    return (
        <div>
            {getCurrentUser() ? (
                <EventFormContainerStyled>
                    <CreateEventForm />
                    <TimeEventsList />
                </EventFormContainerStyled>
            ) : (
                <SignIn />
            )}
        </div>
    )
}
