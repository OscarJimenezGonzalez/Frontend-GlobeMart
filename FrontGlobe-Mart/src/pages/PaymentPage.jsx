import React from 'react'
import PaymentForm from '../components/OtherComponents/Payment/PaymentForm'
import { Box } from '@mui/system'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Card } from '@mui/material';
import { useState, useEffect } from 'react';
import { getOwnOrders } from '../services/orderService';
import { createPayment } from '../services/paymentService';


const stripePromise = loadStripe("pk_test_51OpXQsKsh6DZ7CX8hwIo0Aw5nWx5d5ioqRN9f4B1m4PKUc1oqT7fYwBXzLcGHjb5bvKr331eMQhUqLGXQuxeSMqb00xTAtgGtu");

function PaymentPage() {

    const [orderData, setOrderData] = useState([]);
    const [currentOrderPrice, setCurrentOrderPrice] = useState(0)
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {

        const fetchData = async () => {

            const ownOrders = await getOwnOrders()
            setOrderData(ownOrders)
            setCurrentOrderPrice(ownOrders[ownOrders.length - 1].totalPrice)


            try {

                const amount = 10000
                console.log(ownOrders[ownOrders.length - 1].totalPrice)
                // No consigo pasar el amount real, por fallo del formato probablement

                const amount2 = parseFloat(ownOrders[ownOrders.length - 1].totalPrice)

                const response = await createPayment({ amount });
                console.log("client Secret", response)
                setClientSecret(response.clientSecret);

            } catch (error) {

                console.error('clientSecret no recibido del backend');

            }

        }

        fetchData()

    }, [])

    useEffect(() => {

        console.log("Order Data ", orderData)
        console.log("CurrentOrder: ", currentOrderPrice)

    }, [orderData])

    useEffect(() => {

        console.log("Order Data ", orderData)
        // console.log("Order length ", orderListLength)

    }, [orderData])

    // const handleSubmitPayment = async (event) => {

    //     event.preventDefault();
    //     setLoading(true);

    //     try {

    //         const amount = 1400

    //     } catch (error) {

    //     }



    // }

    return (

        clientSecret ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <Box display={"flex"} alignItems={"center"} >
                    <Card sx={{ minWidth: 600, minHeight: 500, display: "flex", justifyContent: "center", alignItems: "center", mb: 12 }}>
                        <PaymentForm currentOrderPrice={currentOrderPrice} />
                    </Card>
                </Box>
            </Elements >
        ) : (
            <Box>Cargando...</Box>
        )
    );

}

export default PaymentPage