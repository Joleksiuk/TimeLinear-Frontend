import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'
import { Group } from './GroupTypes'
import GroupsService from './GroupsService'
import { getCurrentUser } from '@/services/AuthService'

type GroupsContextProps = {
    isLoadingData: boolean
    groups: Array<Group>
    setIsLoadingData: (value: boolean) => void
    setGroups: (event: Array<Group>) => void
}

const DefaultGroupsContext: GroupsContextProps = {
    isLoadingData: false,
    groups: [],
    setIsLoadingData: (value: boolean) => {},
    setGroups: (event: Array<Group>) => {},
}

const GroupsContext = createContext<GroupsContextProps>(DefaultGroupsContext)

type Props = {
    children: ReactNode
}

const GroupsProvider = ({ children }: Props) => {
    const [groups, setGroups] = useState<Array<Group>>([])
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true)

    const initData = async () => {
        setIsLoadingData(true)
        const response = await GroupsService.getOwnedGroups()
        console.log(response)
        setGroups(response.groups)
        setIsLoadingData(false)
    }

    useEffect(() => {
        if (getCurrentUser() !== null) {
            initData()
        }
    }, [])

    return (
        <GroupsContext.Provider
            value={{
                isLoadingData: isLoadingData,
                groups: groups,
                setIsLoadingData: (value: boolean) => {
                    setIsLoadingData(value)
                },
                setGroups: (value: Array<Group>) => {
                    setGroups(value)
                },
            }}
        >
            {children}
        </GroupsContext.Provider>
    )
}

const useGroupsContext = () => {
    const context = useContext<GroupsContextProps>(GroupsContext)
    if (!context) {
        throw new Error('GroupsContext must be used within a GroupsProvider')
    }
    return context
}

export { GroupsProvider, useGroupsContext }
