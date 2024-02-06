import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { width } from '@mui/system';
import QuantitySelector from '../../MicroComponents/QuantitySelector/QuantitySelector';
import Divider from '@mui/material/Divider';
// import { Divider } from '@mui/material';

export default function CartCard() {


    return (

        <Card sx={{
            minWidth: "30%",
            maxHeight: 400,
            display: "flex",
            flexDirection: "column",
            alignContent: 'center',
            justifyContent: "space-between",
            alignItems: "center",
            py: 2
        }}>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: 'center',
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                height: "50%",
                width: "100%"

            }}
            >
                {/* <Typography>0.00 €</Typography> */}
                <QuantitySelector></QuantitySelector>
                <Typography sx={{ color: "#2E7D32", fontWeight: "bold" }}>In Stock</Typography>
                <Typography variant="caption" sx={{ color: "red", }}>Only 2 available</Typography>
                <Typography sx={{ color: "#1976D2", }}>Sold by: <strong>Globe-Mart</strong> </Typography>
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

                <Button variant="contained" color="success" sx={{ width: "68%", height: "30%", }}>Add to Cart</Button>
                <Divider sx={{ alignSelf: 'center', height: '1px', width: "75%" }} />
                <Button variant="outlined" sx={{ width: "68%", height: "30%", textTransform: 'lowercase' }}>Add to wish list</Button>


            </Box>

        </Card >

    );

}




