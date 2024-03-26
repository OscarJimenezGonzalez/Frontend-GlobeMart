import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Typography } from '@mui/material';


const drawerWidth = 280;


const menuItems = [
    {
        text: 'DashBoard',
        icon: <DashboardIcon />,
        component: 'Dashboard'
    },
    {
        text: 'Customer Orders',
        icon: <ShoppingCartIcon />,
        component: 'Orders'
    },
    {
        text: 'Sales and Analytics',
        icon: <InsightsIcon />,
        component: 'Sales'
    },

    {
        text: 'Add new products',
        icon: <AddCircleOutlineIcon />,
        component: 'AddProducts'
    },

    {
        text: 'Your Products',
        icon: <InventoryIcon />,
        component: 'YourProducts'
    },
];

export default function SellerHomeTopBar({ sendComponentSelection }) {
    return (

        <Box sx={{ display: 'flex' }}>

            <Box position={"fixed"} sx={{ borderBottom: '1px solid #E7E7E7', backgroundColor: "white", minHeight: 80, minWidth: '100%', mb: 10, px: 3, width: drawerWidth }}>
                <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80 }}>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} disablePadding>
                            <ListItemButton onClick={() => { sendComponentSelection(item.component)}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', px: 2 }}>
                                <Typography variant='subtitle2' color="primary.main" textAlign="center">
                                    {item.text}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Box>
    );
}