import SwipeableDrawerMenu from '../../MicroComponents/DrawerMenu/SwipableDrawerMenu';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, useTheme } from '@mui/material';
import { useEffect } from 'react';
import * as React from 'react';
import { getProductCategories } from '../../../services/productCategoryService';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { mainContext } from '../../../contexts/mainContext';
import { useContext } from 'react';
import AccountMenu from '../../MicroComponents/AccountMenu/AccountMenu';
import Button from '@mui/material/Button';
import { getOwnProfile } from '../../../services/userService';
import RoofingIcon from '@mui/icons-material/Roofing';
import ShoppingCartButton from '../../MicroComponents/ShoppingCartIconButton/ShoppingCartIconButton';

import { darkTheme } from '../../../themes/darkTheme';
import { mainTheme } from '../../../themes/mainTheme';
import { Palette } from '@mui/icons-material';
import logoSmallGM from '../../../assets/images/logoSmallGM.png'
import logoSmallGMOrng from '../../../assets/images/logoSmallGMOrng.png'
import logoSmallGMMix from '../../../assets/images/logoSmallGMMix.png'
import logoSmallGMGray from '../../../assets/images/logoSmallGMGray.png'
import logoOficialGM from '../../../assets/images/logoOficialGM.png'
import logoOficialGM2 from '../../../assets/images/logoOficialGM2.png'
import logoGM3 from '../../../assets/images/logoGM3.png'
import logoGM3dark from '../../../assets/images/logoGM3dark.png'



function Header() {

  const isMediumScreen = useMediaQuery('(min-width: 1000px)')
  const isSmallScreen = useMediaQuery('(min-width: 650px)')
  const isTinyScreen = useMediaQuery('(min-width: 400px)')

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

  const theme = useTheme()
  const dashButton = theme.components.MuiButton.styleOverrides.outlinedSecondary;
  const backgroundColor = mainData.themeMode === mainTheme ? "#FFFFFF" : "#1E1E1E"
  const borderColor = mainData.themeMode === mainTheme ? "#E7E7E7" : "#1E1E1E"
  const logo = mainData.themeMode === mainTheme ? logoGM3 : logoGM3dark

  return (

    <>

      <AppBar position='sticky' sx={{ backgroundColor: 'white', boxShadow: '0', borderBottom: `1px solid ${borderColor}` }}>

        {
          <Box

            sx={{ height: '100px', backgroundColor: 'background.default', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>

            <Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', width: "100%" }}>

              <Box sx={{ ml: 6, mr: 12, width: "10%", minWidth: 155 }}>

                <Typography color={'secondary.main'} variant="h5" component="div" >

                  {/* <Box sx={{boxShadow: "none", cursor: 'pointer'  }}
                    onClick={() => {
                      navigate('/')
                      scrollTo(0, 0)
                      setMainData(prevData => ({
                        ...prevData,
                        landingPageElements: true
                      }))

                    }}> Globe-Mart
                  </Box> */}

                  <Box
                    sx={{ width: "10%", minWidth: 210, minHeight: 'auto', ml: -2, mt: 1, boxShadow: "none", cursor: 'pointer' }}
                    onClick={() => {
                      navigate('/')
                      scrollTo(0, 0)
                      setMainData(prevData => ({
                        ...prevData,
                        landingPageElements: true
                      }))

                    }}
                    component="img"
                    src={logo}
                    alt='logo'
                  >
                  </Box>


                </Typography>

              </Box>



              {
                isSmallScreen &&
                <Box sx={{ ml: 1, width: "100%" }}>
                  <TextField
                    onChange={searchProducts}
                    fullWidth
                    label={<Typography variant='subtitle2'>Search...</Typography>}
                    id="fullWidth"
                    sx={{ backgroundColor: backgroundColor, width: '87%', mr: 1 }}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={saveSearchInput}>
                          <SearchIcon />
                        </IconButton>
                      )
                    }}
                  />
                </Box>}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', justifyContent: 'end', minWidth: "100px", mr: 2.5 }}>

              {/* {basicamente si no hay token, ponme el boton de login} */}

              {(!token) && (
                <Box sx={{
                  minWidth: 100,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  alignContent: 'center',
                  mr: 4
                }}>
                  <Button variant="containedPrimary">
                    <Link to={'/Login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                      Log In
                    </Link>
                  </Button>
                </Box>
              )}

              {/* {basicamente si hay token, ponme el account menu>} */}


              {(token) && (
                <Box sx={{
                  minWidth: 30,
                  maxWidth: 50,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  alignContent: 'center',
                  mr: 2
                }}>
                  <AccountMenu />
                  {isMediumScreen &&
                    <Typography variant='tab' color={"primary"} sx={{ minWidth: 90, ml: -3 }}>My Acount</Typography>
                  }
                </Box>
              )}
            </Box>
            <Box
              onClick={cartLink}
              sx={{
                // minWidth: isMediumScreen ? 10 : 50,
                width: isMediumScreen ? 120 : 10,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                alignContent: 'center',
                mr: isMediumScreen ? 3.5 : 4
              }}>
              <Box >
                <ShoppingCartButton
                  shoppingCart={mainData.productsAddedToCart}
                />
              </Box>
              {isMediumScreen &&
                <Typography color={"primary"} variant='tab' sx={{ minWidth: 90, ml: -1 }}>My Cart</Typography>
              }
            </Box>


          </Box>
        }

        {/* Aqui acaba el topHeader ????*/}

        <Box position='sticky' sx={{ backgroundColor: 'white', boxShadow: '0' }}>
          {
            !isSmallScreen &&
            <Box sx={{
              height: '100px',
              backgroundColor: 'background.default',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              alignContent: 'center',
              borderBottom: `1px solid ${borderColor}`,
              width: "100%",
            }}>
              <TextField
                onChange={searchProducts}
                fullWidth
                label="Search for products ..."
                id="fullWidth"
                sx={{ backgroundColor: backgroundColor, width: '80%', mx: 5 }}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={saveSearchInput}>
                      <SearchIcon />
                    </IconButton>
                  )
                }}
              />
            </Box>
          }

          {

            <Box

              sx={{ borderTop: `1px solid ${borderColor}`, backgroundColor: 'background.default', display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 3, }}>
              <Box backgroundColor="background.default">
                <SwipeableDrawerMenu productCategory={productCategories} />  {/* Le pasamos las categorias de proguctos como props  */}
              </Box >

              <Box display={"flex"}>

                {profileInfo && profileInfo.role === "seller" ?
                  <Button
                    startIcon={<RoofingIcon />}
                    onClick={() => { navigate(`/SellerHome/${profileInfo.id}`) }}
                    variant=""
                    sx={{
                      minWidth: 150,
                      mr: 5,
                      color: "#F9AB19"
                    }}>
                    Seller Store
                  </Button> : <Button
                    onClick={() => { navigate('/SellerWelcomePage') }}
                    variant="outlinedSecondary"
                    sx={{
                      minWidth: 150,
                      mr: 5
                    }}>
                    Become a seller
                  </Button>
                }

              </Box>
            </Box>

          }
        </Box>
      </AppBar >

    </>
  );

}


export default Header;
