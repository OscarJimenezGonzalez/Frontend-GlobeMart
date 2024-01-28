import AccountCircle from '@mui/icons-material/AccountCircle';
import SwipeableDrawerMenu from '../../MicroComponents/DrawerMenu/SwipableDrawerMenu';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CardMedia, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from 'react';
import * as React from 'react';
import { getProductCategories } from '../../../services/productCategoryService';

import useMediaQuery from '@mui/material/useMediaQuery';


function Header() {

  const navigate = useNavigate()
  const [productCategories, setProductCategories] = useState([])
  const isSmallScreen = useMediaQuery('(max-width: 600px)')

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {

    const fetchCategories = async () => {

      const categories = await getProductCategories()
      setProductCategories(categories)
      console.log("categories", categories)

    }
    fetchCategories()

  }, [])


  const searchProducts = (e) => {

  }


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Mantener para el LOGOUT 
  const handleCloseUserMenu = (e) => {
    if (e.target.outerText === 'Logout') {
      localStorage.removeItem('token')
      navigate('/')
    }
    setAnchorElUser(null);
  };
  // Mantener para el LOGOUT 

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">

      {/* {barra menu BLANCA - con logo e inicio de sesion} */}
      <Box sx={{ height: '100px', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', width: "90%" }}>

          <Box sx={{ ml: 4, mr: 1, width: "10%", minWidth: 130 }}>
            <Typography color={'#1976D2'} variant="h5" component="div" > <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}> Globe-Mart </Link></Typography>
          </Box>

          {!isSmallScreen && // SEARCHBAR - cuando es mayor de 600px renderiza esto 
            <Box sx={{ ml: 1, mr: 3, width: "100%" }}>

              <TextField
                //hay que trabajar el valor del input. con un onChange.
                fullWidth label="Search!"
                id="fullWidth"
                sx={{ backgroundColor: '#E7E7E7', width: '100%' }}
              />

            </Box>}

        </Box>

        {auth && (
          <Box sx={{ mr: 3 }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="default"
              sx={{ mr: 1 }}
            >
              <AccountCircle sx={{ fontSize: 35 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>

            </Menu>
          </Box>
        )}

      </Box>

      {/* searchBAR - cuando es menor de 600px renderiza esto */}
      {isSmallScreen &&
        <Box sx={{ backgroundColor: '#1976D2', display: 'flex', width: "80%", minHeight: "100px", justifyContent: 'center', alignItems: 'center', ml: 3, mr: 3 }}>
          <Box sx={{ ml: 1, mr: 3, width: "100%", backgroundColor: '#1976D2', color: '#1976D2' }}>
            <TextField
              fullWidth label="Search!"
              id="fullWidth"
              sx={{ backgroundColor: '#E7E7E7', width: '100%' }}
            />
          </Box>
        </Box>}

      {/* {barra menu AZUL - con cesta de la compra y drawer} */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: 3, mr: 3 }}>

        <Box>
          <SwipeableDrawerMenu productCategory={productCategories} />  {/* Le pasamos las categorias de proguctos como props  */}
        </Box>

        <Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="shopping cart"
            sx={{ mr: 1 }}
          >
            <ShoppingCartIcon sx={{ fontSize: 35 }} />
          </IconButton>
        </Box>

      </Box>

    </AppBar >
  );
}


export default Header;
