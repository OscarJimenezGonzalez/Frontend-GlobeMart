import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, } from '@mui/system';
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { getOneProductFromSeller, getProductsFromSellers, UpdateQtyAvailable } from '../services/productSellerService';
import { mainContext } from '../contexts/mainContext';
import { Divider } from '@mui/material';
import ProductImageCaroussel from '../components/ProductPageComponents/ProductImageCaroussel/ProductImageCaroussel';
import RelatedProductsCarousel from '../components/ProductPageComponents/RelatedProductsCaroussel/RelatedProductsCaroussel';
import ProductImage from '../components/ProductPageComponents/ProductImage/ProductImage';
import ProductOptions from '../components/ProductPageComponents/ProductOptions/ProductOptions';
import CartCard from '../components/ProductPageComponents/CartCard/CartCard';
import ShippingInfoButton from '../components/MicroComponents/ShippingInfoButton/ShippingInfoButton';
import purchasePolicy from '../auxStr/auxStructures.jsx';
import { isLogged } from '../auxStr/auxStructures.js';

function ProductPage() {

    const [products, setProducts] = useState();
    const [product, setProduct] = useState();
    const [typoClick, setTypoClick] = useState(true);
    const [descriptionId, setDescriptionId] = useState("description")
    const [productQtySelected, setProductQtySelected] = useState();

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

    }, [productVersionId])

    ///// Console.logs
    useEffect(() => {
        console.log("Products", products)
        console.log("One Product", product)
    }, [products])

    useEffect(() => {
        console.log("context updated", mainData)
    }, [mainData])
    ///// Console.logs


    ////// No funciona queda pendiente ponerlo a funcionar !!!!
    const updateQtyInDB = (productAddedId, quantity) => {

        const updateQty = async () => {

            try {
                const updatedData = await UpdateQtyAvailable(productAddedId, quantity);
                console.log("Updated Data:", updatedData);
            } catch (error) {
                console.error("Error updating quantity in DB:", error);
            }
        };

        updateQty();
    };
    ////// No funciona queda pendiente ponerlo a funcionar !!!!

    // función que nos trae definitivamente la cantidad de producto seleccionado desde el componente CardCard
    const getQuantity = async (quantity) => {

        await setProductQtySelected(quantity)
        console.log("Quantity Changing In Father", quantity)

    }
    // función que nos trae definitivamente la cantidad de producto seleccionado desde el componente CardCard

    // función que nos mete en contexto los articulos y cantidades elegidos 
    const handleAddToCartClick = (addedProduct) => {

        setMainData(prevData => ({
            ...prevData,
            productsAddedToCart: [...prevData.productsAddedToCart, { qty: productQtySelected, productAdded: addedProduct }]
        }))

        ////// No funciona queda pendiente ponerlo a funcionar !!!!!
        updateQtyInDB(addedProduct.id, productQtySelected)
        ////// No funciona queda pendiente ponerlo a funcionar !!!!!
    }
    // función que nos mete en contexto los articulos añadidos a la cesta


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

                <ProductImage
                    productImg={(product && product.product.imageURL)}
                />

                {/* <ProductImageCaroussel></ProductImageCaroussel> */}

                <ProductOptions
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
                        addProductClick={() => handleAddToCartClick(product)}
                        quantityAv={(product && product.qtyAvailable)}
                        seller={(product && product.sellerCompany.name)}
                        onQuantityChange={(getQuantity)}
                    />
                    <ShippingInfoButton />
                </Box>

            </Box>

            <Divider />

            <Box sx={{
                width: '100%', minHeight: 400, mt: '2%', mb: '3%',
            }}>

                <Box sx={{ minHeight: 50, mb: '3%' }}>

                    <Box sx={{ width: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: 4, mb: '2%' }}>

                        <Typography
                            id={"description"}
                            onClick={() => { setTypoClick(true) }}
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
                            onClick={() => { setTypoClick(false) }}
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

                    <RelatedProductsCarousel

                        key={productVersionId}
                        productList={(products)}
                        productSelectedCat={(product && product.product.productCategoryId)}
                        productSelectedId={(product && product.productId)}

                    />
                </Box>

            </Box>

        </Container>
    )

}

export default ProductPage