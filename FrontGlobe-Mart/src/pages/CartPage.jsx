import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'
import ProductAddedCard from '../components/OtherComponents/ProductAddedCard/ProductAddedCard'
import { useContext, useState, useEffect } from 'react'
import { mainContext } from '../contexts/mainContext'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

function CartPage() {

    const { mainData, setMainData } = useContext(mainContext)
    const cartList = mainData.productsOnCart

    console.log("main Context", mainData)

    const allproductSum = () => {


    }


    const renderAddedProducts = () => {

        return (

            cartList.map((element) =>

                <ProductAddedCard
                    key={(element.id)}
                    imageURL={(element.product.imageURL)}
                    model={(element.product.model)}
                    name={(element.product.name)}
                    price={(element.price)}
                    company={(element.sellerCompany.name)}

                />
            )
        )
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
                {/* <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "", gap: 1, p: 2 }} >
                    <Typography>Tax IVA: </Typography>
                    <Divider></Divider>
                    <Typography>Total : </Typography>
                </Card> */}
                <Typography variant='h6'>Total: <strong> 0.00 € { } </strong>  </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }} >
                <Button
                    disabled={(cartList.length === 0)}
                    variant='contained' color="success" size='large'>Confirm Order</Button>
            </Box>
        </Box >
    )
}

export default CartPage