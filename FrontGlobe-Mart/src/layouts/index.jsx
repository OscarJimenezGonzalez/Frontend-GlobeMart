import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import Header from "../components/StructuralComponents/Header/Header"
import Footer from "../components/StructuralComponents/Footer/Footer"
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Root() {

    const isMediumScreen = useMediaQuery('(min-width: 1000px)')
    const isSmallScreen = useMediaQuery('(min-width: 650px)')
    const isTinyScreen = useMediaQuery('(min-width: 400px)')

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
        }}>
            <Header />
            <Box sx={{ backgroundColor: 'background.default', flex: 1, display: 'flex', justifyContent: 'center', marginTop: 0 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}