import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'
import { getOwnProfile } from '../services/userService.js'
import { getOwnSellerCompany } from '../services/sellerCompanyService'
import { getListOfProductsFromSellers, createVersionOfProduct } from '../services/productSellerService.js'
import { createProducts } from '../services/productService.js'
import { getCartItemsFromOrder, getCartItemsFromSeller, updateCartItemStatus } from '../services/cartItemService.js'
import SellerHomeSideBar from '../components/MicroComponents/SellerHomeSideBar/SellerHomeSideBar.jsx'
import SellerHomeTopBar from '../components/MicroComponents/SellerHomeTopBar/SellerHomeTopBar.jsx'
import { useCustomMediaQueries } from '../auxStr/customMediaQueries.js'
import SalesAnalyticsStructure from '../components/OtherComponents/SalesAnalyticsStructure/SalesAnalyticsStructure.jsx'
import SellerOrdersStructure from '../components/OtherComponents/SellerOrdersStructure/SellerOrdersStructure.jsx'
import SellerHomeStructure from '../components/OtherComponents/SellerHomeDashboard/SellerHomeDashboard.jsx'
import CircularProg from '../components/MicroComponents/CircularLoading/CircularLoading.jsx'
import SellerHomeDashboard from '../components/OtherComponents/SellerHomeDashboard/SellerHomeDashboard.jsx'
import AddNewProductStructure from '../components/OtherComponents/AddNewProductStructure/AddNewProductStructure.jsx'
import AddNewVersionStructure from '../components/OtherComponents/AddNewVersionStructure/AddNewVersionStructure.jsx'

import { updateOrderStatus } from '../services/orderService.js'

// Page that Integrates Functionall info and data Just for seller use Purpose. 

function SellerHome() {

    const { isMediumLargeScreen, isMediumScreen, isSmallScreen, isTinyScreen } = useCustomMediaQueries();
    const [userData, setUserData] = useState({})
    const [sellerCompanyData, setSellerCompanyData] = useState({})
    const [sellerProducts, setSellerProducts] = useState([])
    const [sellerCartItems, setSellerCartItems] = useState([])
    const [totalSales, setTotalSales] = useState(0)
    const [componentSelector, setComponentSelector] = useState("Dashboard")
    const [cartItemStatusChanging, setCartItemStatusChanging] = useState(false)
    const [awaitingShippmentOrders, setAwaitingShippmentOrders] = useState(0)

    // Fetch Data 
    useEffect(() => {

        const fetchData = async () => {

            const userInfo = await getOwnProfile()
            if (userInfo) {

                setUserData(userInfo)

            }
            const sellerCompanyInfo = await getOwnSellerCompany()
            if (sellerCompanyInfo) {

                setSellerCompanyData(sellerCompanyInfo)

            }
            const sellerProductList = await getListOfProductsFromSellers(sellerCompanyInfo.id)

            if (sellerProductList) {

                setSellerProducts(sellerProductList)
            }

            const sellerCoCartItems = await getCartItemsFromSeller(sellerCompanyInfo.id)
            if (sellerCoCartItems) {

                setSellerCartItems(sellerCoCartItems)

            }

        }

        fetchData()

    }, [cartItemStatusChanging])

    // Calculate totalSales
    useEffect(() => {

        const totalSalesCalc = () => {

            let totalCoSales = 0

            for (let index = 0; index < sellerCartItems.length; index++) {

                if (sellerCartItems[index].cartItemStatus !== "Pending Payment") {

                    totalCoSales += parseFloat(sellerCartItems[index].product_SellerCompany.priceAfterSale)

                }

            }
            // totalCoSales = Math.floor((totalCoSales * 100) / 100)
            totalCoSales = totalCoSales.toFixed(2)
            setTotalSales(totalCoSales)

        }

        totalSalesCalc()

    }, [sellerCartItems])

    // Console Logs
    useEffect(() => {

        // console.log("userData", userData)
        // console.log("sellerCo Data", sellerCompanyData)
        // console.log("sellerProductList", sellerProducts)
        // console.log("sellerCartItemList", sellerCartItems)
        // console.log("Total Sales", totalSales)

    }, [userData, sellerCompanyData, sellerProducts, sellerCartItems, totalSales])

    // Navigate throught SideBar Options
    const componentTransformer = (componentName) => {

        // El sideBar se comunica con esta función. 

        if (componentName === "Dashboard") {

            setComponentSelector("Dashboard")

        }
        if (componentName === "Sales") {

            setComponentSelector("Sales")

        }
        if (componentName === "Orders") {

            setComponentSelector("Orders")

        }
        if (componentName === "AddNewProduct") {

            setComponentSelector("AddNewProduct")

        }

    }

    // Esta función comprueba el estado de los cartItems dentro de una orden
    // Si algun seller de esa order actualiza cualquier item, la order pasa a 'in progress'
    // Si todos los items estan "delivered" marca la order como 'completed'

    const handleCartItemStatus = async (cartItemId, cartItemState, orderId) => {

        setCartItemStatusChanging(!cartItemStatusChanging) // con esto reactivo el useEffect que trae toda la info de la DB. 

        try {

            const updatedItem = await updateCartItemStatus(cartItemId, {

                cartItemStatus: cartItemState

            })

            if (!updatedItem) {

                console.log("Error updating CartItem Status.")

            }

            const cartItemsFromOrder = await getCartItemsFromOrder(orderId)
            console.log("cartItemsFromOrder here ", cartItemsFromOrder)

            const allItemsDelivered = async () => {

                for (let index = 0; index < cartItemsFromOrder.length; index++) {

                    if (cartItemsFromOrder[index].cartItemStatus !== "Delivered") {


                        const updatedOrder = await updateOrderStatus(orderId, {

                            orderStatus: "In progress"

                        })

                        if (!updatedOrder) {

                            return console.log("Error updating Order to In progress.")

                        }

                        console.log("updatedOrder Successfully")

                        return

                    }


                }

                const updatedOrder = await updateOrderStatus(orderId, {

                    orderStatus: "Completed"

                })

                if (!updatedOrder) {

                    console.log("Couldnt update the Order.")

                }
            }

            allItemsDelivered()



        } catch (error) {

            console.log("Error updating CartItem Status.")

        }

    }

    const countAwaitingShippmentOrders = () => {

        let awaitingOrders = 0

        for (let index = 0; index < sellerCartItems.length; index++) {

            if (sellerCartItems[index].cartItemStatus === "Awaiting Shipment") {

                awaitingOrders++

            }

        }

        setAwaitingShippmentOrders(awaitingOrders)
        return awaitingOrders

    }

    useEffect(() => {

        countAwaitingShippmentOrders()

    }, [sellerCartItems])



    // Render SideBar Options
    const renderSelectedComponent = () => {

        switch (componentSelector) {

            case "Dashboard":
                return <SellerHomeDashboard
                    userData={userData}
                    sellerCompanyData={sellerCompanyData}
                    sellerProducts={sellerProducts}
                    // sellerCartItems={sellerCartItems}
                    awaitingShippmentOrders={awaitingShippmentOrders}
                    totalSales={totalSales ? totalSales : <CircularProg />}
                />

            case "Orders":
                return <SellerOrdersStructure

                    sellerCartItems={sellerCartItems}
                    handleCartItemStatus={handleCartItemStatus}

                />

            case "Sales":
                return <SalesAnalyticsStructure

                    sellerCartItems={sellerCartItems}
                    totalSales={totalSales}

                />
            case "AddNewProduct":
                return <AddNewProductStructure
                    sellerCompanyData={sellerCompanyData}
                    

                />

            default:
                return <SellerHomeDashboard
                    userData={userData}
                    sellerCompanyData={sellerCompanyData}
                    sellerProducts={sellerProducts}
                    awaitingShippmentOrders={awaitingShippmentOrders}
                    totalSales={totalSales ? totalSales : <CircularProg />}
                />
        }

    }

    return (

        <>
            {isMediumScreen ?
                <SellerHomeSideBar

                    sendComponentSelection={componentTransformer}
                    awaitingShippmentOrders={awaitingShippmentOrders}

                /> :
                <SellerHomeTopBar

                    sendComponentSelection={componentTransformer}
                    awaitingShippmentOrders={awaitingShippmentOrders}

                />
            }
            <Box width={"100%"} height={"100%"} sx={{ display: "flex", backgroundColor: "background.brigth", p: 0, m: 0, mx: 0, my: !isMediumScreen ? 10 : 0 }}>

                {renderSelectedComponent()}

            </Box >



        </>

    )
}

export default SellerHome 