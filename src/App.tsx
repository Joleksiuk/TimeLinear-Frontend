import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TimelinePage from './pages/TimelinePage'
import NoPage from './pages/NoPage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SingIn'
import Dashboard from './Components/Dashboard/Dashboard'
import CalendarPage from './pages/CalendarPage'
import TimelinesListPage from './pages/TimelinesListPage'
import EventsListPage from './pages/TimeEventsListPage'
import ChangePasswordPage from './pages/ChangePasswordPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="timeline/:timelineId"
                        element={<TimelinePage />}
                    />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="timelineList" element={<TimelinePage />} />
                    <Route path="calendar" element={<CalendarPage />} />
                    <Route
                        path="timelinesList"
                        element={<TimelinesListPage />}
                    />
                    <Route path="timeEvents" element={<EventsListPage />} />
                    <Route
                        path="changePassword"
                        element={<ChangePasswordPage />}
                    />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
