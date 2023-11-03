import CreateEventForm from '@/Components/TimeEvent/CreateTimeEvent/CreateEventForm'
import { EventFormContainerStyled } from '@/Components/TimeEvent/CreateTimeEvent/CreateEventForm.styled'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'
import TimeEventsList from '@/Components/TimeEventList/TimeEventsList'
import { TimeEventsProvider } from '@/Components/TimeEventList/TimeEventsProvider'
import CreateTimeEventModal from '@/Components/TimeEvent/CreateTimeEvent/CreateTimeEventModal'

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
