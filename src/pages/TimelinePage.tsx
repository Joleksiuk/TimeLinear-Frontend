import { Timeline } from '@mui/icons-material'
import { GroupsProvider } from '../Components/Group/GroupsProvider'
import { SingleTimelineProvider } from '../Components/Timeline/TimelineProvider/SingleTimelineProvider'
import { getCurrentUser } from '../services/AuthService'
import SignIn from './SingIn'

export default function TimelinePage() {
    return (
        <div>
            {getCurrentUser() ? (
                <GroupsProvider>
                    <SingleTimelineProvider>
                        <Timeline />
                    </SingleTimelineProvider>
                </GroupsProvider>
            ) : (
                <SignIn />
            )}
        </div>
    )
}
