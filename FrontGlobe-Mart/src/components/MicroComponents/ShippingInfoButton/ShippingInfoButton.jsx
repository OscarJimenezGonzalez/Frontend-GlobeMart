import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { mainContext } from '../../../contexts/mainContext';

function ShippingInfoButton() {

    const { mainData, setMainData } = useContext(mainContext)
    const shippingClick = mainData.shippingInfoClick

    const handleButtonClick = () => {

        setMainData(prevData => ({
            ...prevData,
            shippingInfoClick: !shippingClick
        }))

    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5
        }}>
            <Typography sx={{ fontSize: "0.7rem" }}>shipping info</Typography>
            <IconButton
                onClick={handleButtonClick}
                sx={{
                    maxWidth: "40px",
                    backgroundColor: shippingClick ? "primary.main" : "grey.300",
                    color: "primary.contrastText",
                    '&:hover': {
                        backgroundColor: shippingClick ? "primary.dark" : "grey.500",
                    }
                }} >
                {shippingClick ? <LocalShippingIcon sx={{ color: "white" }} /> : <LocalShippingIcon />}
            </IconButton>
        </Box >
    )
}

export default ShippingInfoButton