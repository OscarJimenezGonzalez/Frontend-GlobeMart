import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonSizeShoe() {
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
            sx={{ '& > *': { width: 40, height: 41, mb: 1 } }}
        >
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="6">6</ToggleButton>
            <ToggleButton value="7">7</ToggleButton>
            <ToggleButton value="8">8</ToggleButton>
            <ToggleButton value="9">9</ToggleButton>
            <ToggleButton value="10">10</ToggleButton>
            <ToggleButton value="11">11</ToggleButton>

        </ToggleButtonGroup>
    );
}
