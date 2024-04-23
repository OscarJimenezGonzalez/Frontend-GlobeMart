import React, { useState } from 'react';
import {
    Card, CardContent, Typography, CardActions, Button,
    Box, IconButton, Grid, Chip
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OrderDetailsDropdown from './OrderDetailsDropdown';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';

const CustomerOrderCard = ({ cartItemList, orderId, orderStatus, isPayed,
    totalPrice, createdAt, shippingAddress, paymentMethod }) => {

    const [dropDownIcon, setDropDownIcon] = useState(false)

    const renderImagesOfProducts = () => {

        if (cartItemList) {

            return (

                cartItemList.map((cartItem) => {

                    return (

                        <Box key={cartItem.id} sx={{ mr: 2 }}>
                            <img src={cartItem.product_SellerCompany.product.imageURL} alt="Product" style={{ width: 100, height: 100, borderRadius: '4px', objectFit: 'cover', mr: 2 }} />
                        </Box>

                    )

                })
            )

        }
    }


    const orderStatusColor = () => {


        if (orderStatus === "Completed") {

            // return '#D1D1D1'
            return '#8FC784'

        }
        if (orderStatus === "In Progress") {

            return '#D1D1D1'

        }
        if (orderStatus === "Pending Payment") {

            return "warning.main"
        }
        else {

            return "#D1D1D1"
        }


    }

    return (

        <Card variant="outlined" sx={{ backgroundColor: "white", maxWidth: "90%", mt: 3, ml: 5, mb: 2, p: 2 }}>
            {/* <Box variant="outlined" sx={{ backgroundColor: "white", maxWidth: "90%", mt: 3, ml: 5, mb: 2, p: 2 }}> */}
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>


                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                alignContent: "center",
                                justifyContent: "center",
                                borderRadius: '4px',
                                px: 1.5,
                                py: 0.5,
                                border: "1px solid #F1F1F3",
                                backgroundColor: orderStatusColor(),
                                minWidth: "150px"

                            }}

                        >
                            <Typography variant="subtitle2" color={orderStatus === "Completed" ? 'white' : 'white'}>{orderStatus}</Typography>
                        </Box>

                        {orderStatus === "On Delivery" &&
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, borderRadius: '20px', p: 1, border: "1px solid gray" }}>
                                <LocalShippingRoundedIcon sx={{ fontSize: 17, color: 'warning.main' }} />
                            </Box>
                        }

                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"end"} gap={1}>
                        <Typography sx={{ mr: 1 }} variant="body2" color="textSecondary">
                            Order created on the: &nbsp;&nbsp;<strong>{createdAt}</strong>
                        </Typography>
                        <Typography sx={{ mr: 1 }} variant="body2" color="textSecondary">
                            Order number:  &nbsp;&nbsp;00000000000.0{orderId}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'start', overflow: 'auto', mt: 3 }}>
                    {renderImagesOfProducts()}
                </Box>

            </CardContent>
            <CardActions sx={{
                width: '100%',
                display: 'flex',
                flexDirection: "row",
                gap: 3,
                alignItems: 'end',
                alignContent: 'end',
                justifyContent: 'space-between',
                padding: 2
            }}>

                <Button
                    endIcon={dropDownIcon ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                    onClick={() => setDropDownIcon(!dropDownIcon)}
                // variant='outlined'
                // size="small"
                >
                    Order Details
                </Button>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3
                }}  >
                    <Typography sx={{ mr: 1 }} fontWeight={"bold"} color={"primary"} variant="subtitle1">
                        Total: {totalPrice} €
                    </Typography>

                    {isPayed ?
                        <Button
                            startIcon={<ShoppingCartOutlinedIcon />}
                            variant="contained"
                            color="secondary"
                            sx={{ mr: 1 }}
                        >
                            Buy again
                        </Button> : <Button
                            startIcon={<ShoppingCartOutlinedIcon />}
                            variant="contained"
                            color="secondary"
                            sx={{ mr: 1 }}
                        >
                            Pay Order
                        </Button>}
                </Box>
            </CardActions>

            <OrderDetailsDropdown

                cartItemList={cartItemList}
                isOpen={dropDownIcon}
                shippingAddress={shippingAddress}
                orderStatus={orderStatus}
                isPayed={isPayed}
                paymentMethod={paymentMethod}

            />

            {/* </Box > */}

        </Card >

    );

};


export default CustomerOrderCard;

