import React from 'react';
import { IconButton, Badge } from '@mui/material';

const CustomersOrderBadgeIcon = ({ awaitingOrders }) => {
    return (
        <IconButton
            size="small"
            edge="end"
            color="primary"
            aria-label="shopping cart"
            sx={{ mr: 1, position: 'relative' }}

        >
            <Badge
                badgeContent={awaitingOrders}
                color="warning"
                sx={{
                    '& .MuiBadge-badge': {
                        top: 0,
                        bottom: 2,
                        right: 0,
                        left: 0,
                        border: `1px solid white`,
                        padding: '0 4px',
                    },
                }}
            >
            </Badge>
        </IconButton>
    );
};

export default CustomersOrderBadgeIcon;