import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import Header from "../components/StructuralComponents/Header/Header"
import Footer from "../components/StructuralComponents/Footer/Footer"

export default function Root() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: 0

        }}>
            <Header />
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', marginTop: "200px" }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}