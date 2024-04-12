import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Box, Grid, Typography, Button, IconButton, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createProducts } from '../../../services/productService'
import productCategories from '../../../auxStr/productCategories'
import OptionSelectorBig from '../../MicroComponents/OptionSelectorBig/OptionSelectorBig'
function AddNewProductStructure() {

    const [createdProduct, setCreatedProduct] = useState({})
    const [pCategory, setPCategory] = useState("")

    const saveProductInfo = async (event) => {

        console.log("Submit Form Working !")

        event.preventDefault();
        const data = new FormData(event.currentTarget)

        const name = data.get('name')
        const model = data.get('model')
        const brand = data.get('brand')
        const imageURL = data.get('imageURL')
        const productCategoryId = data.get('productCategoryId')

        if (!name || !model || !brand || !imageURL || !productCategoryId) {

            console.log("Field missing! ")
            return
        }

        try {

            const productBody = {
                name: String(name),
                model: String(model),
                brand: String(brand),
                imageURL: String(imageURL),
                productCategoryId: Number(productCategoryId)
            }

            console.log("wdfskdflsf")
            const response = await createProducts(productBody)
            console.log(response, "product Created")

            if (!response) {

                console.log("Product couldnt be created.")

            } else {

                console.log(response, "Product Created Successfully.")
                setCreatedProduct(response)
            }

        } catch (error) {

            console.log("Error!")

        }

    }


    return (

        // En este formulario creamos además del producto, una primera versión.

        <Box component="form" noValidate sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2, p: 5 }} onSubmit={saveProductInfo}>

            <Typography m={1} variant='h5' color="primary">Add new products </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        // onChange={cleanErrorCompany}
                        variant="outlined"
                        required
                        fullWidth
                        name="name"
                        label="Product name"
                        type="string"
                        id="name"
                        autoComplete="off"
                        defaultValue={`${""}`}
                        InputProps={{
                            style: {
                                backgroundColor: 'white', // Establece el fondo en blanco
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        // onChange={cleanErrorCompany}
                        variant="outlined"
                        required
                        fullWidth
                        name="model"
                        label="model"
                        type="string"
                        id="model"
                        autoComplete="off"
                        defaultValue={`${""}`}
                        InputProps={{
                            style: {
                                backgroundColor: 'white', // Establece el fondo en blanco
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        // onChange={cleanErrorCompany}
                        variant="outlined"
                        required
                        fullWidth
                        name="brand"
                        label="brand"
                        type="string"
                        id="brand"
                        autoComplete="off"
                        defaultValue={`${""}`}
                        InputProps={{
                            style: {
                                backgroundColor: 'white', // Establece el fondo en blanco
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        // onChange={cleanErrorCompany}
                        variant="outlined"
                        required
                        fullWidth
                        name="imageURL"
                        label="imageURL"
                        type="string"
                        id="imageURL"
                        autoComplete="off"
                        defaultValue={`${""}`}
                        InputProps={{
                            style: {
                                backgroundColor: 'white', // Establece el fondo en blanco
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>

                    <OptionSelectorBig

                        selectedOption={setPCategory}
                        optionList={productCategories}
                        titleLabel={""}

                    />

                </Grid>

                {/* A partir de aqui es formulario de la versión  */}
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField
                        // onChange={cleanErrorCompany}
                        variant="outlined"
                        required
                        fullWidth
                        name="Price"
                        label="Price"
                        type="amount"
                        id="price"
                        autoComplete="off"
                        // defaultValue=
                        InputProps={{
                            style: {
                                backgroundColor: 'white', // Establece el fondo en blanco
                            },
                        }}

                    />

                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField
                        // onChange={cleanErrorCompany}
                        variant="outlined"
                        required
                        fullWidth
                        name="onSale"
                        label="on Sale"
                        type="string"
                        id="onSale"
                        autoComplete="off"
                        defaultValue={`${""}`}
                        InputProps={{
                            style: {
                                backgroundColor: 'white', // Establece el fondo en blanco
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        // onChange={cleanErrorCompany}
                        variant="outlined"
                        required
                        fullWidth
                        name="productCategoryId"
                        label="productCategoryId"
                        type="string"
                        id="productCategoryId"
                        autoComplete="off"
                        defaultValue={`${""}`}
                        InputProps={{
                            style: {
                                backgroundColor: 'white', // Establece el fondo en blanco
                            },
                        }}
                    />
                </Grid>




                <Grid item xs={12}>
                    Error Rendering Space
                    {/* {errorCompany && renderCompanyError()} */}
                </Grid>

            </Grid>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
            >
                Create Product !
            </Button>
        </Box>

    )
}


export default AddNewProductStructure