import { Box, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from "react";
import { mainContext } from "../../../contexts/mainContext";
import { mainTheme } from "../../../themes/mainTheme";
import { darkTheme } from "../../../themes/darkTheme";

function Footer() {

    const { mainData, setMainData } = useContext(mainContext)
    const theme = useTheme()

    const backgroundColor = mainData.themeMode === mainTheme ? theme.palette.primary.main : theme.palette.background.brigther
    const footerElements = [{ name: 'PRIVACY', path: 'privacy' }, { name: 'CONTACT', path: 'contact' }, { name: 'ABOUT', path: 'about' }, { name: 'FAQs', path: 'faqs' }]
    const footerArrElements = footerElements.map((element) => {

        return (
            <Box key={element.name}>
                <Typography variant="body1"><Link style={{ textDecoration: 'none', color: '#fff' }} to={element.path}>{element.name}</Link></Typography>
            </Box >
        )

    })

    return (

        <Box
            backgroundColor="#1E1E1E"
            color="#fff"
            sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '100px', height: '100px'
            }}>
            <Box sx={{ display: 'flex', color: '#fff', justifyContent: 'space-between', alignItems: 'center', gap: '70px' }}>
                <Box>
                    <Typography variant="body1"><strong>Globe-Mart © 2024</strong></Typography>
                </Box>
                {footerArrElements}
            </Box>

            <Box sx={{ display: 'flex', gap: '30px' }}>
                <InstagramIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <GitHubIcon fontSize="large" />
            </Box>

        </Box>
    )
}

export default Footer