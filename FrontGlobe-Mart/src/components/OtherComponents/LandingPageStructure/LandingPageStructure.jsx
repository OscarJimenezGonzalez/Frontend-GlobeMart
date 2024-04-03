import React from 'react'
import { Box, Typography, Grid, CardMedia, Card } from '@mui/material'

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
            <Grid container spacing={4} py={2} px={10} mb={10} mt={1}>

                <Grid item xs={12}>
                    <Box sx={{ borderRadius: 7, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 400 }}>
                        <CardMedia
                            sx={{ minWidth: "100%", minHeight: "100%", borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Box sx={{
                        borderRadius: 10,
                        backgroundColor: '#E7E7E7',
                        display: 'flex',
                        alignItems: 'center',
                        p: 2,
                        minHeight: 250,
                        overflow: 'hidden' // Asegura que cualquier parte de la imagen que exceda el contenedor se recorte
                    }}>
                        <img
                            src="https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg"
                            alt="Logo"
                            style={{
                                width: "100%", // Ajusta la imagen para cubrir el ancho del contenedor
                                height: 'auto', // Ajusta la imagen para cubrir la altura del contenedor
                                objectFit: 'contain', // Asegura que la imagen cubra el espacio disponible, recortando si es necesario
                                borderRadius: '10%', // Ajusta según sea necesario para el estilo
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}   >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}  >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}   >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}    >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}  >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>

            </Grid>

            <Grid container spacing={2} mb={10} >
                <Grid item xs={12}  >
                    <Box sx={{ backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 600 }}>
                        <Box width={"30%"} mx={7}>
                            <Typography variant='h5' color='primary.main' mb={2}>Discover our brands...</Typography>
                            <Typography variant='h6' color='primary.main'>Partnering with the finest in the industry, we proudly present an exclusive selection that defines excellence. Discover our brands, where innovation meets elegance and every choice is a testament to quality. Unveil a world of premier technology and design, tailored for those who accept nothing but the best. </Typography>

                        </Box>
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>

            </Grid>

            <Typography variant='h5' color="primary" mx={10}>Our compromises ... </Typography>


            <Grid container spacing={8} py={5} px={10} mb={10}>

                <Grid item xs={12} sm={6} md={4} lg={3}  >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        Safe Pay
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}   >

                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        24 / 48 hours Delivery
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}  >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        Free & Safe Returns
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}   >
                    <Box sx={{ borderRadius: 10, backgroundColor: '#E7E7E7', display: 'flex', alignItems: 'center', p: 2, minHeight: 250 }}>
                        Our Customers Opinions
                        <CardMedia
                            sx={{ minWidth: 100, minHeight: 120, borderRadius: '50%', mr: 4, ml: 2, objectFit: 'cover' }}
                            image=""
                            alt="Logo"
                        />
                    </Box>
                </Grid>

            </Grid>

        </>

    )
}

export default LandingPageStructure