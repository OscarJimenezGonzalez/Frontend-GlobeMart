import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Divider } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useState, useEffect } from 'react';
import { createOwnReview } from '../../../services/productReviewService';

export default function RatingNotGiven({ productVersionId, reFetchReviewsInFather, checkForLoggin, isLogged }) {

    const [rating, setRating] = useState(0);
    const [commentOn, setCommentOn] = useState(false)
    const [successComment, setSuccessComment] = useState(false)
    const [opinion, setOpinion] = useState("")

    const resetRating = () => {

        setRating(0)

    }

    const commentSaved = () => {

        return (
            <Box
                sx={{
                    mt: 2,
                    p: 1,
                    ml: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px', // 
                }}
            >
                <Typography
                    variant="body2"
                    sx={{ display: 'flex', alignItems: 'center', color: '#4caf50' }}
                >
                    <AssignmentTurnedInIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
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
        resetRating()

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

            {successComment && commentSaved()}

            <Box sx={{ px: 2, py: 3, mb: 2, borderRadius: 4, width: "100%", alignItems: "center" }} display={"flex"} flexDirection={"row"} >

                {!commentOn &&
                    <Button
                        onClick={() => {

                            checkForLoggin()
                            if (isLogged) {

                                setCommentOn(true)

                            }

                        }}
                        mb={1}
                        variant="containedSecondary"
                        color={"primary.main"}>
                        Rate this product here!
                    </Button>}

                <Box>

                    {
                        commentOn && <Box mb={3} >
                            <Rating
                                sx={{ mb: 2 }}
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                    setCommentOn(true)

                                }}
                            />
                            <TextField
                                label="Comentario"
                                multiline
                                rows={3}
                                placeholder="Write your comment here..."
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 1 }}
                                // value=""
                                onChange={(e) => setOpinion(e.target.value)}

                            />

                            <Button variant="contained" onClick={submitComment}>Submit Review</Button>
                            <Button
                                sx={{ ml: 1 }}
                                onClick={() => {
                                    resetRating();
                                    setCommentOn(false)
                                }}>
                                Cancel
                            </Button>

                        </Box>
                    }
                </Box>


            </Box>

        </Box >
    );
}