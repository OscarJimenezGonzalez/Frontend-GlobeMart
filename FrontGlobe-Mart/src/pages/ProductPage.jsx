import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, } from '@mui/system';
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { getOneProductFromSeller, getProductsFromSellers } from '../services/productSellerService';
import { mainContext } from '../contexts/mainContext';
import { Divider } from '@mui/material';
import ProductImageCaroussel from '../components/ProductPageComponents/ProductImageCaroussel/ProductImageCaroussel';
import RelatedProductsCarousel from '../components/ProductPageComponents/RelatedProductsCaroussel/RelatedProductsCaroussel';
import ProductImage from '../components/ProductPageComponents/ProductImage/ProductImage';
import ProductOptions from '../components/ProductPageComponents/ProductOptions/ProductOptions';
import CartCard from '../components/ProductPageComponents/CartCard/CartCard';
import ShippingInfoButton from '../components/MicroComponents/ShippingInfoButton/ShippingInfoButton';
import purchasePolicy from '../auxStr/auxStructures.jsx';
// import LoadingTextField from '../../components/MicroComponents/LoadingAnimation/LoadingAnimation';



const images = [
    {
        id: 1,
        // label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        id: 2,
        // label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        id: 3,
        // label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        id: 4,
        // label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function ProductPage() {

    const [products, setProducts] = useState();
    const [product, setProduct] = useState();
    const [typoClick, setTypoClick] = useState(true);
    const [descriptionId, setDescriptionId] = useState("description")
    const { mainData, setMainData } = useContext(mainContext);
    const { productVersionId } = useParams()

    useEffect(() => {

        const fetchData = async () => {

            const productData = await getProductsFromSellers();

            setProducts(productData);
            setMainData(prevData => ({
                ...prevData,
                shippingInfoClick: true
            }))

        }

        fetchData();


    }, [])

    useEffect(() => {

        const fetchData = async () => {
            const productData = await getOneProductFromSeller(productVersionId);
            setProduct(productData)

        }

        fetchData()

    }, [])

    useEffect(() => {
        console.log("Products", products)
        console.log("One Product", product)
    }, [products])

    const handleDescriptionClick = () => {

        setTypoClick(true)

    }
    const handlePolicyClick = () => {

        setTypoClick(false)

    }

    return (

        <Container sx={{ mx: "10%", display: 'flex', flexWrap: 'wrap', flexDirection: 'column', minWidth: '100%' }}>

            <Box sx={{
                minWidth: '100%',
                maxHeight: 435,
                display: 'flex',
                justifyContent: 'space-between',
                my: '20px',
                flexDirection: 'row',
                alignContent: 'start',
                mb: "7%"
            }}>

                <ProductImage productImg={(product && product.product.imageURL)} />
                {/* <ProductImageCaroussel></ProductImageCaroussel> */}
                <ProductOptions
                    // name={(product ? product.product.name : "Loading data")}
                    name={(product && product.product.name)}
                    model={(product && product.product.model)}
                    brand={(product && product.product.brand)}
                    id={(product && product.id)}
                    sale={(product && product.onSale)}
                    salePerc={(product && product.salePercentage)}
                    price={(product && product.price)}
                    hasShoeSize={(product && product.hasShoeSizes)}
                    hasClothingSize={(product && product.hasClothingSizes)}
                    hasColorOption={(product && product.hasColorOption)}
                    productDescription={(product && product.productDescription)}
                    descriptionId={(descriptionId)}
                />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", alignContent: "center", alignItems: "center",
                    minWidth: "25%",
                    minHeight: "100%",
                    gap: 2,
                    mb: 0
                }}>
                    <CartCard
                        quantityAv={(product && product.qtyAvailable)}
                        seller={(product && product.sellerCompany.name)}

                    />
                    <ShippingInfoButton />
                </Box>



            </Box>

            <Divider></Divider>

            <Box sx={{
                width: '100%', minHeight: 400, mt: '2%', mb: '3%',
            }}>

                <Box sx={{ minHeight: 50, mb: '3%' }}>

                    <Box sx={{ width: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: 4, mb: '2%' }}>

                        <Typography
                            id={"description"}
                            onClick={handleDescriptionClick}
                            variant="h6"
                            sx={{
                                cursor: 'pointer', // Cambia el cursor a un puntero para indicar interactividad
                                color: typoClick ? "black" : "#1976D2",
                                fontWeight: 'bold'
                            }}
                        >
                            Description
                        </Typography>

                        <Typography
                            onClick={handlePolicyClick}
                            variant="h6"
                            sx={{
                                cursor: 'pointer',
                                color: typoClick ? "#1976D2" : "black",
                                fontWeight: 'bold'
                            }}
                        >
                            Policy
                        </Typography>

                    </Box>

                    {typoClick ?
                        <Box>
                            {product && product.productDescription}
                        </Box>
                        :
                        <Box>
                            {purchasePolicy()}
                        </Box>
                    }
                </Box>

                <Divider />

                <Typography variant="h6" sx={{ color: "#1976D2", fontWeight: 'bold', mb: '2%', mt: '2%' }}>Related Products</Typography>
                <Box sx={{ minHeight: 50, mb: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                    <RelatedProductsCarousel />
                </Box>

            </Box>

        </Container>
    )

}

export default ProductPage