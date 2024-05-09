import React from 'react'
import PaymentForm from '../components/OtherComponents/Payment/PaymentForm'
import { Box } from '@mui/system'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Card } from '@mui/material';
import { useState, useEffect } from 'react';
import { getOwnOrders } from '../services/orderService';
import { createPayment } from '../services/paymentService';
import { updateOrderStatus } from '../services/orderService';
import { updateCartItemListStatus } from '../services/cartItemService';

const stripePromise = loadStripe("pk_test_51OpXQsKsh6DZ7CX8hwIo0Aw5nWx5d5ioqRN9f4B1m4PKUc1oqT7fYwBXzLcGHjb5bvKr331eMQhUqLGXQuxeSMqb00xTAtgGtu");

function PaymentPage() {

    const [orderData, setOrderData] = useState([]);
    const [currentOrder, setCurrentOrder] = useState({})
    const [currentOrderPrice, setCurrentOrderPrice] = useState(0)
    const [clientSecret, setClientSecret] = useState("")

    // Traemos los datos de la ultima order creada por el usuario
    useEffect(() => {

        const fetchData = async () => {

            try {

                const ownOrders = await getOwnOrders()
                setOrderData(ownOrders)
                setCurrentOrder(ownOrders[ownOrders.length - 1])
                let amount = ownOrders[ownOrders.length - 1].totalPrice
                const response = await createPayment({ amount });
                console.log("client Secret", response)
                setClientSecret(response.clientSecret);

            } catch (error) {

                console.error('clientSecret no recibido del backend');

            }

        }

        fetchData()

    }, [])

    // console logs 
    useEffect(() => {

        console.log("Order Data ", orderData)
        console.log("CurrentOrder: ", currentOrderPrice)

    }, [orderData])

    // Update order Status y cartItems Status

    const handleOrderStatus = async () => {

        const orderId = currentOrder.id
        try {

            const updateOrder = await updateOrderStatus(orderId,

                {
                    isPayed: true,
                    orderStatus: "Accepted"
                }

            )

            if (updateOrder) {

                console.log(updateOrder, "Success updating Order!")

            }

            const updatedCartItems = await updateCartItemListStatus(orderId,

                {
                    settled: true,
                    cartItemStatus: "Awaiting Shipment"
                }

            )

            if (updatedCartItems) {

                console.log(updatedCartItems, "Success updating CartItems!")

            }


        } catch (error) {

            console.log("Error updating Order Status")

        }

    }

    return (

        clientSecret ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <Box display={"flex"} alignItems={"center"} mb={20} mt={5}>
                    <Card sx={{ minWidth: 600, minHeight: 500, display: "flex", justifyContent: "center", alignItems: "center",  mt: 10 }}>
                        <PaymentForm
                            currentOrder={currentOrder.totalPrice}
                            clientSecret={clientSecret}
                            submitPayment={handleOrderStatus}
                        />
                    </Card>
                </Box>
            </Elements >
        ) : (
            <Box>Cargando...</Box>
        )
    );

}

export default PaymentPage