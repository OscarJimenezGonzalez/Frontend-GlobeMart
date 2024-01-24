import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import Header from "../components/StructuralComponents/Header/Header"
import Footer from "../components/StructuralComponents/Footer/Footer"

export default function Root() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />
            <Box sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}