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
import { getOwnProfile } from '../../../services/userService';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RoofingIcon from '@mui/icons-material/Roofing';
import ShoppingCartButton from '../../MicroComponents/ShoppingCartIconButton/ShoppingCartIconButton';


function Header() {

  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  const isTinyScreen = useMediaQuery('(max-width: 400px)')

  const { mainData, setMainData } = useContext(mainContext)
  const [searchInput, setSearchInput] = useState("")
  const [productCategories, setProductCategories] = useState([])
  const [logged, setLogged] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
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


  useEffect(() => {

    const fetchData = async () => {

      const profileData = await getOwnProfile();
      setProfileInfo(profileData)
      console.log(profileData)
    }

    fetchData()

  }, [mainData.logged])


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
  const cartLink = () => {

    if (localStorage.getItem("token")) {
      navigate("/CartPage")
    } else {
      navigate("/login")
    }

  }


  return (

    <AppBar sx={{ backgroundColor: 'white', boxShadow: '0', borderBottom: '1px solid #E7E7E7' }}>
      {
        !isSmallScreen &&
        <Box sx={{ height: '100px', backgroundColor: 'background.default', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E7E7E7', width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', width: "100%" }}>
            <Box sx={{ ml: 4, width: "10%", minWidth: 130 }}>
              <Typography color={'secondary.main'} variant="h5" component="div" ><Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}> Globe-Mart </Link></Typography>
            </Box>
            <Box sx={{ ml: 1, width: "100%" }}>
              <TextField
                onChange={searchProducts}
                fullWidth label="Search for products ..."
                id="fullWidth"
                sx={{ backgroundColor: 'white', width: '90%' }}
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
                <Button variant="containedPrimary">
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
      }
      {
        isSmallScreen &&
        <Box sx={{ height: '100px', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E7E7E7', alignItems: 'center', width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', width: "100%" }}>
            <Box sx={{ ml: 4, mr: 1, width: "100%", minWidth: 134 }}>
              <Typography color={'secondary.main'} variant="h5" component="div" ><Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>  Globe-Mart </Link></Typography>
            </Box>

          </Box>
          {/* {basicamente si no hay token, ponme el boton de login} */}
          {(!token) && (
            <Box sx={{ mr: 1.5 }}>
              <Button variant="contained" sx={{ minWidth: 100, color: '#FFFFFF' }}>
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
      {
        !isSmallScreen &&

        <Box sx={{ backgroundColor: 'background.default', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 3 }}>
          <Box backgroundColor="background.default">
            <SwipeableDrawerMenu productCategory={productCategories} />  {/* Le pasamos las categorias de proguctos como props  */}
          </Box >

          {profileInfo && profileInfo.role === "seller" ?
            <Button
              startIcon={<RoofingIcon />}
              onClick={() => { navigate(`/SellerHome/${profileInfo.id}`) }}
              variant="containedSecondary"
              sx={{
                minWidth: 230,
                backgroundColor: "secondary.main"
              }}>
              Seller DashBoard
            </Button> : <Button
              onClick={() => { navigate('/SellerWelcomePage') }}
              variant="containedSecondary"
              sx={{ minWidth: 300, backgroundColor: "secondary.main" }}>
              Become a seller
            </Button>
          }
          <Box
            onClick={cartLink} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'center', mr: 4 }}>
            <ShoppingCartButton
              shoppingCart={mainData.productsAddedToCart}
            />
          </Box>
        </Box>
      }
      {
        isSmallScreen &&

        <Box sx={{ backgroundColor: 'background.default', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 3, pr: 2, height: 100 }}>
          <Box sx={{ pr: 3 }}>
            <SwipeableDrawerMenu productCategory={productCategories} />  {/* Le pasamos las categorias de proguctos como props  */}
          </Box>
          <Box sx={{ ml: 3, mr: 3, width: "100%" }}>
            <TextField
              onChange={searchProducts}
              fullWidth
              label={!isTinyScreen && "Search ..."}
              id="fullWidth"
              sx={{ backgroundColor: 'background.default', width: '100%' }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                )
              }}
            />
          </Box>

          <Box
            onClick={cartLink} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'center', pl: 3 }}>
            <ShoppingCartButton cartItemsCount={mainData.productQtyOnCart} />
          </Box>

        </Box>

      }

    </AppBar >
  );
}


export default Header;
