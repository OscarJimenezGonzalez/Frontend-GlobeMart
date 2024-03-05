import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { mainContext } from '../../../contexts/mainContext';


export default function SwipeableDrawerMenu({ productCategory }) {

    const { mainData, setMainData } = useContext(mainContext)

    const [state, setState] = React.useState({ left: false });
    const [categoriesSelected, setCategoriesSelected] = useState([])

    const checkedBox = (categoryId, isChecked) => {

        if (isChecked) {

            console.log("Categoria Seleccionada", categoryId)
            setCategoriesSelected([...categoriesSelected, categoryId])
            // console.log("Datos en nuestro Contexto Al seleccionar: ", mainData)

        }
        else {

            console.log("Categoria Deseleccionada", categoryId)
            // const indice = categoriesSelected.findIndex(index => index === categoryId)
            // setCategoriesSelected(categoriesSelected => categoriesSelected.splice(indice, 1))

            setCategoriesSelected(prevCategories => prevCategories.filter(id => id !== categoryId))

            // console.log(categoriesSelected)
            // console.log("Datos en nuestro Contexto al Deseleccionar: ", mainData)
        }

    }

    useEffect(() => {

        setMainData(prev => ({
            ...prev,
            selectedPCategories: categoriesSelected
        }));

    }, [categoriesSelected, setMainData]);


    const renderProductCategories = () => {

        return productCategory.map((category) => {

            return <FormGroup key={category.id}>
                <ListItem sx={{ display: 'block', }}>
                    <ListItemText>
                        <FormControlLabel onChange={(e) => checkedBox(category.id, e.target.checked)} control={<Checkbox />} label={category.name} />
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
                        <MenuIcon sx={{ fontSize: 35, color: 'secondary.main' }} />
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