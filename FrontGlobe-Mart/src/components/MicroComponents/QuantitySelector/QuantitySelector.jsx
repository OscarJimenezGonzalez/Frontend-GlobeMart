import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function QuantitySelector({ quantityAv, onQuantityChange }) {

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (quantityAv <= 0) {
            setQuantity(0)
        }

        // Actualiza al componente padre el valor de quantity
        onQuantityChange(quantity)
        // Actualiza al componente padre el valor de quantity

    }, [quantity, quantityAv, onQuantityChange])

    const handleIncrement = () => {

        if (quantity === quantityAv) {
            setQuantity(quantityAv)
        } else {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value >= 1 ? value : 1);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleDecrement} size="small">
                <RemoveIcon fontSize="small" />
            </IconButton>
            <TextField

                size="small"
                inputProps={{
                    style: { textAlign: 'center', fontSize: 12 }
                }}
                value={quantity}
                onChange={handleChange}
                sx={{ maxWidth: '45px', }}
            />
            <IconButton onClick={handleIncrement} size="small">
                <AddIcon fontSize="small" />
            </IconButton>
        </Box>
    );
}