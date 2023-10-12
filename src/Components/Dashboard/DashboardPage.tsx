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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Outlet />
            </Container>
        </Box>
    )
}
