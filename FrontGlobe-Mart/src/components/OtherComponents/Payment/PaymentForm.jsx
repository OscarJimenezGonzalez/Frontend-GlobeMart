import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Box, Typography, CircularProgress, Grid } from '@mui/material';
import { useState } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';


function PaymentForm({ currentOrder, submitPayment }) {

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || loading) {
            return;
        }

        setLoading(true);
        submitPayment()// actualizamos el status de la order.
        const result = await stripe.confirmPayment({

            elements,
            confirmParams: {

                // redirect: "if_required",
                // return_url: "http://localhost:5179/PaymentSucceededPage",
                return_url: "http://localhost:5174/PaymentSucceededPage",

            },

        })


        if (result.error) {
            // Mostrar error al cliente
            console.log('[error]', result.error.message);
            setLoading(false)

        } else {
            // El pago ha sido procesado!
            if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {

                // await submitPayment() // actualizamos el status de la order.
                console.log('Payment succeeded!');

            }

        }

        console.log("Respuesta de Stripe:", result)
        setLoading(false)
    };

    return (
        <Box sx={{ mt: 3, width: "60%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mb: 3 }}>
                Payment Details:
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
                {currentOrder} €
            </Typography>

            <Grid container spacing={5}>

                <Grid item xs={12}>
                    <PaymentElement />
                    {/* Se puede usar la tarjeta con numero 4242 4242 4242 4242 */}
                </Grid>

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

        </Box >
    );

}

export default PaymentForm;