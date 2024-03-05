import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3B4FB7',
            // fixed: '#74F8E5',
            // fixedVariant: '#005048'
        },
        secondary: {
            main: '#29D1CA',
            // fixedDim: '#FABD00',
            // fixedVariant: '#5B4300'
        },
        terciary: {
            main: '#CCE5FF',
            onContainer: '#001E31'
        },
        background: {
            default: '#FFFFFF'
        },
        text: {
            primary: '#00201C',
        }
    },

    typography: {
        h3: {
            fontSize: '3rem', // Ejemplo: 48px
            fontWeight: 400,
            letterSpacing: '0.0em',
        },
        h4: {
            fontSize: '2.125rem', // Ejemplo: 34px
            fontWeight: 400,
            letterSpacing: '0.025em',
        },
        h5: {
            fontSize: '1.5rem', // Ejemplo: 24px
            fontWeight: 400,
            letterSpacing: '0.0em',
        },
        h6: {
            fontSize: '1.25rem', // Ejemplo: 20px
            fontWeight: 200, // Peso medio para más prominencia, similar al de los Tabs
            letterSpacing: '0.015em',
            // textTransform: 'uppercase',
        },
        tab: {
            fontSize: '0.90rem', // Ejemplo: 20px
            fontWeight: 400, // Peso medio para más prominencia, similar al de los Tabs
            letterSpacing: '0.015em',
            textTransform: 'uppercase', // Los tabs suelen tener texto en mayúscula

        },
        subtitle1: {
            fontSize: '1rem', // Ejemplo: 16px
            fontWeight: 400,
            letterSpacing: '0.015em',
        },
        subtitle2: {
            fontSize: '0.875rem', // Ejemplo: 14px
            fontWeight: 500,
            letterSpacing: '0.01em',
        },
        subtitleRef: {
            fontSize: '0.90rem', // Ejemplo: 20px
            fontWeight: 400, // Peso medio para más prominencia, similar al de los Tabs
            letterSpacing: '0.015em',

        },
        // Añade aquí más variantes si es necesario
    },
    // Otras configuraciones de tema si es necesario
});


