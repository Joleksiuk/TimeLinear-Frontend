import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useNavigate } from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group'
import { getCurrentUser } from '../../services/AuthService'
export default function DashboardSidebarItems() {
    const navigate = useNavigate()

    return (
        <div>
            {getCurrentUser() !== null && (
                <>
                    <React.Fragment>
                        <ListItemButton onClick={() => navigate('/calendar')}>
                            <ListItemIcon>
                                <CalendarMonthIcon />
                            </ListItemIcon>
                            <ListItemText primary="Calendar" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => navigate('/timelinesList')}
                        >
                            <ListItemIcon>
                                <AccessTimeIcon />
                            </ListItemIcon>
                            <ListItemText primary="My timelines" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/timeEvents')}>
                            <ListItemIcon>
                                <ViewListIcon />
                            </ListItemIcon>
                            <ListItemText primary="My events" />
                        </ListItemButton>
                        <ListItemButton onClick={() => navigate('/groups')}>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </React.Fragment>
                </>
            )}
        </div>
    )
}
