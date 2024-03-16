import React from 'react';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Asume que `cartItemsCount` es la cantidad de ítems en el carrito,
// que obtendrías de tu contexto o estado global.

const ShoppingCartButton = ({shoppingCart }) => {
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
                color="warning" // Color del badge, puede ser 'primary', 'secondary', 'error', 'info', 'success', 'warning'
                sx={{
                    '& .MuiBadge-badge': {
                        top: 2, // Ajusta la posición vertical del badge
                        right: 4, // Ajusta la posición horizontal del badge
                        border: `2px solid white`, // Agrega un borde al badge para separarlo del icono si es necesario
                        padding: '0 4px', // Ajusta el padding del badge para cambiar su tamaño
                    },
                }}
            >
                <ShoppingCartIcon sx={{ fontSize: 35 }} />
            </Badge>
        </IconButton>
    );
};

export default ShoppingCartButton;