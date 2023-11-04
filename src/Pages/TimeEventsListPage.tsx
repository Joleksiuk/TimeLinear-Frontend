import CreateEventForm from '@/Components/TimeEvent/CreateTimeEvent/CreateEventForm'
import { EventFormContainerStyled } from '@/Components/TimeEvent/CreateTimeEvent/CreateEventForm.styled'
import { getCurrentUser } from '@/Services/AuthService'
import TimeEventsList from '@/Components/TimeEventList/TimeEventsList'
import { TimeEventsProvider } from '@/Components/TimeEventList/TimeEventsProvider'
import CreateTimeEventModal from '@/Components/TimeEvent/CreateTimeEvent/CreateTimeEventModal'
import SignIn from './SingIn'

export default function EventsListPage() {
    return (
        <TimeEventsProvider>
            {getCurrentUser() ? (
                <EventFormContainerStyled>
                    <CreateTimeEventModal />
                    <CreateEventForm />
                    <TimeEventsList />
                </EventFormContainerStyled>
            ) : (
                <SignIn />
            )}
        </TimeEventsProvider>
    )
}
