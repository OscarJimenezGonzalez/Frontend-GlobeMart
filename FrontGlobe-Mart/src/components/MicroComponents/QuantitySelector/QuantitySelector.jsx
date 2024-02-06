import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
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
                inputProps={{ min: 1, style: { textAlign: 'center' } }}
                value={quantity}
                onChange={handleChange}
                sx={{ maxWidth: '50px' }}
            />
            <IconButton onClick={handleIncrement} size="small">
                <AddIcon fontSize="small" />
            </IconButton>
        </Box>
    );
}