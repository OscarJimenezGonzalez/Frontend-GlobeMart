import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function RatingComponent({ opinionNumber, ratingAverage, backgroundColor }) {

    const ratingAverageFixed = parseFloat(ratingAverage)

    return (
        <Stack
            spacing={1}
            backgroundColor={backgroundColor}
            borderRadius={3}
            height={150}
            width={170}
            sx={{display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center"}}
        >
            <Box>
                <Typography variant="h4" component="legend">{ratingAverage}</Typography>
                <Rating name="rating-read" defaultValue={0} precision={0.5} value={ratingAverageFixed} readOnly />
                <Typography variant="body2" component="legend">{opinionNumber} opinions</Typography>
            </Box>
        </Stack>
    );
}