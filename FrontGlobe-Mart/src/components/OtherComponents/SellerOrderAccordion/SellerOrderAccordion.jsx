import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function SellerOrderAccordion({ sellerCartItems, handleCartItemStatus }) {

    const [cartItemState, setCartItemState] = useState("")

    const handleStatusChange = (cartItemId, event, orderId) => {
        // Función para manejar el cambio de estado de un pedido
        console.log(`Pedido ${cartItemId} nuevo estado: ${event.target.value}`);
        handleCartItemStatus(cartItemId, event.target.value, orderId)
        return event.target.value

    };

    const handleItemStatusColor = (cartItemStatus) => {

        if (cartItemStatus === "Awaiting Shipment") {

            return 'warning.main'

        }
        if (cartItemStatus === "Shipped") {

            return 'primary'

        }
        if (cartItemStatus === "Delivered") {

            return 'success.main'

        }
        else {

            return 'primary'
        }

    }

    return (
        <Grid container spacing={0}>

            {sellerCartItems.map((item) => (

                <Grid item xs={12} key={item.id} mb={1}>

                    <Accordion sx={{ boxShadow: 'none', border: "1px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", pr: 3}}>
                                <Box sx={{ display: 'flex', width: '30%'}}>
                                    <Typography variant='subtitle2' color='primary'>Order Id: <strong>000{item.orderId < 10 ? `0${item.orderId}` : item.orderId}</strong> &nbsp; </Typography>
                                </Box>
                                <Box sx={{ display: 'flex' }} mr={0} minWidth={250}>
                                    <Typography variant='subtitle2' color='primary'>Item Status: &nbsp; </Typography>
                                    <Typography variant='tab' color={handleItemStatusColor(item.cartItemStatus)} > <strong>{item.cartItemStatus}</strong></Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ borderTop: '1px solid rgba(0, 0, 0, .125)' }}>
                            <Grid container spacing={1} p={3}>

                                <Grid item xs={12} md={12}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>Seller product reference: <strong>{item.productSellerCompanyId}</strong></Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>Seller product name: <strong>{item.product_SellerCompany.product.name}</strong></Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>Product quantity: <strong>{item.quantity}</strong></Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>Customer Shipping Info: <strong>{item.order.shippingAddress}</strong></Typography>
                                </Grid>
                                {/* {console.log(item.orderId)} */}
                                <Grid item xs={12} my={2}>
                                    <FormControl fullWidth>
                                        <InputLabel id={`status-select-label-${item.id}`}>Status</InputLabel>
                                        <Select
                                            labelId={`status-select-label-${item.id}`}
                                            id={`status-select-${item.id}`}
                                            value={item.cartItemStatus}
                                            label="Status"
                                            onChange={(event) => {

                                                handleStatusChange(item.id, event, item.orderId)

                                            }}

                                        >
                                            <MenuItem value={'Awaiting Shipment'}><Typography variant='subtitle2'>Awaiting Shipment</Typography></MenuItem>
                                            <MenuItem value={'Shipped'} ><Typography variant='subtitle2'>Shipped</Typography></MenuItem>
                                            <MenuItem value={'On Delivery'}><Typography variant='subtitle2'>On Delivery</Typography></MenuItem>
                                            <MenuItem value={'Delivered'}><Typography variant='subtitle2'>Delivered</Typography></MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            ))
            }
        </Grid >
    );
}




export default SellerOrderAccordion


