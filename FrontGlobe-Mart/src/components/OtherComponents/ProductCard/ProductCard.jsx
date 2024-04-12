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
import RatingComponentCard from '../../MicroComponents/RatingComponent/RatingComponentCard';

export default function ProductCard({ productName, productModel, productBrand, price, salePercentage, priceAfterDiscount, productImg, handleClickProduct, addToCartClick, qtyAvailable, rating, numberOfRates }) {

  const [favClicked, setFavClicked] = useState(false)
  const [productClicked, setProductClicked] = useState(false)
  const { mainData, setMainData } = useContext(mainContext)
  const backgroundColor = mainData.themeMode === mainTheme ? '#FFFFFF' : "#010409"

  const handleFavClick = () => {

    setFavClicked(!favClicked)
    console.log(favClicked)

  }

  return (

    <Card sx={{
      display: "flex",
      boxShadow: "none",
      flexDirection: "column",
      justifyContent: "space-between",
      width: 220,
      width: 220,
      backgroundColor: backgroundColor,
      '&:hover':
      {
        backgroundColor: mainData.themeMode === mainTheme ? "grey.200" : "grey.800"
      },
      // '&:active': { // Esto aplicará el estilo cuando el elemento esté activo (click sin soltar)
      //   backgroundColor: mainData.themeMode === mainTheme ? "grey.300" : "grey.700",
      // },

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

          {/* <Button

            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={handleFavClick} size="small">
            {favClicked ?
              <FavoriteIcon sx={{ color: 'secondary.main', fontSize: '18px', width: '18px', height: '18px' }} /> :
              <FavoriteBorderIcon sx={{ color: 'secondary.main', fontSize: '18px', width: '18px', height: '18px' }} />
            }
          </Button> */}

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
          <Typography variant="h6" color="primary.fixed">
            {parseFloat(priceAfterDiscount).toFixed(0)} €
          </Typography>
          {salePercentage > 0 &&
            <Typography variant="body2" sx={{ textDecoration: 'line-through', color: "red" }}>
              {parseFloat(price).toFixed(0)} €
            </Typography>
          }
        </Box>

        <RatingComponentCard
          rating={rating}
          numberOfRates={numberOfRates}
        />

      </CardContent>

      <CardActions sx={{ display: 'flex' }}>

        <Box sx={{ width: '100%', display: 'flex' }}>
          {/* <Button onClick={addToCartClick} size="small">Add to Cart</Button>
          <Button onClick={handleFavClick} size="small">
            {favClicked ?
              <FavoriteIcon sx={{ color: 'secondary.main', fontSize: '18px', width: '18px', height: '18px' }} /> :
              <FavoriteBorderIcon sx={{ color: 'primary.main', fontSize: '18px', width: '18px', height: '18px' }} />
            }
          </Button> */}
        </Box>

      </CardActions>

    </Card >

  );

}




