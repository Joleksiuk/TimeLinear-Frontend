import ChangePasswordForm from '@/Components/Forms/ChangePasswordForm'
import { getCurrentUser } from '@/services/AuthService'
import SignIn from './SingIn'

export default function ChangePasswordPage() {
    return <div>{getCurrentUser() ? <ChangePasswordForm /> : <SignIn />}</div>
}
