import React from 'react'
import { useState, useEffect, useContext } from 'react'
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
import { mainContext } from '../../../contexts/mainContext'


function LandingCategoryRow({ renderAllProducts, renderMegaSales, renderBigSales }) {

    const { mainData, setMainData } = useContext(mainContext)

    const [imagesLoaded, setImagesLoaded] = useState({
        bigSales: false,
        megaSales: false,
        allProducts: false,
        mobiles: false,
        electrodomesticos: false,
        toys: false,
    });

    useEffect(() => {

        const timer = setTimeout(() => {
            setImagesLoaded({
                bigSales: true,
                megaSales: true,
                allProducts: true,
                mobiles: true,
                electrodomesticos: true,
                toys: true,
            });
        }, 800);

        return () => clearTimeout(timer);

    }, []);

    const renderImageOrProgress = (imageSrc, loadedState, altText) => {

        const imageSelector = (imageSrc) => {

            if (imageSrc === allProducts) {
                return "150%"
            }
            else if (imageSrc === electrodomesticos) {
                return "75"
            }
            else {
                return "100%"
            }

        }

        if (!loadedState) {
            return <CircularLoading />;
        } else {
            return (
                <img
                    src={imageSrc}
                    alt={altText}
                    style={{
                        width: imageSrc === electrodomesticos ? "105%" : "100%",
                        height: imageSelector(imageSrc),
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
                        onClick={() => {
                            renderAllProducts()
                            setMainData(prevData => ({
                                ...prevData,
                                selectedPCategories: [0]
                            }))
                        }}
                        sx={{
                            borderRadius: 7,
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden',
                            justifyContent: 'center',
                            cursor: 'pointer',
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
                        onClick={() => {
                            renderAllProducts()
                            setMainData(prevData => ({
                                ...prevData,
                                selectedPCategories: [0]
                            }))
                        }}
                        sx={{
                            borderRadius: 7,
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}>
                        {renderImageOrProgress(megaSales, imagesLoaded.megaSales, "Mega Sales")}
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">Outlet</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => {
                            renderAllProducts()
                            setMainData(prevData => ({
                                ...prevData,
                                selectedPCategories: []
                            }))
                        }}
                        sx={{
                            borderRadius: 7,
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}>
                        {renderImageOrProgress(allProducts, imagesLoaded.allProducts, "All Products")}
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">All Products</Typography>
                </Box>
            </Grid>


            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => {

                            renderAllProducts()
                            setMainData(prevData => ({
                                ...prevData,
                                selectedPCategories: [4]
                            }))

                        }}
                        sx={{
                            borderRadius: 7,
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}>
                        {renderImageOrProgress(mobiles, imagesLoaded.mobiles, "Mobiles")}
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">Mobile</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => {
                            renderAllProducts()
                            setMainData(prevData => ({
                                ...prevData,
                                selectedPCategories: [2]
                            }))
                        }}
                        sx={{
                            borderRadius: 7,
                            backgroundColor: imagesLoaded.electrodomesticos && "#F0DDD4",
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}>
                        {renderImageOrProgress(electrodomesticos, imagesLoaded.electrodomesticos, "Electrodom")}
                    </Box>
                    <Typography sx={{ mt: 1 }} variant='h6' color="primary.fixed">Electronics</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Box
                        onClick={() => {
                            renderAllProducts()
                            setMainData(prevData => ({
                                ...prevData,
                                selectedPCategories: [3]
                            }))
                        }}
                        sx={{
                            borderRadius: 7,
                            display: 'flex',
                            alignItems: 'center',
                            height: 230,
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}>
                        {renderImageOrProgress(toys, imagesLoaded.toys, "Toys")}
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