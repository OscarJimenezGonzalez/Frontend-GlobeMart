import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';

export default function ShippingInfoCard() {
    return (
        <Card sx={{
            minWidth: "100%",
            maxHeight: 200,
            display: "flex",
            flexDirection: "column",
            alignContent: 'center',
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            // mt: 6,
            backgroundColor: '#F5F5F5',
        }}>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: 'center',
                justifyContent: "center",
                alignItems: "start",
                px: 2,
                gap: 1,
                height: "50%",
                width: "100%",
                // '& > *': { fontSize: '10px' },

            }}
            >

                <Typography sx={{ fontSize: '11px' }}>Free Shipping</Typography>
                <Typography sx={{ fontSize: '11px' }}>Free Returns</Typography>
                <Typography sx={{ fontSize: '11px' }}>Fast Delivery 24/48 hours</Typography>

                <Divider sx={{ alignSelf: 'center', height: '1px', width: "75%" }} />

                <Typography sx={{ fontSize: '11px' }}>Delivered By: DHL</Typography>


            </Box>


            <Box sx={{

                display: "flex",
                flexDirection: "column",
                alignContent: 'center',
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                height: "50%",
                width: "100%",


            }}
            >



            </Box>

        </Card >
    )
}

