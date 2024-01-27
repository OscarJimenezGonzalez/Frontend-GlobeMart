import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import SwipeableDrawerMenu from '../../MicroComponents/DrawerMenu/SwipableDrawerMenu';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { CardMedia, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from 'react';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


import { getProductCategories } from '../../../services/productCategoryService';

function Header() {

  const navigate = useNavigate()

  const [productCategories, setProductCategories] = useState([])

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
      <Box sx={{ height: '100px', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ ml: 3 }}>
            <Typography color={'#1976D2'} variant="h5" component="div" sx={{ flexGrow: 1 }}> <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>Globe-Mart </Link></Typography>
          </Box>
          <Box sx={{ ml: 2, minWidth: '0%', maxwidth: '100%' }}>
            <TextField

              //hay que trabajar el valor del input. con un onChange.
              fullWidth label="Search!"
              id="fullWidth"
              sx={{ backgroundColor: '#E7E7E7' }}

            />
          </Box>
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
