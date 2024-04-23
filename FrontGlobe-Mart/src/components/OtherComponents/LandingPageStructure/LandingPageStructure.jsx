import React, { useEffect } from 'react'
import { Box, Typography, Grid, CardMedia, Card, Button } from '@mui/material'
import LandingPageCaroussel from '../../LandingPageComponents/LandingPageCaroussel/LandingPageCaroussel'
import LandingPageNewsCaroussel from '../../LandingPageComponents/LandingPageNewsCaroussel/LandingPageNewsCaroussel'
import BrandCaroussel from '../../LandingPageComponents/BrandCaroussel/BrandCaroussel'
import NewsLetterForm from '../../MicroComponents/NewsLetterForm/NewsLetterForm'
import LandingIconRow from '../../LandingPageComponents/LandingIconRow/LandingIconRow'
import LandingCategoryRow from '../../LandingPageComponents/LandingCategoryRow/LandingCategoryRow'
import LandingProducts from '../../LandingPageComponents/LandingProducts/LandingProducts'
import LandingProductsMod from '../../LandingPageComponents/LandingProductsMod/LandingProductsMod'

import newsletter from '../../../assets/images/landingPage/newsletter.jpg'

function LandingPageStructure({ newProducts, bestOfClothing, newStuff, renderAllProducts }) {

    return (
        <>
            <Grid container spacing={4} px={25} mb={14} mt={0} >
                <LandingCategoryRow renderAllProducts={renderAllProducts}></LandingCategoryRow>
            </Grid >
            <Grid container spacing={3} mb={6} >
                <Grid item xs={12}>
                    <Box sx={{
                        backgroundColor: "background.brigth", display: 'flex', alignItems: 'center', minHeight: 620, px: 25
                    }}>
                        <Box width={"22%"}>
                            <Typography variant='h4' color='secondary.main' mb={2}>Discover our Besties</Typography>
                            <Typography variant='h6' color='primary.fixed'>Partnering with the finest in the industry...</Typography>
                            <Box gap={5} display={"flex"} mt={3}>
                                <Button variant='containedWarning'>See more ... </Button>
                            </Box>
                        </Box>
                        <Box ml={8}>
                            <LandingProductsMod productList={newProducts}></LandingProductsMod>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={3} mb={8}>
                <Grid item xs={12}>
                    <Box sx={{
                        width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 620,
                        justifyContent: 'center'
                    }}>
                        <Box width={"100%"} my={3} px={25}>
                            <Typography variant='h4' color='secondary.main' mb={2}>New Products</Typography>
                            <Typography variant='h6' color='primary.fixed' mb={0}>+2000 each week </Typography>
                        </Box>
                        <Box width={'100%'} px={25}>
                            <LandingProducts productList={newStuff}></LandingProducts>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} mb={2} >
                <Grid item xs={12}>
                    <Box sx={{
                        backgroundColor: "background.brigth", display: 'flex', alignItems: 'center', minHeight: 620, px: 25,
                        justifyContent: 'center'
                    }}>

                        <Box width="60%" sx={{ width: '100%', overflow: 'hidden' }}>
                            <img src={newsletter} alt="Descriptive text for the image" style={{ width: '100%', height: 'auto' }} />
                        </Box>

                        <Box width={"45%"} borderRadius={2} backgroundColor={"white"} sx={{ p: 4 }}>
                            <Typography variant='h4' color='secondary' mb={4}>Subscribe to our Newsletter !</Typography>
                            <NewsLetterForm></NewsLetterForm>
                        </Box>


                    </Box>
                </Grid>
            </Grid>



            <Grid container spacing={3} mb={8} mt={3}>
                <Grid item xs={12}>
                    <Box sx={{
                        width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 620,
                        justifyContent: 'center'
                    }}>
                        <Box width={"100%"} my={3} px={25}>
                            <Typography variant='h4' color='secondary.main' mb={2}>Best Of Clothing </Typography>
                            <Typography variant='h6' color='primary.fixed' mb={0}>discover the very best...</Typography>

                        </Box>
                        <Box width={'100%'} px={25}>
                            <LandingProducts productList={bestOfClothing}></LandingProducts>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={3} mb={4} >
                <Grid item xs={12}>
                    <Box sx={{
                        backgroundColor: "background.brigth", display: 'flex', alignItems: 'center', minHeight: 520, px: 25
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

            <Grid container spacing={5} minHeight={550} py={8}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 550, px: 25 }}>
                    <LandingIconRow></LandingIconRow>
                </Box>
            </Grid>
        </>

    )
}

export default LandingPageStructure