import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SellerOrderAccordionAnalytics({ sellerCartItems }) {

    // En este accordion además de mapear nuestro array de Items, filtramos por aquellos que estén pendingPayment
    // y así los evitamos en esta lista. 

    const formattedDate = (itemDate) => {

        let newDate = new Date(itemDate)
        let newDateToString = newDate.toString().slice(0, 15)
        // console.log(newDateToString)
        return newDateToString

    }

    return (
        <Grid container spacing={0}>

            {sellerCartItems.filter((item) => item.cartItemStatus !== "Pending Payment").map((item) => (

                <Grid item xs={12} key={item.id} mb={1}>

                    <Accordion sx={{ boxShadow: 'none', border: "1px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", pr: 3 }}>

                                <Box sx={{ display: 'flex', width: '80%' }}>
                                    <Typography variant='subtitle2' color='primary'>Order Id: <strong>000{item.orderId < 10 ? `0${item.orderId}` : item.orderId}</strong> &nbsp; </Typography>
                                    <Typography variant='subtitle2' color='primary'>- {item.product_SellerCompany.product.name.length >= 26 ? item.product_SellerCompany.product.name.slice(0, 26) + "..." : item.product_SellerCompany.product.name} <strong></strong> &nbsp; </Typography>
                                </Box>
                                <Box sx={{ display: 'flex' }} mr={0} minWidth={170}>
                                    <Typography variant='subtitle2' color='primary'>Invoiced Price: &nbsp; </Typography>
                                    <Typography variant='tab' color='primary'><strong>{item.product_SellerCompany.priceAfterSale * item.quantity} €</strong></Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ borderTop: '1px solid rgba(0, 0, 0, .125)' }}>
                            <Grid container spacing={1} p={3}>

                                <Grid item xs={12} md={12}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>Purchase Date: <strong>{item.cartItemStatus === "Pending Payment" ? "Pending..."
                                        : formattedDate(item.order.createdAt)}</strong>
                                    </Typography>
                                </Grid>
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
                                    <Typography variant="subtitle2" color="primary" gutterBottom>Customer: <strong>{item.order.user.username}</strong></Typography>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Typography variant="subtitle2" color="primary" gutterBottom>Email: <strong>{item.order.user.email}</strong></Typography>
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

export default SellerOrderAccordionAnalytics


