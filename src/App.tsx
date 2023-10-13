import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TimelinePage from './pages/TimelinePage'
import NoPage from './pages/NoPage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SingIn'
import Dashboard from './Components/Dashboard/Dashboard'
import CalendarPage from './pages/CalendarPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<HomePage />} />
                    <Route path="timeline" element={<TimelinePage />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="timeline" element={<TimelinePage />} />
                    <Route path="calendar" element={<CalendarPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
