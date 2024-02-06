import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import ErrorPage from '../pages/ErrorPage'
import LandingPage from '../pages/LandingPage'
import AboutPage from '../pages/AboutPage'
import LogInPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import ProfilePage from '../pages/ProfilePage'
import ProductPage from '../pages/ProductPage'


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <LandingPage />
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
                path: '/Profile',
                element: <ProfilePage />
            },
            {
                path: '/ProductPage',
                element: <ProductPage />
            }

            // {
            //     path: `/ProductPage?=${productId}`,
            //     element: <ProductPage />
            // },

        ]

    }

])


export default router