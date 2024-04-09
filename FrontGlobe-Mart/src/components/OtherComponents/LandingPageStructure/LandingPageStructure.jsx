import React from 'react'
import { Box, Typography, Grid, CardMedia, Card, Button } from '@mui/material'
import gmLogo from '../../../assets/images/landingPage/gmLogo.png'
import logoSmallGM from '../../../assets/images/logoSmallGM.png'

import LandingPageCaroussel from '../../LandingPageComponents/LandingPageCaroussel/LandingPageCaroussel'
import LandingPageNewsCaroussel from '../../LandingPageComponents/LandingPageNewsCaroussel/LandingPageNewsCaroussel'
import BrandCaroussel from '../../LandingPageComponents/BrandCaroussel/BrandCaroussel'
import NewsLetterForm from '../../MicroComponents/NewsLetterForm/NewsLetterForm'
import LandingIconRow from '../../LandingPageComponents/LandingIconRow/LandingIconRow'
import LandingCategoryRow from '../../LandingPageComponents/LandingCategoryRow/LandingCategoryRow'
import { SiGooglenews } from "react-icons/si";
import { ImFire } from "react-icons/im";
import LandingProducts from '../../LandingPageComponents/LandingProducts/LandingProducts'


function LandingPageStructure({ newProducts }) {

    return (
        <>
            <Grid container spacing={4} px={25} mb={16} mt={0} >

                <Grid item xs={12} width={"100%"} height={"100%"} >
                    <Box sx={{ maxWidth: "100%", height: 400, borderRadius: 7, backgroundColor: "#F9F9F9", display: 'flex', alignItems: 'center' }}>
                        <LandingPageCaroussel></LandingPageCaroussel>
                    </Box>
                </Grid>
                <LandingCategoryRow></LandingCategoryRow>

            </Grid >

            <Grid container spacing={3} mb={6} >
                <Grid item xs={12}>
                    <Box sx={{
                        backgroundColor: "background.brigth", display: 'flex', alignItems: 'center', minHeight: 480, px: 25


                    }}>
                        <Box width={"22%"}>
                            <Typography variant='h4' color='secondary.main' mb={2}>Discover our brands</Typography>
                            <Typography variant='h6' color='primary.fixed'>Partnering with the finest in the industry...</Typography>
                            <Box gap={5} display={"flex"} mt={3}>
                                <Button variant='containedWarning'>See more ... </Button>
                            </Box>
                        </Box>
                        <Box ml={8}>
                            <BrandCaroussel></BrandCaroussel>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={3} mb={8}>
                <Grid item xs={12}>
                    <Box sx={{
                        width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 550,
                        justifyContent: 'center'
                    }}>
                        <Box width={"100%"} my={3} px={25}>
                            {/* <Box width={"100%"} my={3} px={25} display={"flex"} flexDirection={"column"} justifyContent={'center'} alignContent={'center'} alignItems={'center'}> */}
                            <Typography variant='h4' color='secondary.main' mb={2}>New Products</Typography>
                            <Typography variant='h6' color='primary.fixed' mb={0}>+2000 each week </Typography>
                        </Box>
                        <Box width={'100%'} px={25}>
                            <LandingProducts productList={newProducts}></LandingProducts>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} mb={5} >
                <Grid item xs={12}>
                    <Box sx={{
                        backgroundColor: "background.brigth", display: 'flex', alignItems: 'center', minHeight: 550, px: 25,
                        justifyContent: 'center'
                    }}>
                        {/* <Box
                            component={'img'}
                            src={logoSmallGM}
                            width={450}
                            height={300}
                        >
                        </Box> */}

                        <Box width={"20%"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
                            <SiGooglenews fontSize={200} color='#1E1E1E' />
                        </Box>
                        <Box width={"50%"} borderRadius={2} backgroundColor={"white"} sx={{ p: 6 }}>
                            <Typography variant='h4' color='secondary' mb={4}>Subscribe to our Newsletter !</Typography>
                            <NewsLetterForm></NewsLetterForm>
                        </Box>


                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={5} minHeight={550}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 550, px: 25 }}>
                    <LandingIconRow></LandingIconRow>
                </Box>
            </Grid>

        </>

    )
}

export default LandingPageStructure