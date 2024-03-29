import React from 'react'
import Box from '@mui/material/Box';
import ProductCard from '../components/OtherComponents/ProductCard/ProductCard';
import { useState, useEffect, useContext } from 'react';
import { getProductsFromSellers } from '../services/productSellerService';
import { mainContext } from '../contexts/mainContext';
import { Navigate, useNavigate } from 'react-router-dom';
import AdMainCard from '../components/OtherComponents/AdMainCard/AdMainCard';
import { commercialAds } from '../auxStr/auxStructures.js';

function LandingPage() {

    // const isSmallScreen = useMediaQuery('(max-width: 600px)')
    const [productData, setProductData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState()
    const { mainData, setMainData } = useContext(mainContext)
    const selectedCatsLength = mainData.selectedPCategories.length
    const selectedCats = mainData.selectedPCategories
    const searchInputData = mainData.searchData
    const navigate = useNavigate()

    console.log("Leyendo nuestro contexto principal: ", mainData)

    useEffect(() => {

        const fetchProductData = async () => {

            const pData = await getProductsFromSellers()
            const searchedProducts = pData.filter(products => products.product.name.includes(searchInputData))
            setProductData(searchedProducts)

        }

        fetchProductData()

    }, [searchInputData])

    async function handleProductClick(productId) {

        await setSelectedProduct(productId)
        navigate(`/productPage/${productId}`)
        scrollTo(0, 0)
    }

    const renderProducts = () => {

        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginY: '50px', gap: '20px' }}>

                {productData.map(productData =>

                    <ProductCard
                        handleClickProduct={() => handleProductClick(productData.id)}
                        key={productData.id}
                        price={productData.price}
                        productName={productData.product.name}
                        productModel={productData.product.model}
                        productBrand={productData.product.brand}
                        productImg={productData.product.imageURL}
                        priceAfterDiscount={productData.priceAfterSale}
                        salePercentage={productData.salePercentage}
                        qtyAvailable={productData.qtyAvailable}
                    />
                )}
            </Box>

        )

    }

    const renderSelectedCatProducts = () => {

        return (

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '50px', gap: '40px' }}>

                {productData.filter((products) => selectedCats.includes(products.product.productCategoryId)).map(productData => (

                    <ProductCard
                        addToCartClick={() => handleAddToCart(productData)}
                        handleClickProduct={() => handleProductClick(productData.id)}
                        key={productData.id}
                        price={productData.price}
                        productName={productData.product.name}
                        productModel={productData.product.model}
                        productBrand={productData.product.brand}
                        productImg={productData.product.imageURL}
                        priceAfterDiscount={productData.priceAfterSale}
                        salePercentage={productData.salePercentage}
                        qtyAvailable={productData.qtyAvailable}
                    />
                ))}
            </Box>

        )

    }

    const renderRandomAd = () => {

        const randomNum = Math.floor(Math.random() * commercialAds.length)

        return (

            <AdMainCard

                key={(commercialAds[randomNum].id)}
                imageURL={(commercialAds[randomNum].imageURL)}
                title={(commercialAds[randomNum].title)}
                description={(commercialAds[randomNum].description)}
                color={(commercialAds[randomNum].color)}

            />

        )

    }

    return (
        <Box >
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', maxHeight: '75vh' }}>

                {commercialAds && renderRandomAd()}

            </Box>
            <Box sx={{ px: 10 }}>
                {(selectedCatsLength <= 0) && renderProducts() || renderSelectedCatProducts()}
            </Box>

        </Box>
    )
}

export default LandingPage

