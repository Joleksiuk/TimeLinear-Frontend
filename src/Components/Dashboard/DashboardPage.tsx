import { Box, Toolbar, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Colors } from '@/constants/Colors'

export default function DashboardPage() {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: Colors.pageBackground,
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Outlet />
        </Box>
    )
}
