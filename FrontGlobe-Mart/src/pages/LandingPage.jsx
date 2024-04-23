import React from 'react'
import Box from '@mui/material/Box';
import ProductCard from '../components/OtherComponents/ProductCard/ProductCard';
import { useState, useEffect, useContext } from 'react';
import { getProductsFromSellers } from '../services/productSellerService';
import { mainContext } from '../contexts/mainContext';
import { Navigate, useNavigate } from 'react-router-dom';
import AdMainCard from '../components/OtherComponents/AdMainCard/AdMainCard';
import { commercialAds } from '../auxStr/auxStructures.js';
import LandingPageStructure from '../components/OtherComponents/LandingPageStructure/LandingPageStructure.jsx';
import { Button, Grid } from '@mui/material';
import { ConstructionOutlined } from '@mui/icons-material';
import { getReviewsFromProduct } from '../services/productReviewService.js';
import LandingPageCaroussel from '../components/LandingPageComponents/LandingPageCaroussel/LandingPageCaroussel.jsx';

function LandingPage() {

    // const isSmallScreen = useMediaQuery('(max-width: 600px)')
    const [selectedProduct, setSelectedProduct] = useState()
    const [productData, setProductData] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [bestOfClothing, setBestOfClothing] = useState([])
    const [sortedProducts, setSortedProducts] = useState([])
    const [newStuff, setNewStuff] = useState([])
    const { mainData, setMainData } = useContext(mainContext)

    const selectedCatsLength = mainData.selectedPCategories.length
    const selectedCats = mainData.selectedPCategories
    const searchInputData = mainData.searchData

    const navigate = useNavigate()

    console.log("Leyendo nuestro contexto principal: ", mainData)

    // * busqueda inicial de todos los productos sin fltrar
    useEffect(() => {

        const fetchProductData = async () => {

            const pData = await getProductsFromSellers()
            const sorted = pData.sort((a, b) => b.numberOfRates - a.numberOfRates)
            setSortedProducts(sorted)

            const clothing = pData.filter((item) => item.product.productCategoryId === 6)
            setBestOfClothing(clothing)

            setAllProducts(pData.slice(0, 10))
            const searchedProducts = pData.filter(products => products.product.name.includes(searchInputData))
            setProductData(searchedProducts)

            const pData2 = await getProductsFromSellers()
            
            setNewStuff(pData2.sort(((a,b)=> b.id - a.id)))


        }

        fetchProductData()

    }, [searchInputData])

    // * navegar al producto seleccionado
    async function handleProductClick(productId) {

        setSelectedProduct(productId)
        navigate(`/productPage/${productId}`)
        scrollTo(0, 0)
    }

    const renderProducts = () => {

        const sortedProductData = [...productData].sort((a, b) => b.numberOfRates - a.numberOfRates);

        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginY: '50px', gap: '36px' }}>
                {sortedProductData.map(productData => (
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
                        rating={productData.rating}
                        numberOfRates={productData.numberOfRates ? productData.numberOfRates : 0}
                    />
                ))}
            </Box>
        );
    };

    const renderSelectedCatProducts = () => {

        if (selectedCats[0] === 0) {

            return (

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginY: '50px', gap: '36px' }}>

                    {productData.filter((products) => products.salePercentage > 0).map(productData => (

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
                            rating={productData.rating}
                            numberOfRates={productData.numberOfRates ? productData.numberOfRates : 0}
                        />
                    ))}
                </Box>

            )

        } else {

            return (

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginY: '50px', gap: '36px' }}>

                    {productData.filter((products) => selectedCats.includes(products.product.productCategoryId)).map(productData => (

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
                            rating={productData.rating}
                            numberOfRates={productData.numberOfRates ? productData.numberOfRates : 0}
                        />
                    ))}

                </Box>

            )
        }

    }

    const renderRandomAd = () => {

        const randomNum = Math.floor(Math.random() * commercialAds.length)

        return (


            <AdMainCard

                key={(commercialAds[randomNum].id)}
                imageURL={(commercialAds[randomNum].imageURL)}

            />


        )

    }

    return (
        <Box width="100%">

            <Grid container spacing={4} px={25} mt={0} >
                <Grid item xs={12} width={"100%"} height={"100%"} >
                    <Box sx={{ maxWidth: "100%", height: 400, borderRadius: 7, backgroundColor: "#F9F9F9", display: 'flex', alignItems: 'center' }}>
                        <LandingPageCaroussel></LandingPageCaroussel>
                    </Box>
                </Grid>
            </Grid >

            {mainData.landingPageElements ? <LandingPageStructure

                newProducts={allProducts}
                newStuff={newStuff}
                bestOfClothing={bestOfClothing}
                renderAllProducts={() => {

                    setMainData(prevData => ({
                        ...prevData,
                        landingPageElements: false
                    }))

                }}

            />

                : <Box>

                    <Box sx={{ px: 25 }}>
                        {(selectedCatsLength === 0) ? renderProducts() : renderSelectedCatProducts()}
                    </Box>

                    <Box width={"100%"} p={5} mb={10} display={"flex"} justifyContent={"center"}>
                        <Button variant='outlined'>Load more ...</Button>
                    </Box>

                </Box>
            }


        </Box>
    )
}

export default LandingPage

