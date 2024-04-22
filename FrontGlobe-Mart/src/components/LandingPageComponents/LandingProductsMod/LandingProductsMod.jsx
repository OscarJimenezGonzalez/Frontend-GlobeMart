import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system';
import { useCustomMediaQueries } from '../../../auxStr/customMediaQueries';
import ProductCard from '../../OtherComponents/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';
import { getReviewsFromProduct } from '../../../services/productReviewService';


export default function LandingProductsMod({ productList }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const [widthController, setWidthController] = useState(4)
    const [opinionNum, setOpinionNum] = useState(0)
    const { isLargeScreen, isMediumLargeScreen, isMediumScreen, isSmallScreen, isTinyScreen } = useCustomMediaQueries();
    const navigate = useNavigate();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // console.log(productList, "LISTA ")

    useEffect(() => {

        if (isLargeScreen) {
            setWidthController(4)
        } else if (isMediumScreen) {
            setWidthController(4)
        } else if (isSmallScreen) {
            setWidthController(4)
        } else if (isTinyScreen) {
            setWidthController(3)
        } else {
            setWidthController(5)
        }

    }, [isLargeScreen, isMediumLargeScreen, isMediumScreen, isSmallScreen, isTinyScreen])

    return (
        <Box sx={{
            height: 400,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            overflowX: 'auto',
            // px: 4
        }}>
            <IconButton onClick={handleBack} disabled={activeStep === 0}

                sx={{
                    border: "1px solid #E7E7E7",
                    borderRadius: 2,
                    backgroundColor: 'white',
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    py: '30px',
                    '&:hover': {

                        color: "orange",
                        opacity: [0.9, 0.8, 0.7],

                    },

                }}

            >
                <ArrowBackIosIcon sx={{ fontSize: '25px', "&:hover": { color: "orange", opacity: [0.9, 0.8, 0.7] } }} />
            </IconButton>
            <Grid container spacing={2}>
                <Box display={"flex"} justifyContent={"center"} gap={6} px={8}>
                    {productList.slice(activeStep, activeStep + widthController).map((item, index) =>
                    (
                        <ProductCard
                            handleClickProduct={() => {
                                navigate(`/productPage/${item.id}`)
                                scrollTo(0, 0)
                            }}
                            key={item.id}
                            price={item.price}
                            productName={item.product.name}
                            productModel={item.product.model}
                            productBrand={item.product.brand}
                            productImg={item.product.imageURL}
                            priceAfterDiscount={item.priceAfterSale}
                            salePercentage={item.salePercentage}
                            qtyAvailable={item.qtyAvailable}
                            rating={item.rating}
                            numberOfRates={item.numberOfRates}
                        />

                    ))}
                </Box>
            </Grid>
            <IconButton onClick={handleNext} disabled={activeStep === 3 - widthController}
                sx={{
                    border: "1px solid #E7E7E7",
                    borderRadius: 2,
                    backgroundColor: 'white',
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,

                    py: '30px',
                    '&:hover': {

                        color: "orange",
                        opacity: [0.9, 0.8, 0.7],

                    },

                }}

            >
                <ArrowForwardIosIcon sx={{ fontSize: '25px', "&:hover": { color: "orange", opacity: [0.9, 0.8, 0.7] } }} />
            </IconButton>
        </Box>
    );
};
