import React, { useEffect, useState } from 'react';
import { Box, Typography, Tooltip, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const PriceContainer = ({ productInfo }) => {

    const [productData, setProductData] = useState();
    const [priceNum, setPriceNum] = useState(["00,", "00"]);

    // const productPrice = productInfo.price.toString().split(".")

    useEffect(() => {

        setProductData(productInfo);

    }, [productInfo])

    useEffect(() => {

        if (productData && productData.priceAfterSale) {

            const splitPrice = productData.priceAfterSale.toString().split(".");
            setPriceNum(splitPrice);
            console.log("Split Price", priceNum)
            // console.log("Product Data from PriceContainer", productData)

        }

    }, [productData])


    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#FF6000',
            mb: '20px',
        }}>
            <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
                {priceNum ? priceNum[0] : null},
            </Typography>
            <Typography variant="h6" component="span" sx={{ verticalAlign: 'super' }}>
                {priceNum && priceNum[1]}€
            </Typography>
            {/* <Typography>  </Typography> */}
            <Box sx={{
                ml: 1,
                color: 'primary.main',
                fontSize: '0.8rem',
            }}>
                PVP
            </Box>

            {productData && productData.onSale &&

                <Typography variant="body2" component="span" sx={{ textDecoration: 'line-through', ml: 0.5 }}>
                    {productData && productData.price}€
                </Typography>

            }

            {productData && productData.onSale ?

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#FF6000',
                    borderRadius: '4px',
                    padding: '0px 4px',
                    marginLeft: '8px',
                    color: 'white',
                }}>
                    <Typography variant="body2" component="span">
                        -{productData && productData.salePercentage}%
                    </Typography>
                    <Tooltip title="Discount Information">
                        <IconButton size="small" sx={{ color: 'white' }}>
                            <InfoOutlinedIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                </Box>

                : null}

        </Box >
    );
};

export default PriceContainer;