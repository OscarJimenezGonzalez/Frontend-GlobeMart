import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonColor() {
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
            sx={{ '& > *': { maxWidth: 70, mr: 1 }, textTransform: 'lowercase' }}
        >
            <ToggleButton value="Red">Red</ToggleButton>
            <ToggleButton value="Blue">Blue</ToggleButton>
            <ToggleButton value="Gray">Gray</ToggleButton>
            <ToggleButton value="Black">Black</ToggleButton>

        </ToggleButtonGroup>
    );
}
