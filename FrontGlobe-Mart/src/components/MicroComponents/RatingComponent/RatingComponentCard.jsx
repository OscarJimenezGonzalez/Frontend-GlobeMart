import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography, Box } from '@mui/material';

export default function RatingComponentCard({ rating, numberOfRates }) {

    const ratingScore = parseFloat(rating)

    return (
        <Stack
            ml={-0.5}
            spacing={1}

        >
            <Box display={'flex'} alignContent={'center'} alignItems={'center'}>
                <Rating size="small" name="rating-read" defaultValue={0} precision={0.5} value={ratingScore} readOnly />
                <Typography variant='subtitle2' >&nbsp; ({numberOfRates}) </Typography>
            </Box>
        </Stack>
    );
}