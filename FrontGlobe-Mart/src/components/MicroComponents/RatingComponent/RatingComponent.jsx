import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function RatingComponent({ sellerCompanyData }) {

    const sellerCompanyRating = parseFloat(sellerCompanyData.customerRating)

    return (
        <Stack
            spacing={1}
        >
            <Typography variant="h4" component="legend">{sellerCompanyData.customerRating}</Typography>
            <Rating name="rating-read" defaultValue={0} precision={0.5} value={sellerCompanyRating} readOnly />
            <Typography variant="body2" component="legend">{sellerCompanyData.opinionNumber} opinions</Typography>
        </Stack>
    );
}