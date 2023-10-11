import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Outlet } from 'react-router-dom';
import { AppBar, Drawer } from './Dashboard.styled';
import List from '@mui/material/List';
import DashboardToolbarItems from './DashboardToolbarItems';

const defaultTheme = createTheme({
  palette: {
    background: {
      default: 'black',
    },
    text: {
      primary: '#adb1c9',
      secondary: '#adb1c9'
    },
  },
});

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open}sx={{ backgroundColor: '#23263d' }} >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                <Link color="inherit" href="/">

                Timelinear
                </Link>   

              </Typography>
            <IconButton color="inherit">
                <Link color="inherit" href="signin">
                    <Badge color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </Link>   
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}               
              color="inherit"
            >
              <ChevronLeftIcon style={{fill: "white"}}/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <DashboardToolbarItems/>
            <Divider sx={{ my: 1 }} />
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#121529',
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
      </Box>
    </ThemeProvider>
  );
}