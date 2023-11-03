import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react'
import { TimeEvent } from '../TimeEvent/types'
import TimeEventListService from './TimeEventListService'
import { getCurrentUser } from '@/services/AuthService'

type TimeEventsContextProps = {
    isLoadingData: boolean
    timeEvents: Array<TimeEvent>
    setTimeEvents: (events: Array<TimeEvent>) => void
    setIsLoadingData: (value: boolean) => void
}

const DefaultTimeEventsContext: TimeEventsContextProps = {
    isLoadingData: false,
    timeEvents: [],
    setTimeEvents: (events: Array<TimeEvent>) => {},
    setIsLoadingData: (value: boolean) => {},
}

const TimeEventsContext = createContext<TimeEventsContextProps>(
    DefaultTimeEventsContext
)

type Props = {
    children: ReactNode
}

const TimeEventsProvider = ({ children }: Props) => {
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
    const [timeEvents, setTimeEvents] = useState<Array<TimeEvent>>([])

    const initData = async () => {
        setIsLoadingData(true)
        const response = await TimeEventListService.getOwnedTimeEvents()
        setTimeEvents(response.timeEvents)
        setIsLoadingData(false)
    }

    useEffect(() => {
        if (getCurrentUser() !== null) {
            initData()
        }
    }, [])

    return (
        <TimeEventsContext.Provider
            value={{
                isLoadingData: isLoadingData,
                timeEvents: timeEvents,
                setTimeEvents: (newTimeEvents: Array<TimeEvent>) => {
                    setTimeEvents(newTimeEvents)
                },
                setIsLoadingData: (value: boolean) => {
                    setIsLoadingData(value)
                },
            }}
        >
            {children}
        </TimeEventsContext.Provider>
    )
}

const useTimeEventsContext = () => {
    const context = useContext<TimeEventsContextProps>(TimeEventsContext)
    if (!context) {
        throw new Error(
            'useTimeEventsContext must be used within a TimeEventsProvider'
        )
    }
    return context
}

export { TimeEventsProvider, useTimeEventsContext }
