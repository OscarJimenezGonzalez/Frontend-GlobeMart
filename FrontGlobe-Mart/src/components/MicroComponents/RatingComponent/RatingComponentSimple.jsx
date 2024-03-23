import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingComponentSimple({ rating }) {

    const ratingScore = parseFloat(rating)

    return (
        <Stack
            spacing={1}
        >
            <Rating name="rating-read" defaultValue={0} precision={0.5} value={ratingScore} readOnly />
        </Stack>
    );
}