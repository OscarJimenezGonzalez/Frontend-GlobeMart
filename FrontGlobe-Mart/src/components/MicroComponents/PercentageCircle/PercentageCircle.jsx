import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function PercentageCircle({ sellerCompanyData }) {

    const sellerCompanyRatingPercentage = parseFloat((sellerCompanyData.customerRating) / 5) * 100;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100px',
                height: '100px',
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                position: 'relative',
            }}
        >
            <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
                {sellerCompanyData && sellerCompanyRatingPercentage} %
            </Typography>
        </Box>
    );
} 