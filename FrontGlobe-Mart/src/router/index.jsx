import { createBrowserRouter, redirect } from 'react-router-dom'
import Root from '../layouts'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'

const router = createBrowserRouter([

    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {

                path: '/',
                element: <MainPage />

            },
            {

                path: '/About',
                element: <AboutPage />

            }
        
        ]

    }

])


export default router