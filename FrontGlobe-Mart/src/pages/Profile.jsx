import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getOwnProfile } from '../services/userService'
import { getOwnSellerCompany } from '../services/sellerCompanyService'
import { mainContext } from '../contexts/mainContext'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function Profile() {

    const [profileInfo, setProfileInfo] = useState([])
    const { mainData, setMainData } = useContext(mainContext)
    const [showRepPassWord, setShowRepPassWord] = useState(false)

    useEffect(() => {

        const fetchData = async () => {

            const profileData = await getOwnProfile();
            setProfileInfo(profileData)
            console.log("ddd", profileInfo)
        }

        fetchData()

    }, [mainData.logged])

    const renderRepPassWord = () => {
        return (
            <Grid item xs={12}>
                <TextField
                    variant="filled"
                    required
                    fullWidth
                    name="password"
                    label="repeat password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    defaultValue="******************"
                />
            </Grid>
        )

    }

    const renderProfileInfo = () => {

        return (

            <Box>
                <Typography>Profile</Typography>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                name="username"
                                label="username"
                                type="string"
                                id="username"
                                autoComplete="off"
                                defaultValue={`${profileInfo.username}`}
                            // defaultValue={userNameInfo()}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
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
                                onChange={() => setShowRepPassWord(true)}
                                variant="filled"
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

                        {showRepPassWord && renderRepPassWord()}

                    </Grid>

                    {/* <Grid item xs={12}>
                        {errorSt && <Typography variant="body2" color="error">{errorSt}</Typography>}
                    </Grid> */}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Update Info
                    </Button>

                </Box>
            </Box >)

    }

    return (
        <Box>
            {profileInfo.username && renderProfileInfo()}
        </Box>
    )


}


export default Profile