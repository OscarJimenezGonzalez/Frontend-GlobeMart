import React from 'react'
import Box from '@mui/material/Box';
import ProductCard from '../components/OtherComponents/ProductCard/ProductCard';
import { useState, useEffect, useContext } from 'react';
import { getProductsFromSellers } from '../services/productSellerService';
import { mainContext } from '../contexts/mainContext';
import { Navigate } from 'react-router-dom';
import Link from '@mui/material/Link';


function MainPage() {

    const useNavigate = Navigate
    const [productData, setProductData] = useState([])
    const { mainData } = useContext(mainContext)
    const selectedCatsLength = mainData.selectedPCategories.length
    const selectedCats = mainData.selectedPCategories

    console.log("Leyendo nuestro contexto principal: ", mainData)

    useEffect(() => {

        const fetchProductData = async () => {

            const pData = await getProductsFromSellers()
            console.log("product data", pData)
            setProductData(pData)

        }
        fetchProductData()

    }, [])

    const renderProducts = () => {

        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '50px', gap: '40px' }}>

                {productData.map(productData =>

                    <ProductCard
                        key={productData.id}
                        price={productData.price}
                        productName={productData.product.name}
                        productModel={productData.product.model}
                        productBrand={productData.product.brand}
                        productImg={productData.product.imageURL}
                    />


                )}
            </Box>

        )

    }

    const renderSelectedProducts = () => {

        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '50px', gap: '40px' }}>

                {productData.filter((products) => selectedCats.includes(products.product.productCategoryId)).map(productData => (

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

            {(selectedCatsLength <= 0) && renderProducts() || renderSelectedProducts()}

        </Box>
    )
}

export default MainPage

