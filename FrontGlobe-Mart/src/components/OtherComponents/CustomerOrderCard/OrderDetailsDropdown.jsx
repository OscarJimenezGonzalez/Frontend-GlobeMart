import React, { useEffect, useState } from 'react';
import {
    Card, CardContent, Typography, CardActions, Button,
    Box, IconButton, Grid, Chip
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import OrderStatusStepper from '../../MicroComponents/OrderStatusStepper/OrderStatusStepper';
import PaymentIcon from '@mui/icons-material/Payment';
import OrderStatusStepperSimple from '../../MicroComponents/OrderStatusStepper/OrderStatusStepperSimple';
import VerticalLinearStepper from '../../MicroComponents/OrderStatusStepper/OrderStatusVerticalStepper';
import CreditCardIcon from '@mui/icons-material/CreditCard';



const OrderDetailsDropdown = ({ cartItemList, isOpen, shippingAddress, orderStatus, isPayed, paymentMethod }) => {

    if (!isOpen) return null;

    const cartItemStatusColor = (status) => {

        if (status === "Pending Payment") {

            return "rgba(255, 96, 0, 0.6)"

        }

        if (status === "Awaiting Shipment") {

            return "rgba(189, 189, 189, 0.7)"
        }

        if (status === "Shipped" || status === "On Delivery") {

            return 'rgba(33, 150, 243, 0.5)'

        }
        if (status === "Delivered") {

            return 'rgba(96, 175, 80, 0.7)'

        }

    }

    console.log("CartItemList", cartItemList)

    return (
        <Box sx={{
            backgroundColor: 'white',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
            p: 3,
            pl: 6,
            mt: 1,
            m: 3,

        }}>
            <Typography variant="h6" color="secondary" gutterBottom sx={{ mt: 1, mb: 4 }}>
                Order Status
            </Typography>

            <OrderStatusStepperSimple
                orderStatus={orderStatus}
            ></OrderStatusStepperSimple>

            {/* <VerticalLinearStepper></VerticalLinearStepper> */}

            <Typography variant="h6" color="secondary" gutterBottom sx={{ mb: 4, mt: 3 }}>
                Items in Your Order
            </Typography>



            {cartItemList.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, ml: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0, ml: 0, }}>
                        <img src={item.product_SellerCompany.product.imageURL} alt="Product" style={{ width: 50, height: 50, borderRadius: '4px', objectFit: 'cover', mr: 2 }} />
                        <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle2">
                                {item.product_SellerCompany.product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Qty: {item.quantity} &middot; Price: {item.product_SellerCompany.price} €
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Sold By : <Link to={`/sellerPage/${item.product_SellerCompany.sellerCompany.id}`}>{item.product_SellerCompany.sellerCompany.name}</Link>
                            </Typography>
                        </Box>
                    </Box>
                    <Box key={item.id} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: "center",
                        minWidth: "200px",
                        mb: 2,
                        ml: 0.5,
                        p: 1,
                        px: 5,
                        backgroundColor: cartItemStatusColor(item.cartItemStatus),
                        borderRadius: '4px'
                    }}>

                        <Typography variant="subtitle2" color={"white"} sx={{ fontStyle: '' }}>
                            {item.cartItemStatus}
                        </Typography>
                    </Box>
                </Box>
            ))}

            <Typography variant="h6" color="secondary" gutterBottom sx={{ mb: 4, mt: 4 }}>
                Shipping Address
            </Typography>
            <Typography variant="subtitle2" fontStyle={'italic'} color="black" gutterBottom sx={{ ml: 0, mb: 4, mt: 4 }}>
                {shippingAddress}
            </Typography>
            <Typography variant="h6" color="secondary" gutterBottom sx={{ mb: 4, mt: 4 }}>
                Payment Method
            </Typography>

            {isPayed ? <Box sx={{ display: 'flex', alignItems: 'center', ml: 0, mt: 4, mb: 4 }}>

                {
                    // paymentMethod === "Credit Card" ?

                    <Box display={"flex"}>
                        {/* <Typography variant="subtitle2" color="black" gutterBottom>
                                {paymentMethod === "Credit Card" ? "Credit / Debit Card : " : paymentMethod}
                            </Typography>
                            <Box>
                                <CreditCardIcon color="action" sx={{ ml: 1 }} />
                            </Box> */}
                        {/* <Typography sx={{ ml: 1 }} variant="subtitle1" color="primary" gutterBottom>
                                {paymentMethod === "Credit Card" ? "  **** **** **** 4242 " : null}
                            </Typography> */}

                        <Typography variant="subtitle2" color="primary" gutterBottom>

                            Credit Card:   <strong>**** **** **** 4242</strong>

                        </Typography>
                    </Box>

                    // :

                    // <Typography variant="subtitle2" color="black" gutterBottom>
                    //     {paymentMethod}
                    // </Typography>

                }

            </Box> : <Typography mb={4} variant='subtitle2' color="black">Pending ...</Typography>}

        </Box>
    );
};

export default OrderDetailsDropdown;