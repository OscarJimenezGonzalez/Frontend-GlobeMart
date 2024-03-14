import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts'
import ErrorPage from '../pages/ErrorPage'
import LandingPage from '../pages/LandingPage'
import AboutPage from '../pages/AboutPage'
import LogInPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import ProfilePage from '../pages/ProfilePage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import SellerIntroPage from '../pages/SellerIntroPage'
import SellerPage from '../pages/SellerPage'
import SellerHome from '../pages/SellerHome'
import OrderPage from '../pages/OrderPage'
import PaymentPage from '../pages/PaymentPage'
import PaymentSucceededPage from '../pages/PaymentSucceededPage'
import CustomerPage from '../pages/CustomerPage'


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
            },
            {
                path: `/ProductPage/:productVersionId`,
                element: <ProductPage />
            },
            {
                path: '/CartPage',
                element: <CartPage />
            },
            {
                path: '/SellerWelcomePage',
                element: <SellerIntroPage />
            },
            {
                path: '/SellerPage/:sellerCompanyId',
                element: <SellerPage />
            },
            {
                path: '/SellerHome/:sellerCompanyId',
                element: <SellerHome />
            },
            {
                path: '/OrderPage',
                element: <OrderPage />
            },
            {
                path: '/PaymentPage',
                element: <PaymentPage />
            },
            {
                path: '/PaymentSucceededPage',
                element: <PaymentSucceededPage />
            },
            {
                path: '/CustomerPage',
                element: <CustomerPage />
            }

        ]

    }

])


export default router