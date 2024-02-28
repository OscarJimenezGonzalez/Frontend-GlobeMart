import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import { useState, useEffect, useContext } from 'react'
import { mainContext } from '../contexts/mainContext'
import { createOrder } from '../services/orderService'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import CountrySelector from '../components/MicroComponents/CountrySelector/CountrySelector'
import SelectMethodRadio from '../components/MicroComponents/SelectMethodRadio/SelectMethodRadio'
import { paymentOptions } from '../auxStr/paymentOptions'
import { deliveryOptions } from '../auxStr/deliveryOptions'


function OrderPage() {

    const [error, setError] = useState("")
    const [OrderNumber, setOrderNumber] = useState(0)
    const [paymentOption, setPaymentOption] = useState()
    const [deliveryOption, setDeliveryOption] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    const { mainData, setMainData } = useContext(mainContext);


    console.log("CL en OrderPage: ", mainData)

    useEffect(() => {

        console.log("deliveryOption: ", deliveryOption)
        console.log("paymentOption: ", paymentOption)
        console.log("countrySelected: ", selectedCountry)

    }, [paymentOption, deliveryOption, selectedCountry])

    const cleanError = () => {
        setError("")
    }

    const conCatShippingAddress = (addressLine1, number, floor, door, city, country) => {

        const shippingAddress = `${addressLine1}, Num.${number}, floor: ${floor}, door: ${door}, -- ${city}, ${country}`;
        return shippingAddress

    }

    // Metodos que llaman a la API 

    const sendOrderForm = async (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget)

        const addressLine1 = data.get('Address1').trim()
        const number = data.get('Number').trim()
        const floor = data.get('Floor').trim()
        const door = data.get('Door').trim()
        const city = data.get('City').trim()
        const country = selectedCountry


        const shippingAddress = conCatShippingAddress(addressLine1, number, floor, door, city, country)


        const date = new Date()
        const billNumber = 1;  // falta buscar la forma de hacer un autoIncrement sobre el numero de Bill ya existente.
        const totalPrice = parseFloat(mainData.totalOrderPrice);
        const paymentMethod = paymentOption
        const deliveryMethod = deliveryOption

        //Aqui se hace la llamada a la API

        try {

            const response = await createOrder({

                billNumber,
                shippingAddress,
                date,
                paymentMethod,
                deliveryMethod,
                totalPrice

            });

            if (response) {

                console.log(response)


            } else {

                console.log("Unexpected Error.")

            }

        } catch (error) {

            console.error(error);

        }

    }

    const createCartItemList = async () => {

        // En este metodo vamos a crear todos los articulos asociados a una Order.     

    }

    // Metodos que llaman a la API 


    const renderShippingInfo = () => {

        return (

            <Box component="form" noValidate sx={{ mt: 3, mb: 8, width: "50vw" }} onSubmit={sendOrderForm}>

                <Typography variant="h6" sx={{ mb: 3 }}>Shipping Info: {""}</Typography>
                {/* <Typography>Introduce your shipping info here: </Typography>
                <Typography> </Typography> */}

                <Grid container spacing={2}>

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

                        <CountrySelector
                            selectedCountry={((value) => { setSelectedCountry(value) })}
                        ></CountrySelector>

                    </Grid>

                    <Grid sx={{ my: 2 }} item xs={12}>

                        <SelectMethodRadio

                            titleLabel={("Delivery Method:")}
                            options={(deliveryOptions)}
                            sheetSize={("31.5%")}
                            selectedMethod={((value) => { setDeliveryOption(value) })}
                        >
                        </SelectMethodRadio>

                    </Grid>
                    <Grid sx={{ my: 2 }} item xs={12}>

                        <SelectMethodRadio
                            titleLabel={("Payment Method:")}
                            options={(paymentOptions)}
                            sheetSize={("31.5%")}
                            selectedMethod={((value) => { setPaymentOption(value) })}
                        >
                        </SelectMethodRadio>

                    </Grid>

                </Grid>
                <Divider sx={{ mt: 4, mb: 3 }} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 4, mb: 2 }}
                >
                    Confirm Shipping Info
                </Button>

            </Box>

        )

    }


    return (
        <Box>{renderShippingInfo()}</Box>
    )
}

export default OrderPage