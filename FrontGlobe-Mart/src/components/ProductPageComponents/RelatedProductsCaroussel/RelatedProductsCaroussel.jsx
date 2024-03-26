import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';


export default function RelatedProductsCarousel({ productList, productSelectedCat, productSelectedId, priceAfterSale }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const [widthController, setWidthController] = useState(4)

    const navigate = useNavigate()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // useEffect(() => {

    //     if (window.innerWidth > 1040) {
    //         setWidthController(4)
    //     } else if (window.innerWidth > 812 && window.innerWidth < 1040) {
    //         setWidthController(3)
    //     } else if (window.innerWidth > 562 && window.innerWidth < 812) {
    //         setWidthController(2)
    //     } else if (window.innerWidth < 562) {
    //         setWidthController(1)
    //     }

    // }, [window.innerWidth])

    const handleRelatedProductClick = (id) => {

        navigate(`/productPage/${id}`)
        scrollTo(0, 0)

    }

    return (
        <Box sx={{
            height: 230,
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: 'auto',
        }}>
            <IconButton onClick={handleBack} disabled={activeStep === 0}>
                <ArrowBackIosIcon />
            </IconButton>
            <Grid container spacing={2} justifyContent="center">

                {productList && productList.filter(product => product.product.productCategoryId === productSelectedCat && product.productId !== productSelectedId).slice(activeStep, activeStep + widthController).map((item, index) =>

                (
                    <Grid item key={item.id}>
                        <Card onClick={() => handleRelatedProductClick(item.productId)}>
                            <CardMedia

                                component="img"
                                sx={{
                                    height: 140,
                                    width: 200,
                                    objectFit: 'cover'
                                }}
                                image={item.product.imageURL}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {item.product.name.length > 20 ? item.product.name.slice(0, 20) + '...' : item.product.name}
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                                    <Typography variant="body2" color="text.primary">

                                        {/* {item.salePercentage ? (item.price - ((item.price * item.salePercentage) / 100)).toFixed(0) : item.price} € */}
                                        {item.priceAfterSale} €

                                    </Typography>
                                    <Typography variant="body2" color="red">

                                        {item.salePercentage > 0 && item.salePercentage + "% discount"}

                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                ))}
            </Grid>
            <IconButton onClick={handleNext} disabled={activeStep === 6 - widthController}>
                <ArrowForwardIosIcon sx={{ "&:hover": { color: "blue", opacity: [0.9, 0.8, 0.7] } }} />
            </IconButton>
        </Box>
    );
};
