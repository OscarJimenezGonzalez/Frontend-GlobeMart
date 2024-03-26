import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TabSelectorStandard from '../../MicroComponents/TabSelectorStandard/TabSelectorStandard';
import SellerOrderAccordion from '../SellerOrderAccordion/SellerOrderAccordion';

function SellerOrdersStructure({ sellerCartItems, handleCartItemStatus }) {



    const renderAllOrders = () => {

        return <SellerOrderAccordion
            sellerCartItems={sellerCartItems}
            handleCartItemStatus={handleCartItemStatus}
        />

    }

    const renderPendingOrders = () => {

        return <SellerOrderAccordion

            sellerCartItems={sellerCartItems.filter((item) => item.cartItemStatus !== "Delivered")}
            handleCartItemStatus={handleCartItemStatus}

        ></SellerOrderAccordion>

    }

    const renderCompletedOrders = () => {

        return <SellerOrderAccordion

            sellerCartItems={sellerCartItems.filter((item) => item.cartItemStatus === "Delivered")}
            handleCartItemStatus={handleCartItemStatus}

        ></SellerOrderAccordion>

    }

    return (

        <Box sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2, p: 5 }}>

            <Typography m={1} variant='h5' color="primary">Customers Orders </Typography>

            <TabSelectorStandard itemList={[

                {
                    key: 1,
                    label: "All Orders",
                    rendering: renderAllOrders()
                },
                {
                    key: 2,
                    label: "Pending Orders",
                    rendering: renderPendingOrders()
                },
                {
                    key: 3,
                    label: "Completed",
                    rendering: renderCompletedOrders()
                },

            ]}

            />

        </Box>
    );
}
export default SellerOrdersStructure