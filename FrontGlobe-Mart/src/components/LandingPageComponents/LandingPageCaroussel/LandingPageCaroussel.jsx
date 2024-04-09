import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SaleBG from '../../../assets/images/landingPage/SaleBG.jpeg'
import CyberMonday from '../../../assets/images/landingPage/CyberMonday.jpeg'
import mobileBackG from '../../../assets/images/landingPage/mobileBackG.jpeg'
import flashSalesBG from '../../../assets/images/landingPage/flashSaleBG.jpeg'
import BlackFBG from '../../../assets/images/landingPage/BlackFBG.jpeg'
import halloweenBG from '../../../assets/images/landingPage/HalloweenBG.jpeg'
import BrightBG from '../../../assets/images/landingPage/BrightBG.jpeg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [

    {
        label: 'SaleBackGround',
        imgPath: SaleBG
    },
    {
        label: 'HalloweenBG',
        imgPath: halloweenBG,
    },
    // {
    //     label: 'CyberMonday',
    //     imgPath: CyberMonday,
    // },
    // {
    //     label: 'Goč, Serbia',
    //     imgPath:
    //         mobileBackG,
    // },
    // {
    //     label: 'flashSales',
    //     imgPath:
    //         flashSalesBG,
    // },
    {
        label: 'BlackFBG',
        imgPath:
            BlackFBG,
    },
    // {
    //     label: 'BrightBG',
    //     imgPath:
    //         BrightBG,
    // },

];

function LandingPageCaroussel({ imagesProp }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

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
