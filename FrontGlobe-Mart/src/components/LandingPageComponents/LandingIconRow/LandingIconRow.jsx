import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";

function LandingIconRow() {
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}   >
                <Box sx={{ borderRadius: 10, display: 'flex', flexDirection: "column", gap: 3, alignItems: 'center', justifyContent: "center", minHeight: 250 }}>
                    <TbTruckDelivery fontSize={100} color='primary.fixed' />
                    <Typography variant='h6' color="primary.fixed">24 / 48h Delivery</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}  >
                <Box sx={{ borderRadius: 10, display: 'flex', flexDirection: "column", gap: 4, alignContent: 'center', alignItems: 'center', justifyContent: "center", p: 2, minHeight: 250 }}>
                    <RiSecurePaymentLine fontSize={100} color='primary.fixed' />
                    <Typography variant='h6' color="primary.fixed">Safe Payment</Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}  >
                <Box sx={{ borderRadius: 10, display: 'flex', flexDirection: "column", gap: 3, alignItems: 'center', justifyContent: "center", p: 2, minHeight: 250 }}>
                    <TbTruckReturn fontSize={100} color='primary.fixed' />
                    <Typography variant='h6' color="primary.fixed">Free & Safe Returns</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}   >
                <Box sx={{ borderRadius: 10, display: 'flex', flexDirection: "column", gap: 3, alignItems: 'center', justifyContent: "center", p: 2, minHeight: 250 }}>
                    <MdOutlinePeopleAlt fontSize={100} color='primary.fixed' />
                    <Typography variant='h6' color="primary.fixed">Customers Opinion</Typography>
                </Box>
            </Grid>
        </>
    )
}

export default LandingIconRow