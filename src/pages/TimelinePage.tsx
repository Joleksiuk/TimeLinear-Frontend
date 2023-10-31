import Timeline from '@/Components/Timeline/Timeline'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'
import { SingleTimelineProvider } from '@/Components/Timeline/TimelineProvider/SingleTimelineProvider'

export default function TimelinePage() {
    return (
        <div>
            {getCurrentUser() ? (
                <SingleTimelineProvider>
                    <Timeline />
                </SingleTimelineProvider>
            ) : (
                <SignIn />
            )}
        </div>
    )
}
