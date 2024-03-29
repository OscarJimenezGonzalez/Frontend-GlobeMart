import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Linked from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from "react-router-dom";
import { Container } from '@mui/material';
import { login } from '../../../services/authService';
import { mainContext } from '../../../contexts/mainContext';
import { useContext, useState } from 'react';
import { validateEmail } from '../../../auxStr/auxStructures';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}<Linked color="inherit" href="#">Globe-Mart </Linked>{new Date().getFullYear()}.
        </Typography>
    );
}

export default function LogInForm() {

    let navigate = useNavigate()
    const { mainData, setMainData } = useContext(mainContext)
    const [errorSt, setErrorSt] = useState('');

    const loggingIn = async () => {

        setMainData(prevData => ({
            ...prevData,
            logged: true
        }))
        navigate(-1)
        scrollTo(0, 0)
        // lo usamos para volver a la pagina anterior. 
    }
    const handleSubmit = async (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        const password = data.get('password')

        if (!validateEmail(email)) {
            setErrorSt("Email is not valid")
            return
        }

        if (email && password) {  // Si están rellenos Email y Password haz la solicitud a la API.

            try {

                const response = await login({ email, password });

                if (response) {  // Si la api nos devuelve una respuesta exitosa, redirigimos a la página principal.

                    await loggingIn()
                    console.log(response)
                    console.log("Login successful");
                    // console.log(response.error)

                }

            } catch (error) {   // Si la peticion no nos devuelve una respuesta exitosa escribimos el error en el form.

                console.error("Error during login:", error);
                setErrorSt("Email Or Password Incorrect")


            }

        } else {    // Si no están rellensos Email y Password devuelve un error escrito en el form.

            setErrorSt("Email and password are required")

        }

    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="off"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="off"
                    />

                    {errorSt && <Typography variant="body2" color="error">{errorSt}</Typography>}

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Linked href="#" variant="body2">
                                Forgot password?
                            </Linked>
                        </Grid>
                        <Grid item>
                            <Linked component={Link} to="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Linked>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}