import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, TextField, Box, Typography, CircularProgress, Grid } from '@mui/material';
import { useState } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';
import { createPayment } from '../../../services/paymentService';
import { AfterpayClearpayMessageElement } from '@stripe/react-stripe-js';
import { AddressElement } from '@stripe/react-stripe-js';

function PaymentForm({ currentOrderPrice, clientSecret, submitPayment }) {

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || loading) {
            return;
        }

        setLoading(true);
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setLoading(false);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setLoading(false);
        }
    };


    // const handleSubmitPayment = async (event) => {

    //     event.preventDefault();

    //     if (!stripe || !elements || loading) {
    //         return;
    //     }

    //     setLoading(true);


    //     try {

    //         if (currentOrderPrice) {

    //             const amount = parseInt(currentOrderPrice)  // Realmente el dinero no es int pero es con lo unico que funciona ...
    //             const payment = await createPayment({ amount })

    //             if (payment) {

    //                 console.log(payment)
    //                 return payment

    //             }
    //         }

    //     } catch (error) {

    //         console.log("Error creating payment", error)

    //     }

    // }


    return (
        <Box sx={{ mt: 3, width: "60%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mb: 3 }}>
                Payment Details:
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
                {currentOrderPrice} €
            </Typography>

            <Grid container spacing={5}>



                <Grid item xs={12}>
                    <PaymentElement />
                    {/* Se puede usar la tarjeta con numero 4242 4242 4242 4242 */}
                </Grid>

                {/* <Grid item xs={12}>
                    <TextField
                        required
                        label="Billing address"
                        fullWidth
                        variant="outlined"
                    />
                </Grid> */}

                {/* <Grid>
                    <AddressElement />
                </Grid> */}

            </Grid>

            <Button
                sx={{ my: 6 }}
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
            >
                {loading ? <CircularProgress size={24} /> : 'Pay'}
            </Button>

            {/* <AfterpayClearpayMessageElement></AfterpayClearpayMessageElement> */}

        </Box >
    );
}

export default PaymentForm;