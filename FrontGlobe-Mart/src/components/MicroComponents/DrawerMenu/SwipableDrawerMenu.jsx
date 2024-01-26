import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';


export default function SwipeableDrawerMenu() {

    const [state, setState] = React.useState(
        { left: false }
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (


        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}

        >
            <List>

{/* {Aqui hay que meter las categorías de productos para poder filtrar. 

    Se podrían usar checkBox, de MU. 
    Y creamos una función que mapee todas las categorías y cree 

} */}

                <ListItem disablePadding  > 
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <Link to={"/"}>
                            <ListItemText primary={"Home"} />
                        </Link>
                    </ListItemButton>
                </ListItem>

            </List>

        </Box>
    );

    return (
        
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <IconButton onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: 'white' }} /></IconButton>
                    <SwipeableDrawer

                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))
            }
        </div >
    );
}