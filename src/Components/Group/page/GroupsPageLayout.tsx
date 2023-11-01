import GroupsList from '../list/GroupsList'
import { GroupsPageLayoutStyled } from './GroupsPageLayout.styled'
import { GroupsProvider } from '../GroupsProvider'
import CreateGroupForm from '../create/CreateGroupForm'

export default function GroupsPageLayout(): JSX.Element {
    return (
        <GroupsProvider>
            <GroupsPageLayoutStyled>
                <CreateGroupForm />
                <GroupsList></GroupsList>
            </GroupsPageLayoutStyled>
        </GroupsProvider>
    )
}
