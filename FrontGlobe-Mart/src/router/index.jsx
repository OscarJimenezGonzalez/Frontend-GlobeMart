import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import LogInPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import ProductPage from '../pages/ProductPage'
import Profile from '../pages/Profile'


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
            },
            {
                path: '/Login',
                element: <LogInPage />
            },
            {
                path: '/Signup',
                element: <SignUpPage />
            },
            {
                path: '/ProductPage',
                element: <ProductPage />
            },
            {
                path: '/Profile',
                element: <Profile />
            }

        ]

    }

])


export default router