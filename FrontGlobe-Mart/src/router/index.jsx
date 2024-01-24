import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import LogInPage from '../pages/LoginPage'


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

            }

        ]

    }

])


export default router