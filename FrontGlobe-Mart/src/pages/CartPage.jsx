import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'
import ProductAddedCard from '../components/OtherComponents/ProductAddedCard/ProductAddedCard'
import { useContext, useState, useEffect } from 'react'
import { mainContext } from '../contexts/mainContext'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { useNavigate } from 'react-router'

function CartPage() {

    const { mainData, setMainData } = useContext(mainContext)
    const [productToDelete, setProductToDelete] = useState()
    const [total, setTotal] = useState()
    const navigate = useNavigate()
    let cartList = mainData.productsAddedToCart

    // console.log("contexto", mainData.productsAddedToCart)

    useEffect(() => {

        allproductSum()

    }, [mainData.productsAddedToCart])

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

    const renderAddedProducts = () => {

        return (

            mainData.productsAddedToCart.map((element) =>

                <ProductAddedCard

                    qty={(element.qty)}
                    quantityAv={(element.productAdded.qtyAvailable)}
                    key={(element.productAdded.id)}
                    id={(element.productAdded.id)}
                    imageURL={(element.productAdded.product.imageURL)}
                    model={(element.productAdded.product.model)}
                    name={(element.productAdded.product.name)}
                    priceAfterDiscount={(element.productAdded.priceAfterSale)}
                    company={(element.productAdded.sellerCompany.name)}
                    deleteProductFromCart={deleteProductFromCart}

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
        }))

    }

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", m: 1, p: 3, gap: 1 }} >
            {/* <Typography variant='overline' >Your products: </Typography> */}
            <Card sx={{ borderRadius: 0, minHeight: 100, p: 5 }}>
                <Typography variant='h5' > {cartList.length > 0 ? "Your products: " : "Your cart is empty..."} </Typography>
            </Card>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {renderAddedProducts()}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", pt: 2, pr: 1 }}>

                <Typography variant='h6'>Total: <strong> {total} € </strong>  </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }} >
                <Button
                    onClick={goToOrderPage}
                    disabled={(cartList.length === 0)}
                    variant='contained' color="success" size='large'>Go to Shipping Info</Button>
            </Box>
        </Box >
    )
}

export default CartPage