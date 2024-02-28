import { RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react'
import router from './router'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { mainContext } from './contexts/mainContext'
import { checkTokenExpiration } from './auxStr/auxStructures'

function App() {

  const [mainData, setMainData] = useState({

    totalOrderPrice: 0,
    productsAddedToCart: [],
    productsOnCart: [],
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
      <CssBaseline />
      <mainContext.Provider value={data}>
        <RouterProvider router={router} />
      </mainContext.Provider>
    </>
  )
}

export default App
