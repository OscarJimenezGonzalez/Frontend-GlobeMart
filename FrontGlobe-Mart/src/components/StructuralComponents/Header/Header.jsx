import SwipeableDrawerMenu from '../../MicroComponents/DrawerMenu/SwipableDrawerMenu';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from 'react';
import * as React from 'react';
import { getProductCategories } from '../../../services/productCategoryService';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { mainContext } from '../../../contexts/mainContext';
import { useContext } from 'react';
import AccountMenu from '../../MicroComponents/AccountMenu/AccountMenu';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';


function Header() {

  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  // const isMobileScreen = useMediaQuery('(max-width: 400px)')

  const { mainData, setMainData } = useContext(mainContext)
  const [searchInput, setSearchInput] = useState("")
  const [productCategories, setProductCategories] = useState([])
  const [logged, setLogged] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {

    setLogged(mainData.logged)
    console.log(mainData.logged)

  }, [mainData.logged])

  useEffect(() => {

    const fetchCategories = async () => {

      const categories = await getProductCategories()
      setProductCategories(categories)
      console.log("categories", categories)

    }
    fetchCategories()

  }, [])

  const searchProducts = (e) => {

    setSearchInput(e.target.value)

  }
  const saveSearchInput = () => {

    setMainData(prevData => ({
      ...prevData,
      searchData: searchInput
    }));
    navigate("/")

  }

  return (

    <AppBar >

      {/* {barra menu BLANCA - con logo e inicio de sesion} */}
      {
        !isSmallScreen &&
        // <AppBar>
        <Box sx={{ height: '100px', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', width: "100%" }}>
            <Box sx={{ ml: 4, width: "10%", minWidth: 130 }}>
              <Typography color={'#1976D2'} variant="h5" component="div" ><Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}> Globe-Mart </Link></Typography>
            </Box>
            <Box sx={{ ml: 1, width: "100%" }}>
              <TextField
                onChange={searchProducts}
                fullWidth label="Search for products ..."
                id="fullWidth"
                sx={{ backgroundColor: '#E7E7E7', width: '90%' }}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={saveSearchInput}>
                      <SearchIcon />
                    </IconButton>
                  )
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', justifyContent: 'end', minWidth: "100px", mr: 2.5 }}>

            {/* {basicamente si no hay token, ponme el boton de login} */}

            {(!token) && (
              <Box sx={{ mr: 1.5 }}>
                <Button variant="contained" sx={{ color: '#FFFFFF' }}>
                  <Link to={'/Login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Log In
                  </Link>
                </Button>
              </Box>
            )}

            {/* {basicamente si hay token, ponme el account menu>} */}

            {(token) && (
              <Box>
                <AccountMenu />
              </Box>
            )}

          </Box>

        </Box>
        // </AppBar>
      }

      {

        isSmallScreen &&
        <Box sx={{ height: '100px', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', width: "90%" }}>

            <Box sx={{ ml: 4, mr: 1, width: "100%", minWidth: 200 }}>
              <Typography color={'#1976D2'} variant="h5" component="div" ><Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>  Globe-Mart </Link></Typography>
            </Box>

          </Box>

          {/* {basicamente si no hay token, ponme el boton de login} */}

          {(!token) && (
            <Box sx={{ mr: 1.5 }}>
              <Button variant="contained" sx={{ color: '#FFFFFF' }}>
                <Link to={'/Login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Log In
                </Link>
              </Button>
            </Box>
          )}

          {/* {basicamente si hay token, ponme el account menu>} */}

          {(token) && (
            <Box>
              <AccountMenu />
            </Box>
          )}

        </Box>

      }

      {/* FIN ****** {barra menu BLANCA - con logo e inicio de sesion} */}


      {/* {barra menu AZUL - con cesta de la compra y drawer} */}

      {
        !isSmallScreen &&

        // <AppBar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: 3 }}>

          <Box>
            <SwipeableDrawerMenu productCategory={productCategories} />  {/* Le pasamos las categorias de proguctos como props  */}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'center', mr: 4 }}>
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
        // </AppBar>
      }

      {
        isSmallScreen &&
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: 3, mr: 3, height: 100 }}>

          <Box>
            <SwipeableDrawerMenu productCategory={productCategories} />  {/* Le pasamos las categorias de proguctos como props  */}
          </Box>

          <Box sx={{ ml: 3, mr: 2, width: "100%" }}>
            <TextField
              onChange={searchProducts}
              fullWidth label="Search for products ..."
              id="fullWidth"
              sx={{ backgroundColor: '#E7E7E7', width: '100%' }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                )
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="shopping cart"
              sx={{ mr: 0 }}
            >
              <ShoppingCartIcon sx={{ fontSize: 35 }} />
            </IconButton>
          </Box>

        </Box>

      }

      {/* FIN ***** {barra menu AZUL - con cesta de la compra y drawer} */}

    </AppBar >
  );
}


export default Header;
