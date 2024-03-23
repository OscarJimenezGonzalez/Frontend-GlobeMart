import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'
import ProductAddedCard from '../components/OtherComponents/ProductAddedCard/ProductAddedCard'
import { useContext, useState, useEffect } from 'react'
import { mainContext } from '../contexts/mainContext'
import { Card, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import CartPriceDetail from '../components/MicroComponents/CartPriceDetail/CartPriceDetail'

function CartPage() {

    const { mainData, setMainData } = useContext(mainContext)

    const [total, setTotal] = useState(0)
    const [totalAfterTax, setTotalAfterTax] = useState(0)
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)

    const navigate = useNavigate()
    let cartList = mainData.productsAddedToCart

    console.log("contexto", mainData.productsAddedToCart)

    useEffect(() => {

        allproductSum()
        alldiscountSum()
        totalTaxCreator()


    }, [mainData.productsAddedToCart, total])

    useEffect(() => {

        setTotalAfterTax(Math.round((total + tax) * 100) / 100)

    }, [total, tax])

    const goToOrderPage = () => {

        // Se tiene que pasar a contexto el precio total de la compra

        setMainData(prevData => ({
            ...prevData,
            totalOrderPrice: total
        }))

        // Después acudimos a orderPage a confirmar los datos de pedido
        navigate("/OrderPage")
    }

    const allproductSum = () => {

        let total = 0;

        for (let i = 0; i < cartList.length; i++) {

            total += (cartList[i].productAdded.priceAfterSale) * (cartList[i].qty)

        }

        total = Math.round((total) * 100) / 100
        setTotal(total)

    }

    const totalTaxCreator = () => {

        setTax(Math.round((total * 0.07) * 100) / 100)
    }

    const alldiscountSum = () => {

        let total = 0;

        for (let i = 0; i < cartList.length; i++) {

            total += (cartList[i].productAdded.saleQuantity) * (cartList[i].qty)

        }

        total = Math.round((total) * 100) / 100
        setDiscount(total)

    }
    
    const renderAddedProducts = () => {

        return (

            mainData.productsAddedToCart.map((element) =>

                <ProductAddedCard

                    // prop cleaning needed. Is posible to reduce to 4 props, at least
                    qty={(element.qty)}
                    quantityAv={(element.productAdded.qtyAvailable)}
                    key={(element.productAdded.id)}
                    id={(element.productAdded.id)}
                    imageURL={(element.productAdded.product.imageURL)}
                    model={(element.productAdded.product.model)}
                    name={(element.productAdded.product.name)}
                    priceAfterDiscount={(element.productAdded.priceAfterSale)}
                    company={(element.productAdded.sellerCompany.name)}
                    companyId={(element.productAdded.sellerCompany.id)}
                    deleteProductFromCart={deleteProductFromCart}
                // prop cleaning needed. Is posible to reduce to 4 props, at least

                />
            )
        )
    }

    const deleteProductFromCart = (productId) => {

        console.log("Deleted", productId)
        setMainData(prevData => ({
            ...prevData,
            productsAddedToCart: prevData.productsAddedToCart.filter(element => element.productAdded.id !== productId)

            /// actualizamos el contexto filtrando por el id del producto seleccionado para eliminar
            /// al filtrar regeneramos el array nuevamente. 

        }))

    }

    return (

        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", m: 1, p: 3, gap: 1 }} >
            <Card sx={{ borderRadius: 0, minHeight: 100, p: 5 }}>
                <Typography variant='h5' color="primary" > {cartList.length > 0 ? "Your products: " : "Your cart is empty..."} </Typography>
            </Card>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {renderAddedProducts()}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
                {/* <Divider sx={{ width: "50%", mt: 4, mb: 3 }} /> */}
            </Box>


            {cartList.length > 0 &&

                < Box sx={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: "flex-end", alignItems: 'end', alignContent: 'end', mb: 6 }}>

                    <CartPriceDetail
                        label="Price"
                        labelColor="primary.main"
                        value={total}
                        valueColor="primary.main"
                        valueWeigth={"bold"}
                    ></CartPriceDetail>
                    {discount > 0 &&
                        <CartPriceDetail
                            label="Discount"
                            labelColor="primary.main"
                            value={discount}
                            valueColor="warning.main"
                        ></CartPriceDetail>
                    }
                    <CartPriceDetail
                        label="Tax (7%)"
                        labelColor="primary.main"
                        value={tax}
                        valueColor="primary.main"
                    ></CartPriceDetail>
                    <CartPriceDetail
                        label="Total"
                        labelColor="primary.main"
                        value={totalAfterTax}
                        valueColor="warning.main"
                        valueWeigth={"bold"}
                    ></CartPriceDetail>

                </Box>
            }

            <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }} >
                <Button
                    onClick={goToOrderPage}
                    disabled={(cartList.length === 0)}
                    variant='containedSuccess' sx={{ width: "30%" }}>Go to Shipping Info
                </Button>
            </Box>
        </Box >
    )
}

export default CartPage