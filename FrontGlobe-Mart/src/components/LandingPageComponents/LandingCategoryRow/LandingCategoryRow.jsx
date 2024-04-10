import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Box, Typography } from '@mui/material'
import bigSales from '../../../assets/images/landingPage/BigSales.jpeg'
import megaSales from '../../../assets/images/landingPage/megaSale.jpeg'
import electroDom from '../../../assets/images/landingPage/electroDom.jpeg'
import electroDom2 from '../../../assets/images/landingPage/electroDom2.jpeg'
import electroDom3 from '../../../assets/images/landingPage/electroDom3.png'
import electrodomesticos from '../../../assets/images/landingPage/electrodomesticos.png'
import clothing from '../../../assets/images/landingPage/clothing.jpeg'
import mobiles from '../../../assets/images/landingPage/mobiles.jpg'
import toys from '../../../assets/images/landingPage/toys.png'
import allProducts from '../../../assets/images/landingPage/allProducts.jpg'
import CircularLoading from '../../MicroComponents/CircularLoading/CircularLoading'

function LandingCategoryRow({ renderAllProducts }) {

    const [imagesLoaded, setImagesLoaded] = useState({
        bigSales: false,
        megaSales: false,
        allProducts: false,
        mobiles: false,
        electrodomesticos: false,
        toys: false,
    });

    useEffect(() => {
        // Simula la carga de imágenes con un retraso
        const timer = setTimeout(() => {
            setImagesLoaded({
                bigSales: true,
                megaSales: true,
                allProducts: true,
                mobiles: true,
                electrodomesticos: true,
                toys: true,
            });
        }, 700); // Ajusta el retraso según sea necesario

        return () => clearTimeout(timer);

    }, []);

    const renderImageOrProgress = (imageSrc, loadedState, altText) => {
        if (!loadedState) {
            return <CircularLoading />;
        } else {
            return (
                <img
                    src={imageSrc}
                    alt={altText}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: 'cover',
                        borderRadius: '10%',
                    }}
                />
            );
        }
    };

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => { renderAllProducts() }}
                        sx={{
                            borderRadius: 7,
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden',
                            justifyContent: 'center',
                        }}
                    >
                        
                        {renderImageOrProgress(bigSales, imagesLoaded.bigSales, "Big Sales")}

                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">Big Sales</Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => { }}
                        sx={{
                            borderRadius: 7,
                            // backgroundColor: "#F9F9F9",
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden'
                        }}>
                        <img
                            src={megaSales}
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">Outlet</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => { }}
                        sx={{
                            borderRadius: 7,
                            backgroundColor: "#F9F9F9",
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden'
                        }}>
                        <img
                            src={allProducts}
                            alt="Logo"
                            style={{
                                width: "120%",
                                height: "137%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                                transform: 'scale(1)'
                            }}
                        />
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">All Products</Typography>
                </Box>
            </Grid>


            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => { }}
                        sx={{
                            borderRadius: 7,
                            backgroundColor: "#F9F9F9",
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden'
                        }}>
                        <img
                            src={mobiles}
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">Mobile</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => { }}
                        sx={{
                            borderRadius: 7,
                            backgroundColor: "#F0DCCF",
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden'
                        }}>
                        <img
                            src={electrodomesticos}
                            alt="Logo"
                            style={{
                                width: "105%",
                                height: "75%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">Electronics</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => { }}
                        sx={{
                            borderRadius: 7,
                            backgroundColor: "background.default",
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden'
                        }}>
                        <img
                            src={toys}
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                        <Typography px={1} sx={{ mt: 1 }} variant='h6' color="primary.fixed">Toys</Typography>
                    </Box>
                </Box>
            </Grid>

        </>
    )
}

export default LandingCategoryRow