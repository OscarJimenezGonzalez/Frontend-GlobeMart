import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import router from './router'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { mainContext } from './contexts/mainContext'

function App() {

  const [mainData, setMainData] = useState({

    logged: false,
    searchData: "",
    selectedPCategories: [],

  })

  const data = { mainData, setMainData }


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
