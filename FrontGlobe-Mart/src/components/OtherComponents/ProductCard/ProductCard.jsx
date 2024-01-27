import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductCard({ productName, productModel, productBrand, price, productImg }) {

  const [favClicked, setFavClicked] = useState(false)

  const handleFavClick = () => {

    setFavClicked(!favClicked)
    console.log(favClicked)

  }

  return (

    <Card sx={{minWidth: 200, maxWidth: 300}}>
      <CardMedia
        component="img"
        alt="img"
        height="160px"
        width='100%'
        style={{ objectFit: 'cover' }}  // controla como se ajusta la imagen dentro de su contenedor
        image={productImg}  // este es el prop de imnagen 
        
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productModel}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productBrand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price} €
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex' }}>
        <Button size="small">Add to Cart</Button>
        <Button onClick={handleFavClick} size="small">
          {favClicked ?
            <FavoriteIcon sx={{ color: '#1976D2', fontSize: '18px', width: '18px', height: '18px' }} /> :
            <FavoriteBorderIcon sx={{ color: '#1976D2', fontSize: '18px', width: '18px', height: '18px' }} />
          }
        </Button>
      </CardActions>
    </Card>

  );

}




