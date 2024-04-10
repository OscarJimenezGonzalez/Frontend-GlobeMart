import React, { useState, useEffect, useContext } from 'react';
import { Box, SwipeableDrawer, Divider, IconButton, FormControlLabel, Checkbox, ListItem, ListItemText, Typography, List, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; // Ejemplo de icono para una categoría
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Otro ejemplo de icono
import { mainContext } from '../../../contexts/mainContext';
import { FaMobileAlt } from "react-icons/fa";
import { LuMusic2 } from "react-icons/lu";
import { GiConverseShoe, GiClothes } from "react-icons/gi";
import { MdOutlineSmartToy } from "react-icons/md";
import { LuMicrowave } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";

// Simula la asignación de un icono a cada categoría (deberías hacerlo según tus categorías reales)


const saleItemList = [{ id: 1, name: 'Less than 35% ', percentage: 30, label: '-35' }, { id: 2, name: 'More than 50% ', percentage: 50, label: '+50' }]

const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
        case 'Mobile':
            return <FaMobileAlt />;
        case 'Footwear':
            return <GiConverseShoe />;
        case 'Clothing':
            return <GiClothes />;
        case 'Music':
            return <LuMusic2 />;
        case 'Toys':
            return <MdOutlineSmartToy />;
        case 'Electronics':
            return <LuMicrowave />;
        default:
            return <ShoppingBasketIcon />;
    }
};

const getSaleIcon = (saleItem) => {
    switch (saleItem) {
        case '-35':
            return <MdAttachMoney />;
        case '+50':
            return <TbPigMoney />;
        case 'Outlet':
            return <TbMoneybag />;
        default:
            return <TbMoneybag />;
    }
};


export default function SwipeableDrawerMenu({ productCategory }) {
    const { mainData, setMainData } = useContext(mainContext);
    const [state, setState] = useState({ left: false });
    const [categoriesSelected, setCategoriesSelected] = useState([]);

    const checkedBox = (categoryId, isChecked) => {
        if (isChecked) {
            setCategoriesSelected([...categoriesSelected, categoryId]);
        } else {
            setCategoriesSelected(prevCategories => prevCategories.filter(id => id !== categoryId));
        }
    };

    useEffect(() => {
        setMainData(prev => ({
            ...prev,
            selectedPCategories: categoriesSelected
        }));
    }, [categoriesSelected, setMainData]);

    const renderProductCategories = () => {
        return productCategory.map((category) => (
            <ListItem key={category.id} dense>
                <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box ml={1} display={"flex"} alignItems={"center"}>
                        <ListItemIcon>
                            {getCategoryIcon(category.name)}
                        </ListItemIcon>
                        <Typography ml={-2} variant="body2">{category.name}</Typography>
                    </Box>
                    <Box>
                        <FormControlLabel
                            // label={<Typography variant="body2">{category.name}</Typography>}
                            control={<Checkbox size='small' onChange={(e) => checkedBox(category.id, e.target.checked)} />}
                        />
                    </Box>
                </Box>
            </ListItem>
        ));
    };


    const renderSaleCategories = () => {
        return saleItemList.map((saleItem) => (
            <ListItem key={saleItem.id} dense>
                <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box ml={1} display={"flex"} alignItems={"center"}>
                        <ListItemIcon>
                            {getSaleIcon(saleItem.label)}
                        </ListItemIcon>
                        <Typography ml={-2} variant="body2">{saleItem.name}</Typography>
                    </Box>
                    <Box>
                        <FormControlLabel
                            // label={<Typography variant="body2">{category.name}</Typography>}
                            control={<Checkbox size='small' onChange={(e) => checkedBox(saleItem.id, e.target.checked)} />}
                        />
                    </Box>
                </Box>
            </ListItem>
        ));
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography variant="h6" sx={{ my: 3, mx: 3, mt: 4 }} color="primary.fixed">Categories</Typography>
            <Divider />
            <List>
                {renderProductCategories()}
            </List>
            <Divider />
            {/* <Typography variant="h6" sx={{ my: 3, mx: 3, mt: 4}} color="primary.fixed">Sale Products </Typography>
            <Divider /> */}
            <List>
                {renderSaleCategories()}
            </List>


        </Box>
    );

    return (
        <Box>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)} sx={{ color: 'secondary.main' }}>
                        <MenuIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </Box>
    );
}