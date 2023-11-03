import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import React from 'react'
import EventIconComponent from './EventIconComponent'
import { IconFormContainerStyled } from '../TimeEvent/CreateTimeEvent/CreateEventForm.styled'
import EmojiPickerComponent from './EmojiPickerComponent'
import IconSearch from './IconSearch'
import { EventIcon } from './types'
import { IconButtonContainerStyled } from './IconSearch.styled'

type Props = {
    eventIcon: EventIcon | undefined
    setEventIcon: (value: EventIcon) => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zindex: 1,
}

export default function IconSearchDialog({ eventIcon, setEventIcon }: Props) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <IconButtonContainerStyled onClick={handleOpen}>
                <Typography>Chosen icon:</Typography>
                {<EventIconComponent eventIcon={eventIcon} />}
            </IconButtonContainerStyled>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <IconButtonContainerStyled>
                            <Typography>Chosen icon:</Typography>
                            {<EventIconComponent eventIcon={eventIcon} />}
                        </IconButtonContainerStyled>
                        <IconFormContainerStyled>
                            <EmojiPickerComponent setEventIcon={setEventIcon} />
                            <Typography>OR</Typography>
                            <IconSearch setEventIcon={setEventIcon} />
                        </IconFormContainerStyled>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}