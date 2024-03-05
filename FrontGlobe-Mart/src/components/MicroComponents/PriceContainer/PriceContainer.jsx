import React from 'react';
import { Box, Typography, Tooltip, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const PriceContainer = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#FF6000',
            mb: '20px',
        }}>
            <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
                42,
            </Typography>
            <Typography variant="h6" component="span" sx={{ verticalAlign: 'super' }}>
                91€
            </Typography>
            <Typography>  </Typography>
            <Box sx={{
                ml: 1,
                color: 'primary.main',
                fontSize: '0.8rem',
            }}>
                PVP
            </Box>
            <Typography variant="body2" component="span" sx={{ textDecoration: 'line-through', ml: 0.5 }}>
                49,99€
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FF6000',
                borderRadius: '4px',
                padding: '0px 4px',
                marginLeft: '8px',
                color: 'white',
            }}>
                <Typography variant="body2" component="span">
                    -14%
                </Typography>
                <Tooltip title="Discount Information">
                    <IconButton size="small" sx={{ color: 'white' }}>
                        <InfoOutlinedIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box >
    );
};

export default PriceContainer;