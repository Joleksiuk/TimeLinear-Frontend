import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from 'react'
import { Group } from '../GroupTypes'
import { useGroupsContext } from '../GroupsProvider'
import { TimelineModel } from '@/Components/Timeline/TimelineProvider/types'
import TimelineService from '@/Components/Timeline/TimelineProvider/TimelineService'
import { useSingleTimelineContext } from '@/Components/Timeline/TimelineProvider/SingleTimelineProvider'

type GroupOption = {
    label: string
    group: Group
}

type Props = {
    timeline: TimelineModel
}

export default function GroupSearch({ timeline }: Props) {
    const { groups } = useGroupsContext()
    const { setTimeline } = useSingleTimelineContext()
    const [value, setValue] = useState<GroupOption>()

    useEffect(() => {
        const permissionGroup = groups.filter(
            (value) => value.id === timeline.allowedToBrowse.id
        )
        if (permissionGroup.length > 0) {
            const thisGroup = permissionGroup.at(0)
            if (thisGroup !== undefined)
                setValue({
                    label: thisGroup.name,
                    group: thisGroup,
                })
        }
    }, [])

    const mapGroupsToOption = (): Array<GroupOption> => {
        return groups.map((group) => {
            return {
                label: group.name,
                group: group,
            }
        })
    }

    const handleValueChange = async () => {
        if (value !== undefined)
            await TimelineService.setAllowedToBrowseGroup({
                groupId: value?.group.id,
                timelineId: timeline.id,
            })

        const permissionGroup = groups.filter(
            (value) => value.id === timeline.allowedToBrowse.id
        )
        if (permissionGroup.length > 0) {
            const thisGroup = permissionGroup.at(0)
            if (thisGroup !== undefined) {
                const updatedTimeline = { ...timeline }
                updatedTimeline.allowedToBrowse = thisGroup
                setTimeline(updatedTimeline)
            }
        }
    }

    return (
        <Autocomplete
            disablePortal
            id="groups-search"
            options={mapGroupsToOption()}
            defaultValue={value}
            onChange={(event: any, newValue: any) => {
                setValue(newValue)
                handleValueChange()
            }}
            sx={{ width: 400 }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose group with browse permission"
                />
            )}
        />
    )
}
