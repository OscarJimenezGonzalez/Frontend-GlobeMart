import React from 'react'
import { Box, Typography, Grid, CardMedia, Card } from '@mui/material'
import safePayImage from '../../../assets/images/safePay.png'
import reviews from '../../../assets/images/reviews.png'
import freeReturns from '../../../assets/images/freeReturns.png'
import moto from '../../../assets/images/fff.png'
import bigSales from '../../../assets/images/landingPage/BigSales.jpeg'
// import electrodomesticos from '../../../assets/images/landingPage/electrodomesticos.png'
import electroDom from '../../../assets/images/landingPage/electroDom.jpeg'
import clothing from '../../../assets/images/landingPage/clothing.jpeg'
import megaSales from '../../../assets/images/landingPage/megaSale.jpeg'
import mobiles from '../../../assets/images/landingPage/mobiles.jpg'
import toys from '../../../assets/images/landingPage/toys.png'

import LandingPageCaroussel from '../LandingPageCaroussel/LandingPageCaroussel'
import BrandCaroussel from '../BrandCaroussel/BrandCaroussel'



function LandingPageStructure() {

    const squareStyle = {
        '&::before': {
            content: '""',
            display: 'block',
            paddingTop: '100%', // Altura igual al 100% del ancho del elemento
        },
        position: 'relative',
        '& > *': {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }
    };

    return (
        <>
            <Grid container spacing={4} px={25} mb={12} mt={0} >

                <Grid item xs={12} width={"100%"} height={"100%"} >
                    <Box sx={{ maxWidth: "100%", height: 400, borderRadius: 7, backgroundColor: "#F9F9F9", display: 'flex', alignItems: 'center' }}>

                        <LandingPageCaroussel></LandingPageCaroussel>

                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Box sx={{
                        borderRadius: 7,
                        backgroundColor: "#F9F9F9",
                        display: 'flex',
                        alignItems: 'center',
                        height: 250,
                        overflow: 'hidden'
                    }}>
                        <img
                            src={bigSales}
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Box sx={{
                        borderRadius: 7,
                        backgroundColor: "#F9F9F9",
                        display: 'flex',
                        alignItems: 'center',
                        height: 250,
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Box sx={{
                        borderRadius: 7,
                        backgroundColor: "#F9F9F9",
                        display: 'flex',
                        alignItems: 'center',
                        height: 250,
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Box sx={{
                        borderRadius: 7,
                        backgroundColor: "#F9F9F9",
                        display: 'flex',
                        alignItems: 'center',
                        height: 250,
                        overflow: 'hidden'
                    }}>
                        <img
                            src={electroDom}
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Box sx={{
                        borderRadius: 7,
                        backgroundColor: "#F08C03",
                        display: 'flex',
                        alignItems: 'center',
                        height: 250,
                        overflow: 'hidden'
                    }}>
                        <img
                            src={toys}
                            alt="Logo"
                            style={{
                                // width: "105%",
                                // height: "78%",
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Box sx={{
                        borderRadius: 7,
                        backgroundColor: "#F9F9F9",
                        display: 'flex',
                        alignItems: 'center',
                        height: 250,
                        overflow: 'hidden'
                    }}>
                        <img
                            src={clothing}
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                                borderRadius: '10%',
                            }}
                        />
                    </Box>
                </Grid>

            </Grid >

            <Grid container spacing={2} mb={15} >

                <Grid item xs={12}>
                    <Box sx={{ backgroundColor: "#F9F9F9", display: 'flex', alignItems: 'center', minHeight: 450, px: 25 }}>
                        <Box width={"20%"} my={5}>
                            <Typography variant='h4' color='secondary' mb={4}>Discover our brands</Typography>
                            <Typography variant='h5b' color='primary'>Partnering with the finest in the industry, an exclusive selection that defines excellence.. </Typography>
                        </Box>

                        <Box ml={10}>
                            <BrandCaroussel></BrandCaroussel>
                        </Box>

                    </Box>
                </Grid>

            </Grid>

            <Typography variant='h4' color="secondary" mx={25}>Compromises and Commitments</Typography>


            <Grid container spacing={5} py={3} px={25} mb={10}>

                <Grid item xs={12} sm={6} md={4} lg={3}  >
                    <Box sx={{ borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: "center", p: 2, minHeight: 250 }}>
                        <Box width={"30%"}>
                            <Typography variant='h6' color="primary.fixed">Safe & Secure Payment</Typography>
                        </Box>
                        <CardMedia
                            sx={{ width: 130, height: 180, borderRadius: '10%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image={safePayImage}
                            alt="Logo"
                        />

                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}   >

                    <Box sx={{ borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: "center", p: 2, minHeight: 250 }}>

                        <Box width={"30%"}>
                            <Typography variant='h6' color="primary.fixed">24 / 48 hours Delivery</Typography>
                        </Box>
                        <CardMedia
                            sx={{ width: 80, height: 80, borderRadius: '10%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image={moto}
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}  >
                    <Box sx={{ borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: "center", p: 2, minHeight: 250 }}>
                        <Box width={"20%"} mr={3}>
                            <Typography variant='h6' color="primary.fixed">Free & Safe Returns</Typography>
                        </Box>
                        <CardMedia
                            sx={{ width: 100, height: 100, borderRadius: '10%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image={freeReturns}
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}   >
                    <Box sx={{ borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: "center", p: 2, minHeight: 250 }}>

                        <Box width={"30%"} mr={2}>
                            <Typography variant='h6' color="primary.fixed">Our Customers Opinions</Typography>
                        </Box>
                        <CardMedia
                            sx={{ width: 140, minHeight: 220, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image={reviews}
                            alt="Logo"
                        />
                    </Box>
                </Grid>

            </Grid>

            <Grid container spacing={2} mb={15} >

                <Grid item xs={12}>
                    <Box sx={{
                        backgroundColor: "background.main", display: 'flex', alignItems: 'center', minHeight: 450, px: 25,
                        borderTop: "8px solid #f9f9f9", borderBottom: "8px solid #f9f9f9"
                    }}>
                        <Box width={"20%"} my={5}>
                            <Typography variant='h4' color='secondary' mb={4}>Join our Newsletter !</Typography>
                            <Typography variant='h5b' color='primary'>Find out the most relevant news about our products and services ! </Typography>
                        </Box>

                        <Box ml={10}>

                            NewsLetter Form

                        </Box>

                    </Box>
                </Grid>

            </Grid>

        </>

    )
}

export default LandingPageStructure