import CreateEventForm from '../Components/Group/create/CreateGroupForm'
import { EventFormContainerStyled } from '../Components/TimeEvent/CreateTimeEvent/CreateEventForm.styled'
import CreateTimeEventModal from '../Components/TimeEvent/CreateTimeEvent/CreateTimeEventModal'
import TimeEventsList from '../Components/TimeEventList/TimeEventsList'
import { TimeEventsProvider } from '../Components/TimeEventList/TimeEventsProvider'
import { getCurrentUser } from '../services/AuthService'
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
