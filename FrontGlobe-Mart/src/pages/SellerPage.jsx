import React from 'react'
import { Box } from '@mui/system'
import { getSellerCompany } from '../services/sellerCompanyService/'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Divider, Card, Typography, Button } from '@mui/material'
import TabSelector from '../components/MicroComponents/TabSelector/TabSelector.jsx'

const tabList = [
    { label: "Products", value: "1" },
    { label: "Shipping and Returns", value: "2" },
    { label: "Seller Info", value: "3" }
]


function SellerPage() {

    const { sellerCompanyId } = useParams()
    const [sellerCompany, setSellerCompany] = useState({})

    const [productClick, setProductClick] = useState(false)
    const [shippingClick, setShippingClick] = useState(false)
    const [sellerInfoClick, setSellerInfoClick] = useState(false)

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


    return (

        <Box sx={{ width: "100%", height: "100%", mx: 4, mb: 4, display: "flex", justifyContent: "start", flexDirection: "column", }} >

            <Box sx={{ mb: 6, minHeight: 200, display: "flex", gap: 2 }}>
                <Card>
                    Seller Logo
                </Card>

                <Card>
                    Rating Component
                </Card>

                <Card>
                    Percentage Rating component
                    Si es mayor que 75% Valoraciones positivas.
                </Card>

            </Box>

            <Divider></Divider>

            <TabSelector
                itemList={(tabList)}
                sellerCompany={sellerCompany}
            ></TabSelector>

            {/* <Box>
                <Button>Products</Button>
                <Button>Shipping and Returns</Button>
                <Button>Seller Info</Button>
            </Box>

            <Box>

                <Box></Box>
                <Box></Box>
                <Box></Box>

            </Box> */}




        </Box>

    )

}

export default SellerPage