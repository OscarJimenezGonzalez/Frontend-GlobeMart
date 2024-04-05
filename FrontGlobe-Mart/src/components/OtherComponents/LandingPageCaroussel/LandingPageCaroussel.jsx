import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: "https://www.smartrmail.com/blog/wp-content/uploads/2023/10/Banner-for-blog.png",
    },
    {
        label: 'Bird',
        imgPath: "https://img.freepik.com/premium-vector/black-friday-ad-panoramic-banner-with-3d-rocket-sale-countdown-wide-wallpaper-with-discount_624052-1592.jpg?w=2000"
    },
    // {
    //     label: 'Bali, Indonesia',
    //     imgPath:
    //         'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    // },
    // {
    //     label: 'Goč, Serbia',
    //     imgPath:
    //         'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    // },
];

function LandingPageCaroussel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: "100%", height: "100%", flexGrow: 1 }}>

            <AutoPlaySwipeableViews
                position="relative"
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    borderRadius: 3,
                                    height: "400px",
                                    width: '100%',
                                    display: 'block',
                                    objectFit: 'cover',
                                    overflow: 'hidden',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}

            </AutoPlaySwipeableViews>
       
        </Box>
    );
}

export default LandingPageCaroussel;
