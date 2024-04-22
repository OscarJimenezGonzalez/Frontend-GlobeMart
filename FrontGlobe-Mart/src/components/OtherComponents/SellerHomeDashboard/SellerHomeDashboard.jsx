import { Box } from '@mui/system'
import React, { useEffect, useState, useContext } from 'react'
import { Grid, Typography, Card, CardMedia, CardContent, Button, CardActions, Paper, IconButton } from '@mui/material'

import { mainContext } from '../../../contexts/mainContext'
import { mainTheme } from '../../../themes/mainTheme'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import LandingProducts from '../../LandingPageComponents/LandingProducts/LandingProducts'


// Page that Integrates Functionall info and data Just for seller use Purpose. 


export default function SellerHomeDashboard({ userData, sellerCompanyData, sellerProducts, totalSales, sellerCartItems, awaitingShippmentOrders, enableAddProducts, enableAddVersions }) {

    const { mainData, setMainData } = useContext(mainContext)
    const backgroundColor = mainData.themeMode === mainTheme ? '#FFFFFF' : "#1E1E1E"

    // Ordenamos nuestra sellerProducts por su Id de mayor a menos para que salgan los
    // ultimos productos creados primero. 

    useEffect(() => {

        console.log("SellerProduct List: ", sellerProducts)
        const sortedList = sellerProducts.sort((a, b) => b.id - a.id)
        console.log("Lista productos ordenada por ID de mayor a menor: ", sortedList)

    }, [sellerProducts])

    return (

        <Box sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2, p: 5 }}>

            <Typography m={1} variant='h5' color="primary">Welcome !</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, display: 'flex', alignItems: 'center', p: 2, minHeight: 190 }}>
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image={sellerCompanyData.logoURL || 'path/to/default/image.png'}
                            alt="Logo"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6" color={"secondary.main"}>{sellerCompanyData.name}</Typography>
                            <Typography variant="body2" color="text.secondary"><strong>{userData.username}</strong> / Community and Digital Resourses Manager </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, minHeight: 150, p: 3, }}>
                        <Typography color={"secondary"}>Total Sales: </Typography>
                        <Typography mt={1} variant="h5" color="text.secondary">{totalSales} $</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, width: "100%", minHeight: 150, p: 3 }}>
                        <Typography color={"secondary"}>Orders Pending:</Typography>
                        <Typography mt={1} variant="h5" color="text.secondary">{awaitingShippmentOrders}</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, minHeight: 150, p: 3, }}>
                        <Typography color={"secondary"}>Reviews Unread:</Typography>
                        <Typography mt={1} variant="h5" color="text.secondary">17</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, minHeight: 150, p: 3 }}>
                        <Typography color={"secondary"}>Returns Pending:</Typography>
                        <Typography mt={1} variant="h5" color="text.secondary">3</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, minHeight: 200, p: 3 }}>

                        <Typography color={"primary"}>Add New Products</Typography>
                        <Box display={"flex"} alignContent={"center"} alignItems={"center"} p={2}>
                            <IconButton onClick={enableAddProducts} sx={{ width: 60 }}>
                                <AddCircleOutlineIcon sx={{ fontSize: '3rem' }} />
                            </IconButton>
                            <Typography ml={1} variant="body2" color="text.secondary">Click here to add new products to your companys catalogue! </Typography>
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, minHeight: 200, p: 3 }}>

                        <Typography color={"primary"}>Create A Version of an existing Product</Typography>
                        <Box display={"flex"} alignContent={"center"} alignItems={"center"} p={2}>
                            <IconButton onClick={enableAddVersions} sx={{ width: 60 }}>
                                <MoreTimeIcon sx={{ fontSize: '3rem' }} />
                            </IconButton>
                            <Typography ml={1} variant="body2" color="text.secondary">Create your own version of a product that has allready been registered </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} sx={{ mb: 1 }}>
                    <Box sx={{ backgroundColor: backgroundColor, minHeight: 350, p: 3 }}>
                        <Box sx={{ p: 0 }}>
                            <Typography color={"primary"} >Your Products: </Typography>
                            <Typography variant="body2" color="text.secondary">You can click on any product of your list and edit its data from this site: </Typography>
                        </Box>
                        <Box mt={4}>
                            <LandingProducts productList={sellerProducts}></LandingProducts>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

        </Box>



    )
}

