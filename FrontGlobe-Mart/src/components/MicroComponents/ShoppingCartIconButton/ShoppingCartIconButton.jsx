import React from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ShoppingCartButton = ({ shoppingCart }) => {
    return (
        <IconButton
            size="large"
            edge="end"
            color="primary"
            aria-label="shopping cart"
            sx={{ mr: 1, position: 'relative' }}

        >
            <Badge
                badgeContent={shoppingCart.length} // La cantidad de ítems en el carrito
                color="warning" 
                sx={{
                    '& .MuiBadge-badge': {
                        top: 2, 
                        right: 4, 
                        border: `2px solid white`, // Agrega un borde al badge para separarlo del icono si es necesario
                        padding: '0 4px', 
                    },
                }}
            >
                <ShoppingCartIcon sx={{ fontSize: 35 }} />
            </Badge>
        </IconButton>
    );
};

export default ShoppingCartButton;