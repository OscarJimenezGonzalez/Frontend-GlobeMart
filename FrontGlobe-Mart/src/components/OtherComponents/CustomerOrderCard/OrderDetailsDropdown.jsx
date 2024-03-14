import React, { useState } from 'react';
import {
    Card, CardContent, Typography, CardActions, Button,
    Box, IconButton, Grid, Chip
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';


const OrderDetailsDropdown = ({ cartItemList, isOpen }) => {

    if (!isOpen) return null;

    return (
        <Box sx={{
            backgroundColor: 'white', 
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', 
            borderRadius: '4px', 
            p: 2, 
            mt: 1, 
            mx: 5, 
        }}>
            <Typography variant="h6" color="secondary" gutterBottom sx={{ mb: 4 }}>
                Items in Your Order
            </Typography>
            {cartItemList.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <img src={item.product_SellerCompany.product.imageURL} alt="Product" style={{ width: 50, height: 50, borderRadius: '4px', objectFit: 'cover', mr: 2 }} />
                    <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle2">
                            {item.product_SellerCompany.product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Qty: {item.quantity} &middot; Price: {item.product_SellerCompany
                                .price} €
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Sold By : <Link to={`/sellerPage/${item.product_SellerCompany.sellerCompany.id}`}>{item.product_SellerCompany.sellerCompany.name}</Link>
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default OrderDetailsDropdown;