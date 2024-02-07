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

export default function ProductImage({ productImg }) {

    return (
        <Card sx={{ width: "35%", height: "auto", maxHeight: 435, backgroundColor: "#f5f5f5" }}>
            <CardMedia
                component="img"
                alt="Product Image"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                image={productImg}
            />
        </Card>

    );

}




