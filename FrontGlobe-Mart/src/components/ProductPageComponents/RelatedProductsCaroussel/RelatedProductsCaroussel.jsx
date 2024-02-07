import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, flexbox } from '@mui/system';

const images = [
    {
        id: 1,
        // label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        id: 2,
        // label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        id: 3,
        // label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        id: 4,
        // label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        id: 5,
        // label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
    },
    {
        id: 6,
        // label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        id: 7,
        // label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        id: 8,
        // label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];



export default function RelatedProductsCarousel() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "row"}}>
            <IconButton onClick={handleBack} disabled={activeStep === 0}>
                <ArrowBackIosIcon />
            </IconButton>
            <Grid container spacing={2} justifyContent="center">
                {images.slice(activeStep, activeStep + 4).map((item, index) => (
                    <Grid item key={item.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.imgPath}
                                alt={item.label}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.label}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                ))}
            </Grid>
            <IconButton onClick={handleNext} disabled={activeStep === images.length - 4}>
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};
