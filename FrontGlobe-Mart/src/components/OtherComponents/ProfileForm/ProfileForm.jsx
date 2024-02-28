import React from 'react'
import { useEffect, useState, useContext } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Divider } from '@mui/material';
import { validateEmail } from '../../../auxStr/auxStructures';
import { getOwnProfile, updateOwnProfile } from '../../../services/userService'
import { getOwnSellerCompany, updateOwnSellerCompany } from '../../../services/sellerCompanyService';

export default function ProfileForm() {

    const [profileInfo, setProfileInfo] = useState([])
    const [companyInfo, setCompanyInfo] = useState([])

    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [showRepPassword, setShowRepPassword] = useState(false)

    const [isSeller, setIsSeller] = useState(false)
    const [successUser, setSuccessUser] = useState(false)
    const [successCompany, setSuccessCompany] = useState(false)
    const [errorUser, setErrorUser] = useState('')
    const [errorCompany, setErrorCompany] = useState('')


    useEffect(() => {
        const fetchData = async () => {

            const profileData = await getOwnProfile();
            setProfileInfo(profileData)

            if (profileData.role === "seller") {
                setIsSeller(true)
            }
            console.log("is seller? ", isSeller)

        }

        fetchData()

    }, [isSeller])

    useEffect(() => {

        const fetchData = async () => {

            const companyData = await getOwnSellerCompany();
            setCompanyInfo(companyData)

        }

        fetchData()

    }, [isSeller])

    // Auxiliary functions
    const renderUserError = () => {

        return (<>
            <Typography variant="body2" color="error">{errorUser}</Typography>
        </>
        )
    }
    const renderCompanyError = () => {

        return (<>
            <Typography variant="body2" color="error">{errorCompany}</Typography>
        </>
        )
    }
    const cleanError = () => {
        setErrorUser('')
        setSuccessUser(false)
    }
    const cleanErrorCompany = () => {
        setErrorCompany('')
        setSuccessCompany(false)
    }
    const activateRepPassword = () => {

        cleanError()
        setShowRepPassword(true)

    }
    const handlePasswordRepeatChange = (e) => {
        setPasswordRepeat(e.target.value)
    }
    const successUpdating = () => {
        return (

            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignContent: "center", alignItems: "center" }}>

                <Typography variant="body2" color="green">
                    Your profile has been updated
                </Typography>
                <CheckCircleIcon sx={{ color: "green" }} />

            </Box >

        )
    }
    //**** End Auxiliary functions

    // API request functions
    const updateUserInfo = async (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const username = data.get('username')
        const email = data.get('email')
        // const password = data.get('password')

        if (!validateEmail(email)) {
            setErrorUser("Email is not valid")
            return
        }
        if (!email || !username) {
            setErrorUser("Please, you must fill all fields.")
            return
        }

        //Aqui se hace la llamada a la API

        try {

            const response = await updateOwnProfile({
                username,
                email,
            });

            if (response) {

                console.log(response)
                setSuccessUser(true)

            } else {
                await setErrorUser("There is already a user with that username or email.");
                console.log("Unexpected Error.")
            }

        } catch (error) {

            console.error("Error during login:", error);
            await setErrorUser("Error during login:")

        }

    }
    const updateSellerInfo = async (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget)

        const name = data.get('companyName')
        const cif = companyInfo.cif
        const location = data.get('companyLocation')

        cleanError();

        if (!name || !location || !cif) {
            setErrorCompany("Please fill all the fields");
            return; // Salir de la función si no se han llenado todos los campos
        }

        try {

            const response = await updateOwnSellerCompany({ name, location })

            if (response) {

                console.log("Company Data was updated successfully:");
                setSuccessCompany(true)

            } else {
                console.log("Unexpected Error.")
                await setErrorCompany("There is already a company with that name.");
            }

        } catch (error) {

            console.error("Error during profile update:", error);
            await setErrorCompany("Error during profile update:");
        }

    }
    //**** End API request functions
    //Structural component functions
    const renderRepPassword = () => {
        return (
            <Grid item xs={12}>
                <TextField
                    variant="filled"
                    required
                    fullWidth
                    name="repeatpassword"
                    label="repeat password"
                    type="password"
                    id="repeatpassword"
                    autoComplete="off"
                    defaultValue="******************"
                    onChange={handlePasswordRepeatChange}
                />
            </Grid>
        )
    }
    const renderUserInfo = () => {

        return (

            <Box component="form" noValidate sx={{ mt: 3, mb: 8, width: "50vw" }} onSubmit={updateUserInfo}>

                <Typography sx={{ mb: 3 }}>Welcome to your profile, {profileInfo.username}</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            onChange={cleanError}
                            variant="filled"
                            required
                            fullWidth
                            name="username"
                            label="username"
                            type="string"
                            id="username"
                            autoComplete="off"
                            defaultValue={`${profileInfo.username}`}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={cleanError}
                            variant="filled"
                            required
                            fullWidth
                            name="email"
                            label="email"
                            type="string"
                            id="email"
                            autoComplete="off"
                            defaultValue={`${profileInfo.email}`}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={activateRepPassword}
                            variant="filled"
                            disabled
                            required
                            fullWidth
                            name="password"
                            label="password"
                            type="password"
                            id="password"
                            autoComplete="off"
                            defaultValue="******************"
                        />
                    </Grid>

                    {showRepPassword && renderRepPassword()}

                    <Grid item xs={12}>
                        {errorUser && renderUserError()}
                    </Grid>

                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Update Profile
                </Button>

                {successUser && successUpdating()}

                <Divider sx={{ mt: 3, mb: 3 }} />

            </Box>
        )

    }
    const renderSellerInfo = () => {
        return (

            <Box component="form" noValidate sx={{ mt: 3, mb: 12, width: "50vw" }} onSubmit={updateSellerInfo}>

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography> Your seller company profile data:  </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            onChange={cleanErrorCompany}
                            variant="filled"
                            required
                            fullWidth
                            name="companyName"
                            label="company name"
                            type="string"
                            id="companyName"
                            autoComplete="off"
                            defaultValue={`${companyInfo.name}`}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={cleanErrorCompany}
                            variant="filled"
                            required
                            fullWidth
                            name="companyLocation"
                            label="company location"
                            type="string"
                            id="companyLocation"
                            autoComplete="off"
                            defaultValue={`${companyInfo.location}`}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            onChange={cleanErrorCompany}
                            variant="filled"
                            disabled
                            required
                            fullWidth
                            name="cif"
                            label="cif"
                            type="string"
                            id="cif"
                            autoComplete="off"
                            defaultValue={`${companyInfo.cif}`}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        {errorCompany && renderCompanyError()}
                    </Grid>

                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                >
                    Update Company
                </Button>

                {successCompany && successUpdating()}

            </Box>
        )
    }
    //**** End Structural component functions

    return (
        <Box>
            {(profileInfo && Object.keys(profileInfo).length > 0) && renderUserInfo()}
            {(isSeller && companyInfo && Object.keys(companyInfo).length > 0) && renderSellerInfo()}
        </Box>
    )

}
