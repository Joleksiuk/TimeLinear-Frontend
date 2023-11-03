import Timeline from '@/Components/Timeline/Timeline'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'
import { SingleTimelineProvider } from '@/Components/Timeline/TimelineProvider/SingleTimelineProvider'
import { GroupsProvider } from '@/Components/Group/GroupsProvider'

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
