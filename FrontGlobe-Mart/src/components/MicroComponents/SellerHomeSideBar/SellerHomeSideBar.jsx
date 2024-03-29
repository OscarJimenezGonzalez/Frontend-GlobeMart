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
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { Typography } from '@mui/material';


const drawerWidth = 290;

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

const auxItems = [

    {

        text: 'Notifications',
        icon: <InboxIcon />

    },

    {

        text: 'Place Requests',
        icon: <MailIcon />

    },
    {

        text: 'Seller FAQs',
        icon: <QuestionMarkIcon />

    }


]

export default function SellerHomeSideBar({ sendComponentSelection }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                sx={{
                    backgroundColor: 'white',
                    width: '100%',
                    border: '1px solid #E7E7E7',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}

            >

                <Box position={"fixed"} sx={{ mt: 1, p: 2, width: drawerWidth }}>
                    <List>
                        {menuItems.map((item, index) => (
                            <Box key={index} mb={1}>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => { sendComponentSelection(item.component) }} >
                                        <ListItemIcon sx={{ minWidth: 'auto', mr: 4, '.MuiSvgIcon-root': { fontSize: '1.2rem' } }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <Typography variant='tab' color={"primary.main"}>{item.text}</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Box>
                        ))}
                    </List>
                    <Divider sx={{ m: 3 }} />
                    <List>
                        {auxItems.map((item, index) => (
                            <Box key={index} mb={1}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={{ minWidth: 'auto', mr: 4, '.MuiSvgIcon-root': { fontSize: '1.2rem' } }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <Typography variant='tab' color={"primary.main"}>{item.text}</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Box>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
}