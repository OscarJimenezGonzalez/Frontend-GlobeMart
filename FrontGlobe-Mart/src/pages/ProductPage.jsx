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
import { isLogged } from '../auxStr/auxStructures.js';
import TabSelectorX from '../components/ProductPageComponents/TabSelectorX/TabSelectorX.jsx';
import RatingComponentSimple from '../components/MicroComponents/RatingComponentSimple/RatingComponentSimple.jsx';
import { getReviewsFromProduct } from '../services/productReviewService.js';
import VerifiedPurchase from '../components/MicroComponents/VerifiedPurchase/VerifiedPurchase.jsx';
import Stack from '@mui/material/Stack';

function ProductPage() {

    const [products, setProducts] = useState();
    const [product, setProduct] = useState();
    const [descriptionId, setDescriptionId] = useState("description")
    const [reviewList, setReviewList] = useState();
    const [productQtySelected, setProductQtySelected] = useState();

    const { mainData, setMainData } = useContext(mainContext);
    const { productVersionId } = useParams()

    // Aqui traemos los productos relacionados para el carusel de productos relacionados
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

    // Aqui traemos los datos específicos del producto a renderizar 
    useEffect(() => {

        const fetchData = async () => {
            const productData = await getOneProductFromSeller(productVersionId);
            setProduct(productData)
            return productData
        }

        fetchData()

    }, [productVersionId])

    // Aquí traemos las reviews del producto renderizado
    useEffect(() => {

        if (product) {
            console.log("este es el param ", product.id)
            const paramToReview = product.id
            const fetchData = async () => {
                const reviews = await getReviewsFromProduct(paramToReview);
                setReviewList(reviews)
                return reviews
            }
            fetchData()
        }

    }, [product])

    ///// Console.logs
    useEffect(() => {

        if (reviewList) {
            console.log("ReviewList Marica", reviewList[0].createdAt.slice(0, 10))
        }

        // console.log("context updated", mainData)
        // console.log("Producto a renderizar:", product)
    }, [mainData, product, reviewList])
    ///// Console.logs

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

    // función que nos trae definitivamente la cantidad de producto seleccionado desde el componente CardCard
    const getQuantity = async (quantity) => {

        await setProductQtySelected(quantity)

    }

    // función que nos mete en contexto los articulos y cantidades elegidos 
    const handleAddToCartClick = async (addedProduct) => {

        if (isLogged()) {

            setMainData(prevData => ({
                ...prevData,
                productsAddedToCart: [...prevData.productsAddedToCart, { qty: productQtySelected, productAdded: addedProduct }]
            }))

            try {

                console.log("Added Product:", productQtySelected);
                let productResultant = addedProduct.qtyAvailable - productQtySelected
                console.log("Product Resultant:", productResultant);
                await updateQtyInDB(addedProduct.id, productResultant);

            } catch (error) {
                console.log("Error en handleAddToCartClick.", error);
            }

        }
    }

    // Funcion que renderiza las reviews
    const renderReviews = () => {

        return reviewList.map((element) => (

            <Box key={element.id} display={"flex"} flexDirection={"row"} gap={2} mb={4} >

                <Box minWidth={"20%"} display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"start"} justifyContent={"center"}>
                    <VerifiedPurchase
                        name={element.user.username}
                        date={element.createdAt.slice(0, 10)}
                    ></VerifiedPurchase>
                    {/* <Divider sx={{ mt: 3, ml: 5}} width="200%"></Divider> */}
                </Box>

                <Stack width={"70%"} display={"flex"} flexDirection={"column"} alignContent={"start"} alignItems={"start"} justifyContent={"start"} key={element.id} spacing={2} mb={5} mt={5} >

                    <RatingComponentSimple rating={element.rating}></RatingComponentSimple >
                    <Typography>{element.opinion}</Typography>

                </Stack>


            </Box >

        ))

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

                <ProductImage
                    productImg={(product && product.product.imageURL)}
                />

                {/* <ProductImageCaroussel></ProductImageCaroussel> */}

                <ProductOptions

                    product={(product && product)}
                    name={(product && product.product.name)}
                    model={(product && product.product.model)}
                    brand={(product && product.product.brand)}
                    id={(product && product.id)}
                    sale={(product && product.onSale)}
                    salePerc={(product && product.salePercentage)}
                    price={(product && product.price)}
                    priceAfterDiscount={(product && product.priceAfterSale)}
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
                        sellerCompanyId={(product && product.sellerCompany.id)}
                        onQuantityChange={(getQuantity)}
                    />
                    <ShippingInfoButton />
                </Box>

            </Box>

            {/* <Divider /> */}

            <Box sx={{
                width: '100%', minHeight: 400, mt: '0%', mb: '3%',
            }}>

                <Box sx={{ minHeight: 50, mb: '3%' }}>

                    <TabSelectorX

                        itemList={([{ label: "Description", value: "1" }, { label: "Policy", value: "2" }])}
                        product={(product)}

                    ></TabSelectorX>

                </Box>

                <Typography variant="tab" color={"orange"} ml={2} > Reviews </Typography>

                <Divider sx={{ mb: '2%', mt: '2%' }} />

                <Box sx={{ minHeight: 50, mt: 4, ml: 5, mb: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    {reviewList ? renderReviews() :

                        <Box>
                            <Typography color={"#666666"} ml={2}> Be the first to Write a review !
                            </Typography>
                            <Button sx={{ ml: 1, mt: 3, }}>Write a review here ... </Button>
                        </Box>}

                </Box>

                <Typography variant="tab" color={"orange"} ml={2} > Related Products</Typography>

                <Divider sx={{ mb: '2%', mt: '2%' }} />

                <Box sx={{ minHeight: 50, mb: '2%', mt: '4%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                    <RelatedProductsCarousel

                        key={productVersionId}
                        productList={(products)}
                        productSelectedCat={(product && product.product.productCategoryId)}
                        productSelectedId={(product && product.productId)}
                        priceAfterSale={(product && product.priceAfterSale)}

                    />
                </Box>

            </Box>

        </Container>
    )

}

export default ProductPage