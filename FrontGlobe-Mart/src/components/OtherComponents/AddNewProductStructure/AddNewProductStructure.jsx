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
import CloudinaryComponent from '../CloudinaryComponent/CloudinaryComponent'

function AddNewProductStructure({ sellerCompanyData }) {

    // console.log(sellerCompanyData)

    const [createdProduct, setCreatedProduct] = useState({})
    const [successCreating, setSuccessCreating] = useState(false)
    const [imageURLs, setImageURLs] = useState('')
    const [formFields, setFormFields] = useState({

        name: "",
        model: "",
        brand: "",
        // imageURL: "",
        pCategory: "",

    })

    const [versionFormFields, setVersionFormFields] = useState({

        price: 0,
        onSale: false,
        salePercentage: 0,
        qtyAvailable: 0,
        productDescription: "",
        hasShoeSizes: false,
        hasClothingSizes: false,
        hasColorOption: false,

    })

    // const productCategoryTransformer = (category) => {

    //     switch (category) {
    //         case "footwear":
    //             return 1
    //         case "electronics":
    //             return 2
    //         case "toys":
    //             return 3
    //         case "mobile":
    //             return 4
    //         case "music":
    //             return 5
    //         case "clothing":
    //             return 6
    //         default:
    //             return 0
    //     }

    // }

    // useEffect(() => {

    //     console.log(formFields)

    // }, [formFields])


    // useEffect(() => {

    //     console.log(versionFormFields)

    // }, [versionFormFields])


    useEffect(() => {

        console.log("Image URL : ", imageURLs)
        console.log(formFields)
        console.log(versionFormFields)


    }, [imageURLs, formFields, versionFormFields])



    const saveProductInfo = async (event) => {

        console.log("Submit Form Working !")

        event.preventDefault();
        // const data = new FormData(event.currentTarget)

        const name = formFields.name
        const model = formFields.model
        const brand = formFields.brand
        // const imageURL = formFields.imageURL

        const imageURL = imageURLs

        const pCategory = formFields.pCategory

        if (!name || !model || !brand || !imageURL || !pCategory) {

            console.log("Field missing! ")
            return
        }

        try {

            const productBody = {
                name: String(name),
                model: String(model),
                brand: String(brand),
                imageURL: String(imageURL),
                productCategoryId: Number(pCategory)
            }

            const response = await createProducts(productBody)

            if (!response) {

                console.log("Product couldnt be created.")

            } else {

                console.log("Product Created Successfully.", response,)
                setCreatedProduct(response)
                await createVersion(response.id)
            }



        } catch (error) {

            console.log("Error!")

        }
    }

    const createVersion = async (productId) => {


        console.log("Id del producto en la funcion de la version: ", productId)

        const sellerCompanyId = sellerCompanyData.id

        const price = versionFormFields.price
        const onSale = versionFormFields.onSale
        const salePercentage = versionFormFields.salePercentage ? versionFormFields.salePercentage : 0  
        const qtyAvailable = versionFormFields.qtyAvailable
        const productDescription = versionFormFields.productDescription
        const hasColorOption = versionFormFields.hasColorOption

        const hasShoeSizes = formFields.pCategory === 1 ? true : false
        const hasClothingSizes = formFields.pCategory === 6 ? true : false

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

        if (!price || !onSale || !salePercentage || !qtyAvailable || !productDescription || !hasColorOption || !productId || !sellerCompanyId) {

            console.log("Field missing! In version ")
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

        <Box noValidate sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2, p: 5 }} onSubmit={saveProductInfo}>

            <Typography m={1} variant='h5' color="primary">Add new products</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <GridTextField
                        textfieldType={"outlined"}
                        label={"Product name"}
                        onInputChange={(value) => {

                            setFormFields(prevData => ({

                                ...prevData,
                                name: value

                            }))

                        }}
                    >
                    </GridTextField>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <GridTextField
                        textfieldType={"outlined"}
                        label={"Product model"}
                        onInputChange={(value) => {

                            setFormFields(prevData => ({

                                ...prevData,
                                model: value

                            }))

                        }}
                    >
                    </GridTextField>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <GridTextField
                        textfieldType={"outlined"}
                        label={"Product brand"}
                        onInputChange={(value) => {

                            setFormFields(prevData => ({

                                ...prevData,
                                brand: value

                            }))

                        }}
                    >
                    </GridTextField>

                </Grid>

                <Grid item xs={12} sm={6}>
                    {/* <GridTextField
                        textfieldType={"outlined"}
                        label={"ImageURL"}
                        onInputChange={(value) => {

                            setFormFields(prevData => ({

                                ...prevData,
                                imageURL: value

                            }))

                        }}
                    >
                    </GridTextField> */}

                </Grid>

                <Grid item xs={12}>

                    <OptionSelectorBig
                        itemList={productCategories}
                        label={"Product Category"}
                        handleOptionSelected={(value) => {

                            setFormFields(prevData => ({

                                ...prevData,
                                pCategory: value

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
                    <CloudinaryComponent
                        onUpload={(url) => { setImageURLs(url) }}
                    ></CloudinaryComponent>

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
                            onClick={saveProductInfo}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Create Product !
                        </Button>
                    }

                </Grid>

            </Grid>

        </Box >

    )
}


export default AddNewProductStructure