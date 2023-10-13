import React from 'react'
import Link from '@mui/material/Link'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useNavigate } from 'react-router-dom'

export default function DashboardSidebarItems() {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <ListItemButton onClick={() => navigate('/calendar')}>
                <ListItemIcon>
                    <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate('/timeline')}>
                <ListItemIcon>
                    <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="Timeline" />
            </ListItemButton>
        </React.Fragment>
    )
}
