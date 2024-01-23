import React from 'react'
import Box from '@mui/material/Box';
import ProductCard from '../components/OtherComponents/ProductCard/ProductCard';

const productos = [
    {
        id: 1,
        productName: "Playeras Nike Chachis",
        productModel: "SB",
        productBrand: "Nike",
        price: 80

    },
    {
        id: 2,
        productName: "Playeras Adidas Crema ",
        productModel: "X123",
        productBrand: "Adidas",
        price: 120
    },
    {
        id: 3,
        productName: "Playeras Puma Cutre ",
        productModel: "De coyotaso",
        productBrand: "Puma",
        price: 50
    }

]

function MainPage() {

    const renderProducts = () => {

        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {productos.map(product => (
                    <ProductCard
                        key={product.id}
                        price={product.price}
                        productName={product.productName}
                        productModel={product.productModel}
                        productBrand={product.productBrand}
                    />
                ))}
            </Box>
        )

    }

    return (
        <Box>

            {renderProducts()}


        </Box>
    )
}

export default MainPage

