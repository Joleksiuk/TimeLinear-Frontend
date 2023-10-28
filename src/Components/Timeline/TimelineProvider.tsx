import { ReactNode, createContext, useEffect, useState } from 'react'
import { TimelineModel } from './types'
import { getCurrentUser } from '@/services/AuthService'

type TimelinesContextProps = {
    isLoadingData: boolean
    timelines: Array<TimelineModel>
    setTimelines: (events: Array<TimelineModel>) => void
    setIsLoadingData: (value: boolean) => void
}

const DefaultTimeEventsContext: TimelinesContextProps = {
    isLoadingData: false,
    timelines: [],
    setTimelines: (events: Array<TimelineModel>) => {},
    setIsLoadingData: (value: boolean) => {},
}

const TimelinesContext = createContext<TimelinesContextProps>(
    DefaultTimeEventsContext
)

type Props = {
    children: ReactNode
}

const TimeEventsProvider = ({ children }: Props) => {
    const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
    const [timelines, setTimelines] = useState<Array<TimelineModel>>([])

    const initData = async () => {
        //TODO init timelines here
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
                timelines: timelines,
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
