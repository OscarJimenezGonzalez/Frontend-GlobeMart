import * as React from 'react';
import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ToggleButtonSize from '../../MicroComponents/ToggleButtonSize/ToggleButtonSize';
import ToggleButtonColor from '../../MicroComponents/ToggleButtonColor/ToggleButtonColor';
import ToggleButtonSizeShoe from '../../MicroComponents/ToggleButtonSizeShoe/ToggleButtonSizeShoe';
import ShippingInfoCard from '../../MicroComponents/ShippingInfoCard/ShippingInfoCard';
import { mainContext } from '../../../contexts/mainContext';
import { truncateText } from '../../../auxStr/auxStructures';


export default function ProductOptions({ hasShoeSize, hasClothingSize, hasColorOption, sale, name, brand, model, price, id, salePerc, productDescription, descriptionId }) {

    const [shippingInfoOff, setShippingInfoOff] = useState(true);
    const [financialInfoOff, setFinancialInfoOff] = useState(true);

    const { mainData, setMainData } = useContext(mainContext)
    const shippingClick = mainData.shippingInfoClick

    return (

        <Box sx={{ minWidth: "30%", maxWidth: "30%", minHeight: 450, display: "flex", flexDirection: "column", mx: 5 }}>

            <Box>
                <Typography variant='h6' sx={{ mb: 1, fontWeight: "bold", color: "#1976D2" }}>{name}</Typography>
                <Typography sx={{ mb: 1, color: "#1976D2" }}>Model: {model}</Typography>
                <Typography sx={{ mb: 1, color: "#1976D2" }}>Brand: <strong>{brand}</strong>  </Typography>
                <Typography sx={{ color: "grey" }}>Ref: 000000000000000000{id}</Typography>
            </Box>

            <Divider sx={{ my: 3 }}></Divider>

            <Box sx={{ '& > *': { mb: 1, color: "#1976D2" } }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3, color: "black" }}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        {sale && <Typography sx={{ color: "red" }}>Last Price:&nbsp;</Typography>}
                        {sale && <Typography sx={{ textDecoration: 'line-through', color: "red" }}>{price}€ </Typography>}
                    </Box>
                    {sale && <Typography sx={{ color: "green" }}>Save: {Math.round(price * (salePerc * 0.01))} € </Typography>}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    {sale &&
                        <Typography sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            mb: 1,
                            color: "#2E7D32"
                        }}>
                            Price: {(price - Math.round(price * (salePerc * 0.01))).toFixed(0)} €
                        </Typography>}
                    {!sale &&
                        <Typography sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            mb: 1,
                            color: "#2E7D32"
                        }}>
                            Price: {price} €
                        </Typography>}
                </Box>
            </Box>

            <Box sx={{ minHeight: 200 }}>

                {shippingClick ? <Box>

                    {(hasShoeSize || hasClothingSize) &&
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ mb: 2, color: "#1976D2" }}>Size:</Typography>
                            {hasClothingSize && <ToggleButtonSize />}
                            {hasShoeSize && <ToggleButtonSizeShoe />}
                        </Box>
                    }
                    {hasColorOption &&
                        <Box>
                            <Typography sx={{ mb: 2, color: "#1976D2" }}>Color:</Typography>
                            <ToggleButtonColor />
                        </Box>
                    }

                </Box> : <ShippingInfoCard sx={{ mt: 1 }}></ShippingInfoCard>

                }

                {(shippingClick && !hasShoeSize && !hasClothingSize && !hasColorOption) &&
                    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "100%" }} >
                        <Typography variant="subtitle2" gutterBottom style={{ marginBottom: '10px', lineHeight: '1.5' }}>
                            Product Description:
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '0.75rem', marginBottom: '10px', lineHeight: '2' }}>
                            {productDescription ? truncateText(productDescription, 300) : null}
                        </Typography>
                        <Link href={descriptionId} style={{ cursor: 'pointer', fontSize: '0.75rem', lineHeight: '2', marginBottom: '20px' }}>
                            See more details...
                        </Link>
                    </Box>}


            </Box>

        </Box >

    );

}





