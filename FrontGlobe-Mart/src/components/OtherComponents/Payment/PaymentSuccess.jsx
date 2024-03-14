import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import the check circle icon



const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Payment Successful!
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
                Your payment has been processed successfully.
            </Typography>
            <CheckCircleIcon sx={{ fontSize: 60, color: 'green', mb: 3 }} /> {/* Green check circle icon */}

            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
            >
                Back to Home
            </Button>
            {/* Aquí puedes agregar más botones o enlaces según sea necesario */}
        </Box>
    );
}

export default PaymentSuccess;