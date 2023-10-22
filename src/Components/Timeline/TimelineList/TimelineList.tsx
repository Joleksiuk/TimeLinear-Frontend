import Box from '@mui/material/Box'
import { ContainerStyled } from './TimelineList.styled'
import TimelineWidget from './TimelineWidget'

export default function TimelineList() {
    return (
        <ContainerStyled>
            <TimelineWidget />
            <TimelineWidget />
            <TimelineWidget />
            <TimelineWidget />
            <TimelineWidget />
            <TimelineWidget />
        </ContainerStyled>
    )
}
