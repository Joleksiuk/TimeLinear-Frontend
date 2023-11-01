import { iconMapping } from './IconMapping'
import { EventIcon } from './types'

type Props = {
    eventIcon: EventIcon | undefined
    style?: any
}

const defaultStyle = { width: '70px', height: '70px' }
export default function EventIconComponent({
    eventIcon,
    style = defaultStyle,
}: Props) {
    const getChosenIcon = (): JSX.Element => {
        if (
            eventIcon === null ||
            eventIcon === undefined ||
            eventIcon.source === undefined
        ) {
            return <div>None</div>
        }
        if (eventIcon?.type === 'emoji') {
            return <img style={style} src={eventIcon.source} alt=""></img>
        }
        if (eventIcon?.type === 'icon') {
            const iconElement = iconMapping[eventIcon.source]

            return {
                ...iconElement,
                props: {
                    ...(iconElement.props || {}),
                    sx: style,
                },
            }
        }
        return <div></div>
    }
    return <>{getChosenIcon()}</>
}
