import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import AppBar from "../components/StructuralComponents/AppBar/AppBar"
import Footer from "../components/StructuralComponents/Footer/Footer"

export default function Root() {
    return (
        <Box>
            <AppBar />
                <Outlet />
            <Footer />
        </Box>
    )
}