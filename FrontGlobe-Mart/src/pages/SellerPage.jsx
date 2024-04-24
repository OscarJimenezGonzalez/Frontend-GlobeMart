import React from 'react'
import { Box } from '@mui/system'
import { getSellerCompany } from '../services/sellerCompanyService/'
import { getListOfProductsFromSellers } from '../services/productSellerService.js'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Divider, Card, Typography, Button, CardMedia } from '@mui/material'
import TabSelector from '../components/MicroComponents/TabSelector/TabSelector.jsx'
import RatingComponent from '../components/MicroComponents/RatingComponent/RatingComponent.jsx'
import PercentageCircle from '../components/MicroComponents/PercentageCircle/PercentageCircle.jsx'
import BeenhereIcon from '@mui/icons-material/Beenhere';

const tabList = [
    { label: "Products", value: "1" },
    { label: "Shipping and Returns", value: "2" },
    { label: "Seller Info", value: "3" }
]


// Commercial page open to customers, to see seller products and other info. 

function SellerPage() {

    const { sellerCompanyId } = useParams()
    const [sellerCompany, setSellerCompany] = useState({})
    const [sellerProductList, setSellerProductList] = useState([])

    useEffect(() => {

        scrollTo(0, 0)

    }, [])

    /// Traer la info del vendedor con el Id del param. 
    useEffect(() => {


        const fetchData = async () => {
            const sellerCompanyData = await getSellerCompany(sellerCompanyId);
            console.log(sellerCompanyData)
            setSellerCompany(sellerCompanyData)
            return sellerCompanyData
        }

        fetchData()

    }, [sellerCompanyId])


    useEffect(() => {

        const fetchData = async () => {

            const sellerProducts = await getListOfProductsFromSellers(sellerCompanyId)
            console.log("Lista de Productos del Seller", sellerProducts)
            setSellerProductList(sellerProducts)
            return sellerProducts
        }
        fetchData()

    }, [sellerCompanyId])


    const renderSellerGeneralRating = () => {

        if (sellerCompany.customerRating > 4) {
            return (
                <Box m={3}>
                    <Typography variant="h6">Excellent Seller!<BeenhereIcon sx={{ color: "green", mx: 2 }}></BeenhereIcon></Typography>
                </Box>)
        }

    }

    return (

        <Box sx={{ width: "100%", height: "100%", mx: 4, mb: 4, display: "flex", justifyContent: "start", flexDirection: "column", py: 3, px: 3 }} >

            <Typography variant="h5" color="primary" mb={4} mt={4}>{sellerCompany.name}</Typography>

            <Box sx={{ mb: 6, minHeight: 200, display: "flex", gap: 2 }}>

                <Box sx={{ maxWidth: 400, minWidth: 200 }} >
                    <CardMedia sx={{ height: '100%', width: '100%' }} image={sellerCompany.logoURL}>
                    </CardMedia>
                </Box>

                <Box
                    display={"flex"}
                    sx={{ maxWidth: 400, minWidth: 200 }}
                    spacing={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignContent={"center"}>

                    <RatingComponent

                        opinionNumber={(sellerCompany.opinionNumber)}
                        ratingAverage={(sellerCompany.customerRating)}
                        backgroundColor={"white"}

                    ></RatingComponent>

                </Box>

                <Box display={"flex"}
                    sx={{ maxWidth: 400, minWidth: 200 }}
                    spacing={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignContent={"center"}>

                    <PercentageCircle sellerCompanyData={(sellerCompany)}></PercentageCircle>

                    {renderSellerGeneralRating()}


                </Box>

            </Box>

            {/* <Divider></Divider> */}
            <Box p={2}>

                <TabSelector

                    sellerProducts={(sellerProductList && sellerProductList)}
                    itemList={(tabList)}
                    element={(sellerCompany)}

                ></TabSelector>

            </Box>

        </Box>

    )

}

export default SellerPage