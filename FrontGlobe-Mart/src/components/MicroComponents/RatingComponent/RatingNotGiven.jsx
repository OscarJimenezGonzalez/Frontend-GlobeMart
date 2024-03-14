import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Divider } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useState, useEffect } from 'react';
import { createOwnReview } from '../../../services/productReviewService';
// import Divider from '@mui/material/';

export default function RatingNotGiven({ productVersionId, reFetchReviewsInFather }) {

    const [rating, setRating] = useState(0);
    const [commentOn, setCommentOn] = useState(false)
    const [successComment, setSuccessComment] = useState(false)
    const [opinion, setOpinion] = useState("")

    const commentSaved = () => {

        return (
            <Box
                sx={{
                    mt: 2, // Espacio superior para no pegarse al elemento anterior
                    p: 1, // Un poco de padding para no estar tan ajustado
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0', // Un gris muy suave
                    borderRadius: '4px', // Bordes ligeramente redondeados
                }}
            >
                <Typography
                    variant="body2" // Un tamaño de letra más estándar y sutil
                    sx={{ display: 'flex', alignItems: 'center', color: '#4caf50' }} // Un color discreto para el texto
                >
                    <AssignmentTurnedInIcon sx={{ fontSize: '1rem', mr: 0.5 }} /> {/* Icono más pequeño y con menos margen */}
                    Comment saved!
                </Typography>
            </Box>
        )

    }

    const submitComment = async () => {

        setCommentOn(false)
        setSuccessComment(true)
        setTimeout(() => {
            setSuccessComment(false)
        }, 2000)

        try {

            const productSellerCompanyId = productVersionId

            const review = await createOwnReview({

                opinion,
                rating,
                productSellerCompanyId,

            })

            if (review) {

                console.log("review created.", review)

            }

        } catch (error) {

            console.log(error, "error creating Review in Frontend.")

        }

        reFetchReviewsInFather()

    }

    useEffect(() => {


        // console.log("opinion", opinion)
        // console.log(value, "value")


    }, [opinion])


    return (
        <Box

            sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                '& > legend': { mt: 2 },
            }}
        >

            {/* <Divider sx={{ mx: "auto", width: "30%", my: 3 }}></Divider> */}

            {!commentOn && <Typography variant="subtitle1" color={"primary.main"}>Rate this product here!</Typography>}

            <Rating

                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                    setCommentOn(true)
                }}
            />

            {
                commentOn && <Box >

                    <TextField
                        label="Comentario"
                        multiline
                        rows={4} // Ajusta el número de líneas según necesites
                        placeholder="Write your comment here..."
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 1 }}
                        // value=""
                        onChange={(e) => setOpinion(e.target.value)}

                    />

                    <Button onClick={submitComment}>Submit Review</Button>

                </Box>
            }

            {successComment && commentSaved()}

        </Box >
    );
}