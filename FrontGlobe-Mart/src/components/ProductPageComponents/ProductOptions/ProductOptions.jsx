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
import Divider from '@mui/material/Divider';
import ToggleButtonSize from '../../MicroComponents/ToggleButtonSize/ToggleButtonSize';
import ToggleButtonColor from '../../MicroComponents/ToggleButtonColor/ToggleButtonColor';
import ToggleButtonSizeShoe from '../../MicroComponents/ToggleButtonSizeShoe/ToggleButtonSizeShoe';

export default function ProductOptions({ hasShoeSize, hasClothingSize, hasColorOption, sale, name, brand, model, price, id, salePerc }) {

    return (

        <Box sx={{ minWidth: "30%", minHeight: 450, display: "flex", flexDirection: "column", mx: 5 }}>

            <Box>
                <Typography variant='h6' sx={{ mb: 1, fontWeight: "bold", color: "#1976D2" }}>{name}</Typography>
                <Typography sx={{ mb: 1, color: "#1976D2" }}>Model: {model}</Typography>
                <Typography sx={{ mb: 1, color: "#1976D2" }}>Brand: <strong>{brand}</strong>  </Typography>
                <Typography sx={{ color: "gray" }}>Ref: 000000000000000000{id}</Typography>
            </Box>

            <Divider sx={{ my: 3 }}></Divider>

            <Box sx={{ '& > *': { mb: 1, color: "#1976D2" } }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3, color: "black" }}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        {sale && <Typography sx={{ color: "red" }}>Last Price:&nbsp;</Typography>}
                        {sale && <Typography sx={{ textDecoration: 'line-through', color: "red" }}>{price}€ </Typography>}
                    </Box>
                    {sale && <Typography sx={{ color: "green" }}>Save: {Math.round(price * (salePerc * 0.01))} € </Typography>}

                </Box>
                {sale && <Typography sx={{ fontSize: '18px', fontWeight: 'bold', mb: 1, color: "#2E7D32" }}>Price: {(price - Math.round(price * (salePerc * 0.01))).toFixed(0)} € </Typography>}
                {!sale && <Typography sx={{ fontSize: '18px', fontWeight: 'bold', mb: 1, color: "#2E7D32" }}>Price: {price} € </Typography>}

            </Box>

            <Box sx={{ minHeight: 200 }}>

            

                {(hasShoeSize || hasClothingSize) &&
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ mb: 2, color: "#1976D2" }}>Size:</Typography>
                        {hasClothingSize && <ToggleButtonSize />}
                        {hasShoeSize && <ToggleButtonSizeShoe />}
                    </Box>
                }
                {hasColorOption &&
                    <Box>
                        <Typography sx={{ mb: 2, color: "#1976D2" }}>Color:</Typography>
                        <ToggleButtonColor />
                    </Box>
                }




            </Box>

        </Box >

    );

}




