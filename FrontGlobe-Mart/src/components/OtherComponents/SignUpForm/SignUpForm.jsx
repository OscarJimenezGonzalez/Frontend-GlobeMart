import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Linked from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signup } from '../../../services/authService';
import { createOwnSellerCompany } from '../../../services/sellerCompanyService';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Icon from '@mui/material/Icon';
import { mainContext } from '../../../contexts/mainContext';
import { validateEmail } from '../../../auxStr/auxStructures';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Linked component={Link} to={'/signup'} color="inherit" href="https://mui.com/">
                GlobeMart
            </Linked>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUpForm() {

    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [success, setSuccess] = useState(false)
    const { mainData, setMainData } = useContext(mainContext)
    const [errorSt, setErrorSt] = useState('')

    const cleanError = () => {
        setErrorSt('')
    }
    const handlePasswordRepeatChange = (e) => {
        setPasswordRepeat(e.target.value)
    }
    const renderUserForm = () => {

        return (<Box display={success ? 'none' : null} component="form" noValidate onSubmit={handleSubmitUser} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="off"
                        onChange={cleanError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="off"
                        onChange={cleanError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={cleanError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="passwordRepeat"
                        label="Repeat your Password"
                        type="password"
                        id="passwordRepeat"
                        autoComplete="off"
                        value={passwordRepeat}
                        onChange={handlePasswordRepeatChange}
                    />

                </Grid>
                <Grid item xs={12}>
                    {errorSt && <Typography variant="body2" color="error">{errorSt}</Typography>}
                </Grid>


            </Grid>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>

            <Grid container justifyContent="center">
                <Grid item>
                    <Linked component={Link} to={'/login'} variant="body2">
                        Already have an account? Sign in
                    </Linked>
                </Grid>
            </Grid>
        </Box>
        )


    }
    const handleSubmitUser = async (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const username = data.get('username')
        const email = data.get('email')
        const password = data.get('password')
        const role = 'seller'

        if (!validateEmail(email)) {
            setErrorSt("Email is not valid")
            return
        }
        if (password !== passwordRepeat) {
            setErrorSt("Passwords don't match")
            return
        } else {
            cleanError()
        }
        if (password.length < 8) {
            setErrorSt("Password must be at least 8 characters long")
            return
        } else {
            cleanError()
        }
        if (email && password && username) {
            try {

                const response = await signup({
                    username,
                    email,
                    password,
                    role
                });

                console.log(response)

                setMainData(prevData => ({    // nos modifica la const logged de nuestro contexto principal. 
                    ...prevData,
                    logged: true
                }))

                setSuccess(true)
                console.log(mainData)

            } catch (error) {

                console.error("Error during login:", error);
                setErrorSt("Username or email already exists. Try another one.")

            }

        } else {
            setErrorSt("Please, you must fill all fields")
        }
    }
    const successUserForm = () => {

        return (

            <Box sx={{ textAlign: 'center', mt: 1 }}>
                <Typography variant="h6" gutterBottom>
                    Your account has been created successfully!
                </Typography>
                <CheckCircleIcon sx={{ fontSize: 120, color: 'green', mb: 2 }} />
                <Typography variant="body1" component="p">
                    Click <Link to={"/"}>here</Link> to continue to the main Page.
                </Typography>
            </Box>

        )

    }
    const lockTypo = () => {

        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} alt="Remy Sharp">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </Box>
        )
    }

    return (
        <Box sx={{ display: 'flex', mb: 2 }}>

            <Box
                sx={{
                    marginTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {success ? successUserForm() : lockTypo()}

                <Container component="main" maxWidth="xs">
                    <CssBaseline />

                    {renderUserForm()}

                    <Copyright sx={{ mt: 3 }} />
                </Container>
            </Box>

        </Box>

    );
}



