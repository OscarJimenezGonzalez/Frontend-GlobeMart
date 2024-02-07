import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonSize() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{ '& > *': { width: 50, mr: 1} }}
        >
            <ToggleButton value="S">S</ToggleButton>
            <ToggleButton value="M">M</ToggleButton>
            <ToggleButton value="L">L</ToggleButton>
            <ToggleButton value="XL">XL</ToggleButton>

        </ToggleButtonGroup>
    );
}
