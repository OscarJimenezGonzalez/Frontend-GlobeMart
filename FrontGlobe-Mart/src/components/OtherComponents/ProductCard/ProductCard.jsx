import * as React from 'react';
import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { typography } from '@mui/system';
import { mainContext } from '../../../contexts/mainContext';
import { mainTheme } from '../../../themes/mainTheme';

export default function ProductCard({ productName, productModel, productBrand, price, salePercentage, priceAfterDiscount, productImg, handleClickProduct, addToCartClick, qtyAvailable }) {

  const [favClicked, setFavClicked] = useState(false)
  const [productClicked, setProductClicked] = useState(false)
  const { mainData, setMainData } = useContext(mainContext)

  const handleFavClick = () => {

    setFavClicked(!favClicked)
    console.log(favClicked)

  }

  return (

    <Card sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minWidth: 220,
      maxWidth: 220, '&:hover':
      {
        backgroundColor: mainData.themeMode === mainTheme ? "grey.200" : "grey.800"
      }
    }}>
      {/* <Link onClick={handleProductClick} to={"/ProductPage"} style={{ textDecoration: 'none', color: 'black' }} > */}
      <Link style={{ textDecoration: 'none', color: 'black' }} >
        <Box position="relative">
          <CardMedia
            position="relative"
            onClick={handleClickProduct}
            component="img"
            alt="img"
            height="160px"
            width='100%'
            style={{ objectFit: 'cover', }} 
            image={productImg}

          />
          {qtyAvailable <= 0 && <Typography onClick={handleClickProduct} sx={{
        

            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            // borderRadius: 1,
          }}>Out of Stock</Typography>}


        </Box>
      </ Link >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

        <Typography variant="body1" component="div">
          {productName.length > 20 ? productName.slice(0, 20) + '...' : productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
          {productModel}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
          {productBrand}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, height: 30, alignItems: 'center' }}>
          <Typography variant="body2" color="text.primary">
            {priceAfterDiscount} €
          </Typography>
          {salePercentage > 0 &&
            <Typography variant="body2" sx={{ textDecoration: 'line-through', color: "red" }}>
              {price} €
            </Typography>
          }

        </Box>

      </CardContent>
      
      <CardActions sx={{ display: 'flex' }}>

        <Box sx={{ width: '100%', display: 'flex' }}>
          <Button onClick={addToCartClick} size="small">Add to Cart</Button>
          <Button onClick={handleFavClick} size="small">
            {favClicked ?
              <FavoriteIcon sx={{ color: 'secondary.main', fontSize: '18px', width: '18px', height: '18px' }} /> :
              <FavoriteBorderIcon sx={{ color: 'primary.main', fontSize: '18px', width: '18px', height: '18px' }} />
            }
          </Button>
        </Box>

      </CardActions>

    </Card >

  );

}




