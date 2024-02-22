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
    const cartList = mainData.productsAddedToCart
    const [total, setTotal] = useState()

    console.log("main Context", mainData)
    console.log("cartList", cartList)
    // console.log("cartListQty", cartList[0].qty)
    // console.log("cartLisProduct", cartList[0].productAdded)

    useEffect(() => {

        allproductSum()

    }, [cartList])

    const allproductSum = () => {

        // const totalPrice =  cartList.reduce((total, actualValue) =>  
        // )

        let total = 0;

        for (let i = 0; i < cartList.length; i++) {

            total += parseFloat(cartList[i].productAdded.price * cartList[i].qty)

        }

        console.log("total", total)
        setTotal(total.toFixed(2))

    }

    const renderAddedProducts = () => {

        return (

            cartList.map((element) =>

                <ProductAddedCard

                    qty={(element.qty)}
                    key={(element.productAdded.id)}
                    imageURL={(element.productAdded.product.imageURL)}
                    model={(element.productAdded.product.model)}
                    name={(element.productAdded.product.name)}
                    price={(element.productAdded.price)}
                    company={(element.productAdded.sellerCompany.name)}

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

                <Typography variant='h6'>Total: <strong> {total} € { } </strong>  </Typography>
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