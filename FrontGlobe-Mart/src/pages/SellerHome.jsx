import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'
import { getOwnProfile } from '../services/userService.js'
import { getOwnSellerCompany } from '../services/sellerCompanyService'
import { getListOfProductsFromSellers, createVersionOfProduct } from '../services/productSellerService.js'
import { createProducts } from '../services/productService.js'
import SellerHomeSideBar from '../components/MicroComponents/SellerHomeSideBar/SellerHomeSideBar.jsx'

import SellerHomeStructure from '../components/OtherComponents/SellerHomeStructure/SellerHomeStructure.jsx'


// Page that Integrates Functionall info and data Just for seller use Purpose. 

function SellerHome() {

    const [userData, setUserData] = useState({})
    const [sellerCompanyData, setSellerCompanyData] = useState({})
    const [sellerProducts, setSellerProducts] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const userInfo = await getOwnProfile()
            if (userInfo) {

                setUserData(userInfo)

            }
            const sellerCompanyInfo = await getOwnSellerCompany()
            if (sellerCompanyInfo) {

                setSellerCompanyData(sellerCompanyInfo)

            }
            const sellerProductList = await getListOfProductsFromSellers(sellerCompanyInfo.id)

            if (sellerProductList) {

                setSellerProducts(sellerProductList)
            }

        }

        fetchData()

    }, [])

    useEffect(() => {

        console.log("userData", userData)
        console.log("sellerCo Data", sellerCompanyData)
        console.log("sellerProductList", sellerProducts)

    }, [userData, sellerCompanyData, sellerProducts])


    return (

        <>
            
            <SellerHomeStructure userData={userData} sellerCompanyData={sellerCompanyData} sellerProducts={sellerProducts} />
        </>

    )
}

export default SellerHome 