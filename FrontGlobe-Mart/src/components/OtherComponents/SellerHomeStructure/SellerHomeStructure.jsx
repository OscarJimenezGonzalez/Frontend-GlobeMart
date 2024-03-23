import { Box } from '@mui/system'
import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent, Button, CardActions, Paper } from '@mui/material'
import SellerProductCaroussel from '../SellerProductsCaroussel/SellerProductsCaroussel'
import { Link } from 'react-router-dom'

import { useCustomMediaQueries } from '../../../auxStr/customMediaQueries'
import SellerHomeSideBar from '../../MicroComponents/SellerHomeSideBar/SellerHomeSideBar'
import SellerHomeTopBar from '../../MicroComponents/SellerHomeTopBar/SellerHomeTopBar'
// Page that Integrates Functionall info and data Just for seller use Purpose. 

export default function SellerHomeStructure({ userData, sellerCompanyData, sellerProducts }) {

    const { isMediumLargeScreen, isMediumScreen, isSmallScreen, isTinyScreen } = useCustomMediaQueries();

    return (

        <Box width={"100%"} height={"100%"} sx={{ display: "flex", backgroundColor: "background.brigth", p: 0, m: 0, mx: 0 }}>

            {isMediumScreen ?
                <SellerHomeSideBar />
                : <SellerHomeTopBar />}

            <Box sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2, p: 5 }}>

                <Typography m={1} variant='h5' color="primary">Welcome !</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', p: 2, minHeight: 190 }}>
                            <CardMedia
                                sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 2, ml: 2, objectFit: 'cover' }}
                                image={sellerCompanyData.logoURL || 'path/to/default/image.png'}
                                alt="Logo"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" color={"secondary.main"}>{sellerCompanyData.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{userData.username} (name) / Community and Digital Resourses Manager </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', minHeight: 150, p: 3, }}>
                            <Typography color={"secondary"}>Total Sales: </Typography>
                            <Typography mt={1} variant="h5" color="text.secondary">3.212,40 $</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', width: "100%", minHeight: 150, p: 3 }}>
                            <Typography color={"secondary"}>Orders Pending:</Typography>
                            <Typography mt={1} variant="h5" color="text.secondary">12</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', minHeight: 150, p: 3, }}>
                            <Typography color={"secondary"}>Reviews Unread:</Typography>
                            <Typography mt={1} variant="h5" color="text.secondary">17</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', minHeight: 150, p: 3 }}>
                            <Typography color={"secondary"}>Returns Pending:</Typography>
                            <Typography mt={1} variant="h5" color="text.secondary">3</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', minHeight: 350, p: 3 }}>
                            <Box sx={{ p: 0 }}>
                                <Typography color={"primary"} >Your Products: </Typography>
                                <Typography variant="body2" color="text.secondary">You can click on any product of your list and edit its data from this site: </Typography>
                            </Box>
                            <Box mt={4}>
                                <SellerProductCaroussel productList={(sellerProducts)}></SellerProductCaroussel>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', minHeight: 200, p: 3 }}>
                            <Typography color={"primary"}>Add New Products</Typography>
                            <Typography variant="body2" color="text.secondary">Click here to add new products to your companys catalogue! </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} sx={{ mb: 1 }}>
                        <Box sx={{ backgroundColor: 'white', minHeight: 200, p: 3 }}>
                            <Typography color={"primary"}>Create A Version of an existing Product</Typography>
                            <Typography variant="body2" color="text.secondary">Create your own version of a product that has allready been registered</Typography>
                        </Box>
                    </Grid>



                </Grid>

            </Box>

        </Box >


    )
}

