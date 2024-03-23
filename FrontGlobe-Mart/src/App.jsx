import { RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react'
import router from './router'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Stripe from 'stripe'
import { mainContext } from './contexts/mainContext'
import { checkTokenExpiration } from './auxStr/auxStructures'
import { mainTheme } from './themes/mainTheme'

function App() {

  const [mainData, setMainData] = useState({

    totalOrderPrice: 0,
    productsAddedToCart: [],
    productQtyOnCart: 0,
    joiningFromSellerIntro: false,
    shippingInfoClick: false,
    logged: false,
    searchData: "",
    selectedPCategories: [],
    
  })

  const data = { mainData, setMainData }

  // esta función nos chequea si el token ha expirado, si se cumple 1 hora desde el logIn
  // hace delete del token de localStorage
  useEffect(() => {
    checkTokenExpiration()
  }, [])

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <mainContext.Provider value={data}>
          <RouterProvider router={router} />
        </mainContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
