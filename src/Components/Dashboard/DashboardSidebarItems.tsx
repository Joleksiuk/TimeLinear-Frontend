import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

export default function DashboardSidebarItems(){
    return (
        <React.Fragment>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon  style={{fill: "white"}} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon  style={{fill: "white"}}/>
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon  style={{fill: "white"}}/>
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon  style={{fill: "white"}}/>
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LayersIcon  style={{fill: "white"}} />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItemButton>
        </React.Fragment>
      );
      
}