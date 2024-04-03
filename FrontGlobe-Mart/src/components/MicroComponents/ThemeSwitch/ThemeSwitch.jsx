import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export default function ThemeSwitch() {

    const [themeMode, setThemeMode] = useState("light")

    return (
        <Box
            sx={{
                display: 'flex',
                minWidth: '60px',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'primary.main',
                borderRadius: 0,
                p: 0,
                mr: 0
            }}
        > <IconButton

            sx={{ mr: 0.5, fontSize: '20px' }}
            onClick={() => { console.log("Hola!") }}
            color="inherit"

        >
                {themeMode === 'light' ? <Brightness4Icon fontSize='10'/> : <Brightness7Icon />}
            </IconButton>
            {themeMode}


        </Box>
    );

}

function ToggleColorMode() {

    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(

        () => ({

            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },

        }), []);

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <Box></Box>
    );
}