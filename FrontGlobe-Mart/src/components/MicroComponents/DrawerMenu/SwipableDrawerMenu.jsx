import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ListItem, ListItemText, Typography } from '@mui/material';


export default function SwipeableDrawerMenu({ productCategory }) {

    const [state, setState] = React.useState({ left: false });

    const renderProductCategories = () => {

        return productCategory.map((category) => {

            return <FormGroup key={category.id}>
                <ListItem sx={{ display: 'block', }}>
                    <ListItemText>
                        <FormControlLabel control={<Checkbox />} label={category.name} />
                    </ListItemText>
                </ListItem>
            </FormGroup>

        })

    }

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
            onKeyDown={toggleDrawer(anchor, false)}    // <---- cierre al usar teclado
        // onClick={toggleDrawer(anchor, false)}   // <---- cierre al clicar dentro. 
        >
            <Typography variant="h6" sx={{ margin: 2, }}>Categories</Typography>
            <Divider />
            {renderProductCategories()}

        </Box >
    );

    return (

        <Box>
            {['left'].map((anchor) => (
                <Box key={anchor}>

                    <IconButton onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon sx={{ fontSize: 35, color: 'white' }} />
                    </IconButton>

                    <SwipeableDrawer

                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}

                    >

                        {list(anchor)}

                    </SwipeableDrawer>

                </Box>
            ))
            }
        </Box >
    );
}