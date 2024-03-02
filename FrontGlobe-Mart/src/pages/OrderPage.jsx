import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { mainContext } from '../contexts/mainContext'
import { getOrders, createOrder } from '../services/orderService'
import { createCartItem } from '../services/cartItemService'
import OptionSelector from '../components/MicroComponents/OptionSelector/OptionSelector'
import SelectMethodRadio from '../components/MicroComponents/SelectMethodRadio/SelectMethodRadio'
import { paymentOptions } from '../auxStr/paymentOptions'
import { deliveryOptions } from '../auxStr/deliveryOptions'
import { countries } from '../auxStr/countries'
import { addressType } from '../auxStr/addressType'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AutorenewIcon from '@mui/icons-material/Autorenew';

function OrderPage() {

    const [error, setError] = useState("")
    const [infoSent, setInfoSent] = useState()
    const [selectedAddessType, setSelectedAddessType] = useState()
    const [paymentOption, setPaymentOption] = useState()
    const [deliveryOption, setDeliveryOption] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    const { mainData, setMainData } = useContext(mainContext);
    const navigate = useNavigate();

    useEffect(() => {

        // console.log("deliveryOption: ", deliveryOption)
        // console.log("paymentOption: ", paymentOption)
        // console.log("countrySelected: ", selectedCountry)


    }, [paymentOption, deliveryOption, selectedCountry])

    const redirectToPayment = () => {

        setTimeout(() => {
            navigate('/PaymentPage')
        }, 3000)

    }

    // Metodo que concatena la string del campo shippingAddress
    const conCatShippingAddress = (addressType, addressLine1, number, floor, door, city, zipCode, country) => {

        const shippingAddress = `${addressType} ${addressLine1}, Num.${number}, floor: ${floor}${door}, ${zipCode}, ${city} - ${country}`;
        return shippingAddress

    }

    // Metodos que llaman a la API 
    const sendCartItemList = async (lastOrderId) => {

        console.log("Creando Cart Item List despues de crear el order...")

        for (let i = 0; i < mainData.productsAddedToCart.length; i++) {

            const quantity = mainData.productsAddedToCart[i].qty
            const productSellerCompanyId = mainData.productsAddedToCart[i].productAdded.id
            const orderId = lastOrderId

            try {

                const response = await createCartItem({

                    quantity,
                    productSellerCompanyId,
                    orderId,

                })

                if (response) {

                    console.log(response)
                    setInfoSent(true)

                } else {

                    console.log("Unexpected Error creating Cart List.")
                    setInfoSent(false)

                }

            } catch (error) {

                console.error('Error details:', error.response || error);
                setInfoSent(false)

            }

        }

    }

    const sendOrderForm = async (event) => {

        event.preventDefault();
        // esta linea de abajo se usa para recoger la info del form. 
        const data = new FormData(event.currentTarget)

        // aqui asignamos la info del form a constantes. 
        const addressType = selectedAddessType
        const addressLine1 = data.get('Address1').trim()
        const number = data.get('Number').trim()
        const floor = data.get('Floor').trim()
        const door = data.get('Door').trim()
        const city = data.get('City').trim()
        const zipCode = data.get('Zip Code').trim()
        const country = selectedCountry

        // funcion que concatena todos los datos que estan arriba para mandar una unica shippingAddress
        const shippingAddress = conCatShippingAddress(addressType, addressLine1, number, floor, door, city, zipCode, country)

        const date = new Date()
        const billNumber = 1;  // falta buscar la forma de hacer un autoIncrement sobre el numero de Bill ya existente.
        const totalPrice = parseFloat(mainData.totalOrderPrice);
        const paymentMethod = paymentOption
        const deliveryMethod = deliveryOption

        //Aqui se hace la llamada a la API

        try {

            const response = await createOrder({
                // le pasamos los campos exactos que pide el modelo.
                billNumber,
                shippingAddress,
                date,
                paymentMethod,
                deliveryMethod,
                totalPrice

            });

            if (response) {

                console.log(response)
                console.log("podemos acceder a response?", response.id)
                // await setLastOrderId(response.id)
                let lastOrderId = response.id
                await sendCartItemList(lastOrderId)

            } else {

                console.log("Unexpected Error creating Order.")
                setInfoSent(false)


            }

        } catch (error) {

            console.error(error);
            setInfoSent(false)

        }

    }
    // !Metodos que llaman a la API 

    // Metodo que renderiza el formulario.
    const renderShippingInfo = () => {

        return (

            <Box component="form" noValidate sx={{ mt: 3, mb: 8, width: "50vw" }} onSubmit={sendOrderForm}>

                <Typography variant="h6" sx={{ mb: 3 }}>Shipping Info: {""}</Typography>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <OptionSelector
                            selectedOption={((value) => { setSelectedAddessType(value) })}
                            titleLabel={("St. Type:")}
                            optionList={(addressType)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            // onChange={}
                            variant="standard"
                            required
                            fullWidth
                            name="Address1"
                            label="Address 1st. line"
                            type="string"
                            id="Address1"
                            autoComplete="off"
                            defaultValue={""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            // onChange={}
                            variant="standard"
                            required
                            fullWidth
                            name="Number"
                            label="St. Number"
                            type="string"
                            id="Number"
                            autoComplete="off"
                            defaultValue={""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            // onChange={}
                            variant="standard"
                            required
                            fullWidth
                            name="Floor"
                            label="Floor"
                            type="string"
                            id="Floor"
                            autoComplete="off"
                            defaultValue={""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            // onChange={}
                            variant="standard"
                            required
                            fullWidth
                            name="Door"
                            label="Door"
                            type="string"
                            id="Door"
                            autoComplete="off"
                            defaultValue={""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            // onChange={}
                            variant="standard"
                            required
                            fullWidth
                            name="City"
                            label="City"
                            type="string"
                            id="City"
                            autoComplete="off"
                            defaultValue={""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            // onChange={}
                            variant="standard"
                            required
                            fullWidth
                            name="Zip Code"
                            label="Zip Code"
                            type="string"
                            id="Zip Code"
                            autoComplete="off"
                            defaultValue={""}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <OptionSelector
                            selectedOption={((value) => { setSelectedCountry(value) })}
                            titleLabel={("Country")}
                            optionList={(countries)}
                        ></OptionSelector>

                    </Grid>
                    <Grid sx={{ mt: 4 }} item xs={12}>

                        <SelectMethodRadio
                            titleLabel={("Delivery Method:")}
                            options={(deliveryOptions)}
                            sheetSize={("31.5%")}
                            selectedMethod={((value) => { setDeliveryOption(value) })}
                        ></SelectMethodRadio>

                    </Grid>
                    <Grid sx={{ mt: 1 }} item xs={12}>

                        <SelectMethodRadio
                            titleLabel={("Payment Method:")}
                            options={(paymentOptions)}
                            sheetSize={("31.5%")}
                            selectedMethod={((value) => { setPaymentOption(value) })}
                        ></SelectMethodRadio>

                    </Grid>

                </Grid>
                <Divider sx={{ mt: 8, mb: 6 }} />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 4, mb: 2 }}
                >
                    Confirm Shipping Info and go to Payment
                </Button>
                {infoSent === true && <Box display="flex" gap={2} alignItems="center" justifyContent="center">
                    <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
                    <Typography sx={{ fontSize: 20, color: "green", alignContent: "center" }}>Your order has been created successfully. Redirecting to Payment...{redirectToPayment()}
                    </Typography>
                </Box>}
                {infoSent === false && <Box display="flex" gap={2} alignItems="center" justifyContent="center">
                    <CancelIcon sx={{ fontSize: 50, color: "red" }} />
                    <Typography sx={{ fontSize: 20, color: "red", alignContent: "center" }}>Your order could not be created. Please try again.</Typography>
                </Box>}

            </Box>

        )

    }


    return (
        <Box>{renderShippingInfo()}</Box>
    )

}

export default OrderPage