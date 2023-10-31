import * as React from 'react'
import * as icons from '@mui/icons-material'

import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup'
import { PopupBody } from './IconSearch.styledmui'
import { IconContainerStyled, IconsContainer } from './IconSearch.styled'
import { iconMapping } from './IconMapping'

export default function IconSearch() {
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget)
    }
    const open = Boolean(anchor)
    const id = open ? 'simple-popup' : undefined

    return (
        <div>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 400,
                }}
                onClick={handleClick}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'Search for icon' }}
                />
                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            <BasePopup id={id} open={open} anchor={anchor}>
                <PopupBody>
                    <IconsContainer>
                        {Object.keys(icons)
                            .slice(0, 1000)
                            .map((iconName) => (
                                <IconContainerStyled key={iconName}>
                                    {iconMapping[iconName]}
                                </IconContainerStyled>
                            ))}
                    </IconsContainer>
                </PopupBody>
            </BasePopup>
        </div>
    )
}
