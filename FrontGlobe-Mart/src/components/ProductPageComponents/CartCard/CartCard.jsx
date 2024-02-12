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

export default function CartCard({ quantityAv, seller }) {


    return (

        <Card sx={{
            minWidth: "100%",
            height: "85%",
            display: "flex",
            flexDirection: "column",
            alignContent: 'center',
            justifyContent: "space-between",
            alignItems: "center",
            pb: 2.5,
            pt: 2.5
        }}>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: 'center',
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                height: "50%",
                width: "100%"

            }}
            >
                {/* <Typography>0.00 €</Typography> */}
                <QuantitySelector></QuantitySelector>
                <Typography sx={{ color: "#2E7D32", fontWeight: "bold" }}>In Stock</Typography>
                {(quantityAv <= 3) && <Typography variant="caption" sx={{ color: "red", }}>Only {quantityAv} available</Typography>}
                <Typography sx={{ fontSize: "0.9rem", color: "#1976D2", }}>Sold by: <strong>{seller}</strong> </Typography>
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




