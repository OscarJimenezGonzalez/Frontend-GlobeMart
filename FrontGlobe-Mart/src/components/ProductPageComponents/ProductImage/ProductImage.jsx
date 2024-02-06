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
import ProductImageCaroussel from '../ProductImageCaroussel/ProductImageCaroussel';


export default function ProductImage() {

    return (

        <Card sx={{ minWidth: "35%", minHeight: 400 }}>
            {/* <CardMedia
                component="img"
                alt="img"
                height="160px"
                width='100%'
                style={{ objectFit: 'cover' }}
                image={productImg}
            /> */}

            <ProductImageCaroussel></ProductImageCaroussel>

        </Card >

    );

}




