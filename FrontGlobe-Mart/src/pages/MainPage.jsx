import React from 'react'
import Box from '@mui/material/Box';
import ProductCard from '../components/OtherComponents/ProductCard/ProductCard';
import { useState, useEffect, useContext } from 'react';
import { getProductsFromSellers } from '../services/productSellerService';


function MainPage() {

    const [productData, setProductData] = useState([])

    useEffect(() => {

        const fetchProductData = async () => {

            const pData = await getProductsFromSellers()
            console.log(pData)
            setProductData(pData)

        }
        fetchProductData()

    }, [])


    useEffect(() => {

        console.log(productData)

    })

    const renderProducts = () => {

        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '50px', gap: '40px' }}>
                {productData.map(productData => (
                    <ProductCard
                        key={productData.id}
                        price={productData.price}
                        productName={productData.product.name}
                        productModel={productData.product.model}
                        productBrand={productData.product.brand}
                        productImg={productData.product.imageURL}
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

