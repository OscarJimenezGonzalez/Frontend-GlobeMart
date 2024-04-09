import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system';
import { useCustomMediaQueries } from '../../../auxStr/customMediaQueries';
import ProductCard from '../../OtherComponents/ProductCard/ProductCard';

const brands = [
    { id: 1, name: "Adidas", logoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOiVtLgAhGgm4QwImp21rFGo3eX36ZHyy8lPqw5ToVA&s" },
    { id: 2, name: "Salomon", logoImg: "https://seeklogo.com/images/S/salomon-logo-75CF8422DE-seeklogo.com.png" },
    { id: 3, name: "Samsung", logoImg: "https://i.pinimg.com/originals/85/3c/fd/853cfde1e49ab9695125c89aba89acf9.png" },
    { id: 4, name: "Sony", logoImg: "https://img.goodfon.com/wallpaper/big/1/91/playstation-4-ps4-hi-tech.webp" },
    { id: 5, name: "Puma", logoImg: "https://static.vecteezy.com/system/resources/previews/022/076/746/non_2x/puma-logo-and-art-free-vector.jpg" },
    { id: 6, name: "Salomon2", logoImg: "https://seeklogo.com/images/S/salomon-logo-75CF8422DE-seeklogo.com.png" },
]


export default function LandingProducts({ productList }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const [widthController, setWidthController] = useState(4)
    const { isLargeScreen, isMediumLargeScreen, isMediumScreen, isSmallScreen, isTinyScreen } = useCustomMediaQueries();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    console.log(productList, "LISTA ")

    useEffect(() => {

        if (isLargeScreen) {
            setWidthController(5)
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
                        <>

                            <ProductCard
                                handleClickProduct={() => handleProductClick(productList.id)}
                                key={item.id}
                                price={item.price}
                                productName={item.product.name}
                                productModel={item.product.model}
                                productBrand={item.product.brand}
                                productImg={item.product.imageURL}
                                priceAfterDiscount={item.priceAfterSale}
                                salePercentage={item.salePercentage}
                                qtyAvailable={item.qtyAvailable}
                            />


                        </>

                    ))}
                </Box>
            </Grid>
            <IconButton onClick={handleNext} disabled={activeStep === productList.length - widthController}
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
