import React from 'react'
import { Box, Typography } from '@mui/material'


function ProductCard({ id, productName, productModel, productBrand, price }) {

  return (

    <Box sx={{
      display: 'flex', flexDirection:
        'column', alignItems: 'center', justifyContent: 'center', width: '25%', border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px', flexWrap: 'wrap', lineHeight: '2'
    }}>

      <Typography>{productName}</Typography>
      <Typography>{productModel}</Typography>
      <Typography>{productBrand}</Typography>
      <Typography>{price}</Typography>

    </Box>

  )
}

export default ProductCard