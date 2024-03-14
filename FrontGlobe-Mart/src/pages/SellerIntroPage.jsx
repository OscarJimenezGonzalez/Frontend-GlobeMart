import { Box } from '@mui/system'
import React from 'react'
import SellerWelcomeCard from '../components/OtherComponents/SellerWelcomeCard/SellerWelcomeCard'

function SellerWelcomePage() {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 10, mx: 10 }}>

            <SellerWelcomeCard></SellerWelcomeCard>

        </Box>
    )
}

export default SellerWelcomePage