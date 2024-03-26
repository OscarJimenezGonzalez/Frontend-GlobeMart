import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularProg() {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="primary" />
            {/* <CircularProgress color="success" />
            <CircularProgress color="inherit" /> */}
        </Stack>
    );
}