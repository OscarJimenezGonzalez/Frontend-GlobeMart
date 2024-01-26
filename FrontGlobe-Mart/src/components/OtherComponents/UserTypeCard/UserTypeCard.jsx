import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function UserTypeCard({ handleCustomerClick, handleSellerClick }) {

    const handleCustomerFormClick = () => {

        handleCustomerClick()

    }

    const handleSellerFormClick = () => {

        handleSellerClick()

    }

    return (
        <Card sx={{ minWidth: 275, minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', padding: '40px' }} >
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">
                    Select the type of account you want to create:
                </Typography>

            </CardContent>
            <CardActions>
                <Button onClick={handleCustomerFormClick} size="small">Customer Account</Button>
                <Button onClick={handleSellerFormClick} size="small">Seller Account</Button>
            </CardActions>
        </Card>
    );
}