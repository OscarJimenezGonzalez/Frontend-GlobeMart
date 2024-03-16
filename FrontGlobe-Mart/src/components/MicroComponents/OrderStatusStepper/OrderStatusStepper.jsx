import * as React from 'react';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RestoreIcon from '@mui/icons-material/Restore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const joyTheme = {
    palette: {
        type: 'light',
        primary: {
            main: '#6E665F',
            // fixed: '#74F8E5',
            // fixedVariant: '#005048'
        },
        secondary: {
            main: '#F9AB19',
            // fixedDim: '#FABD00',
            // fixedVariant: '#5B4300'
        },
        warning: {
            main: '#FF6000',
            onContainer: '#001E31'
        },
        background: {
            default: '#FFFFFF'
            // default: '#F0EDE5'

        },
        text: {
            primary: '#00201C',
        }
    }
}

const stepsInfo = [
    { label: 'Pending Payment', icon: <CreditCardRoundedIcon /> },
    { label: 'Awaiting Shipment', icon: <RestoreIcon /> },
    { label: 'Shipped', icon: <FlightTakeoffIcon /> },
    { label: 'On Delivery', icon: <LocalShippingRoundedIcon /> },
    { label: 'Completed', icon: <CheckCircleRoundedIcon /> },
];

const stepIconStyles = {
    // ...otros estilos
    position: 'relative', // Esto permite ajustar la posición del ícono respecto a su contenedor normal
    top: '50%', // Empuja el ícono a la mitad de la altura de su contenedor
    transform: 'translateY(-50%)', // Esto mueve el ícono hacia atrás la mitad de su propia altura, centrando verticalmente
    // ...otros estilos
};

export default function OrderStatusStepper({ isPayed, orderStatus }) {
    return (
        <Box sx={{ width: '50%', ml: 0, p: 0 }}>
            <Stepper activeStep={2} alternativeLabel
            
            
            >
                {stepsInfo.map((step) => (
                    <Step key={step.label} >

                        <StepLabel

                            StepIconProps={{
                                sx: stepIconStyles
                            }}
                            icon={<Box sx={{
                                backgroundColor: 'primary.main', // Tu color primario
                                borderRadius: '50%', // Esto hará que el contenedor sea redondo
                                width: 40, // Tamaño del contenedor
                                height: 40, // Tamaño del contenedor
                                display: 'flex',
                                justifyContent: 'center', // Centra horizontalmente
                                alignItems: 'center', // Centra verticalmente
                                alignContent: 'center',
                                color: 'white',
                            }}>

                                {step.icon}

                            </Box>}

                        >
                            {/* <StepConnector></StepConnector> */}

                            {/* {!isPayed && "Pending Payment"} */}
                            {orderStatus === step.label && step.label}

                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box >
    );
}