import React, { useEffect } from 'react'
import UserTypeCard from '../components/MicroComponents/UserTypeCard/UserTypeCard'
import SignUpForm from '../components/OtherComponents/SignUpForm/SignUpForm'
import SignUpFormSeller from '../components/OtherComponents/SignUpFormSeller/SignUpFormSeller'
import { Box } from '@mui/material'
import { useState, useContext } from 'react';
import { mainContext } from '../contexts/mainContext'


function SignUpPage() {

    const [formType, setFormType] = useState('')
    const { mainData, setMainData } = useContext(mainContext)

    useEffect(() => {

        scrollTo(0, 0)

        if (mainData.joiningFromSellerIntro) {

            setFormType("seller")

        }

    }, [])

    const handleCustomerFormTypeButton = () => {

        setFormType('customer')

    }
    const handleSellerFormTypeButton = () => {

        setFormType('seller')

    }

    const renderFormType = () => {

        switch (formType) {
            case 'customer':
                return <SignUpForm />
            case 'seller':
                return <SignUpFormSeller />
            default:
                return <UserTypeCard
                    handleCustomerClick={handleCustomerFormTypeButton}
                    handleSellerClick={handleSellerFormTypeButton}
                />
        }

    }

    return (

        <Box sx={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', margin: '40px' }}>
            {renderFormType()}
        </Box>

    )
}

export default SignUpPage