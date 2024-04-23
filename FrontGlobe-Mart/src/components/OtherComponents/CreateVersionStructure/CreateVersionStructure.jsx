import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Box, Grid, Typography, Button, IconButton, TextField } from '@mui/material'
import { createProducts } from '../../../services/productService'
import { createVersionOfProduct } from '../../../services/productSellerService'
import productCategories from '../../../auxStr/productCategories'
import booleanOption from '../../../auxStr/booleanOption'
import OptionSelectorBig from '../../MicroComponents/OptionSelectorBig/OptionSelectorBig'
import GridTextField from '../../MicroComponents/GridTextField/GridTextField'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function CreateVersionStructure({ sellerCompanyData, listOfProducts }) {

    const [successCreating, setSuccessCreating] = useState(false)
    const [allProductsList, setAllProductList] = useState([])
    const [selectedProductId, setSelectedProductId] = useState(0)
    const [categorySelected, setCategorySelected] = useState(0)

    useEffect(() => {

        reMadeProductList(listOfProducts)

    }, [listOfProducts])

    const foundCategory = (listOfProducts, productId) => {

        const product = listOfProducts.find(element => element.id === productId);
        setCategorySelected((product ? product.productCategoryId : 0))
        return product ? product.productCategoryId : 0;

    }

    const [versionFormFields, setVersionFormFields] = useState({

        price: 0,
        onSale: false,
        salePercentage: 0,
        qtyAvailable: 0,
        productDescription: "",
        productId: 0,
        hasShoeSizes: false,
        hasClothingSizes: false,
        hasColorOption: false,

        // pCategory: foundCategory(listOfProducts, versionFormFields.productId),
    })


    useEffect(() => {

        console.log(versionFormFields)

    }, [versionFormFields])

    useEffect(() => {

        console.log("dfsdf", selectedProductId)
        foundCategory(listOfProducts, selectedProductId)
        console.log(categorySelected)

    }, [selectedProductId, categorySelected])


    const reMadeProductList = (listOfProducts) => {

        const reMadePList = listOfProducts.map((item) => ({

            id: item.id,
            text: item.name + (", ") + item.model,
            pCategory: item.productCategoryId

        }))

        reMadePList.sort((a, b) => {
            return a.text.localeCompare(b.text);
        });

        console.log(reMadePList)
        setAllProductList(reMadePList)

    }

    const createVersion = async () => {

        const sellerCompanyId = sellerCompanyData.id

        const productId = versionFormFields.productId
        const price = versionFormFields.price
        const onSale = versionFormFields.onSale
        const salePercentage = versionFormFields.salePercentage
        const qtyAvailable = versionFormFields.qtyAvailable
        const productDescription = versionFormFields.productDescription
        const hasColorOption = versionFormFields.hasColorOption

        const hasShoeSizes = categorySelected === 1 ? true : false
        const hasClothingSizes = categorySelected === 6 ? true : false

        const versionBody = {

            price: Number(price),
            onSale: onSale,
            salePercentage: Number(salePercentage),
            qtyAvailable: Number(qtyAvailable),
            productDescription: String(productDescription),
            hasShoeSizes: hasShoeSizes,
            hasClothingSizes: hasClothingSizes,
            hasColorOption: hasColorOption,
            sellerCompanyId: Number(sellerCompanyId),
            productId: productId

        }

        if (!price  || !qtyAvailable || !productDescription || !productId || !sellerCompanyId) {

            console.log("Field missing! ")
            return
        }

        try {

            const version = await createVersionOfProduct(versionBody)

            if (version) {

                console.log("VERSION Created Successfully.", version,)
                setSuccessCreating(true)

            }

            else {

                console.log("VERSION couldnt be created.")

            }

        } catch (error) {

            console.log("Error creating VERSION!")

        }

    }



    return (

        // En este formulario creamos además del producto, una primera versión.

        // <Box component="form" noValidate sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2, p: 5 }} onSubmit={createVersion}>
        <Box component="form" noValidate sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2, p: 5 }}>

            <Typography m={1} variant='h5' color="primary">Create new Versions of Products</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <OptionSelectorBig
                        itemList={allProductsList}
                        label={"Select an Existing Product"}
                        handleOptionSelected={(value) => {

                            setSelectedProductId(value)
                            setVersionFormFields(prevData => ({

                                ...prevData,
                                productId: value

                            }))

                        }}

                    ></OptionSelectorBig>

                </Grid>

                {/* Aqui empieza el formulario de la version */}

                <Grid item xs={12} sm={6}>
                    <GridTextField
                        textfieldType={"outlined"}
                        label={"Price"}
                        onInputChange={(value) => {

                            setVersionFormFields(prevData => ({

                                ...prevData,
                                price: value

                            }))

                        }}
                    >
                    </GridTextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <GridTextField
                        textfieldType={"outlined"}
                        label={"Quantity on Stock"}
                        onInputChange={(value) => {

                            setVersionFormFields(prevData => ({

                                ...prevData,
                                qtyAvailable: value

                            }))

                        }}
                    >
                    </GridTextField>

                </Grid>

                <Grid item xs={12} sm={4}>
                    <OptionSelectorBig
                        itemList={booleanOption}
                        label={"On Sale?"}
                        handleOptionSelected={(value) => {

                            setVersionFormFields(prevData => ({

                                ...prevData,
                                onSale: value

                            }))

                        }}

                    ></OptionSelectorBig>
                </Grid>
                {versionFormFields.onSale ?
                    <Grid item xs={12} sm={4}>
                        <GridTextField
                            textfieldType={"outlined"}
                            label={"Sale Percentage"}
                            onInputChange={(value) => {

                                setVersionFormFields(prevData => ({

                                    ...prevData,
                                    salePercentage: value

                                }))

                            }}
                        >
                        </GridTextField>
                    </Grid>
                    : null}


                <Grid item xs={12} sm={4}>
                    <OptionSelectorBig
                        itemList={booleanOption}
                        label={"Has the product color option?"}
                        handleOptionSelected={(value) => {

                            setVersionFormFields(prevData => ({

                                ...prevData,
                                hasColorOption: value

                            }))

                        }}

                    ></OptionSelectorBig>
                </Grid>
                <Grid item xs={12}>
                    <GridTextField
                        textfieldType={"outlined"}
                        label={"Product description"}
                        onInputChange={(value) => {

                            setVersionFormFields(prevData => ({

                                ...prevData,
                                productDescription: value

                            }))

                        }}
                    >
                    </GridTextField>

                </Grid>

                <Grid item xs={12}>
                    <Typography color={"error"}>Error Rendering Space</Typography>
                </Grid>

                <Grid item xs={12}>

                    {successCreating ? <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2, bgcolor: 'success.main', color: 'white', '&:hover': { bgcolor: 'success.dark' } }}
                        startIcon={<CheckCircleOutlineIcon />} // Agrega un icono de check para indicar éxito
                    >
                        Product Created Successfully
                    </Button>

                        :
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                            onClick={createVersion}
                        >
                            Create Product !
                        </Button>
                    }

                </Grid>

            </Grid>

        </Box >

    )
}


export default CreateVersionStructure