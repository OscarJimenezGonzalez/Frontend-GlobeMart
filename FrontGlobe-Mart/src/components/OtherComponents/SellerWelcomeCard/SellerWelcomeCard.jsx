import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { benefitsJoining } from '../../../auxStr/auxStructures';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import { useState, useContext } from 'react';
import { mainContext } from '../../../contexts/mainContext';

export default function SellerWelcomeCard() {

    const navigate = useNavigate()
    const { mainData, setMainData } = useContext(mainContext)

    const activateSeller = () => {

        setMainData(prevData => ({
            ...prevData,
            joiningFromSellerIntro: true
        }))
        navigate("/SignUp")
    }

    const renderBenefits = () => {

        return (

            benefitsJoining.map((element) =>

                <Grid item xs={12} sm={12} md={6} key={element.id} sx={{ mb: 3 }}>
                    <Card sx={{ minHeight: 100, p: 3 }}>
                        <Typography>{element.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{element.description}</Typography>
                    </Card>
                </Grid>

            )

        )

    }

    return (
        <Card sx={{ maxWidth: 1000, minHeight: 500, overflow: 'hidden' }}>
    
                <CardMedia
                    onClick={() => { scrollTo(500, 500) }}
                    component="img"
                    alt=""
                    sx={{
                        height: 450,
                        width: 1,
                        objectFit: 'cover',
                    }}
                    image="src\assets\images\AdImages\photo4.png"

                />

                <CardContent>

                    <Grid container spacing={2} sx={{ mb: 2, p: 2 }}>

                        <Grid item xs={12}>
                            <Typography variant="h5" component="div">
                                Become a seller !
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ mb: 4 }}>
                            <Typography variant="body2" color="text.primary">
                                Are you ready to take your business to the next level? Look no further!
                                GlobeMart is your ultimate destination for reaching a global audience
                                and maximizing your sales potential.
                            </Typography>
                        </Grid>

                        {renderBenefits()}

                    </Grid>

                </CardContent>

                <CardActions sx={{ mb: 6, ml: 4 }}>
                    <Button onClick={activateSeller} variant="contained" size="large">Join as a Seller!</Button>
                    <Button size="large">Learn More</Button>
                </CardActions>
        </Card >
    );
}
