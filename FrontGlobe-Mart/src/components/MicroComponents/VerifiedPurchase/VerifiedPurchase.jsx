import React from 'react';
import { Paper, Typography, Avatar, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const VerifiedPurchase = ({ name, date }) => {
    return (
        <Box sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            // width: 'fit-content',
            borderRadius: 2
        }}
            elevation={3}>

            <Avatar sx={{ bgcolor: 'green', mr: 2 }}>{name[0].toUpperCase()}</Avatar>
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {name.length > 10 ? name.slice(0, 15) + '...' : name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {date}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: 'green', fontSize: '1rem', mr: 0.5 }} />
                    <Typography variant="body2" sx={{ color: 'green' }}>
                        Verified Purchase
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default VerifiedPurchase;