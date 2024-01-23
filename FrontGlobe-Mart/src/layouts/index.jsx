import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import Header from "../components/StructuralComponents/Header/Header"
import Footer from "../components/StructuralComponents/Footer/Footer"

export default function Root() {
    return (
        <Box>
            <Header />
                <Outlet />
            <Footer />
        </Box>
    )
}