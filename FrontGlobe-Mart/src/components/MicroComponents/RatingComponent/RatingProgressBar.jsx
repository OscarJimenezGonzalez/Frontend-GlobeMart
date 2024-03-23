import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

// Datos de ejemplo para las reseñas
const reviewData = [
    { stars: 5, count: 75 },
    { stars: 4, count: 21 },
    { stars: 3, count: 3 },
    { stars: 2, count: 0 },
    { stars: 1, count: 2 },
];

// Encuentra el máximo número de reseñas para calcular el porcentaje
const maxCount = Math.max(...reviewData.map((data) => data.count));

// Styled component para la barra de progreso
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? 'primary' : '#308fe8',
    },
}));

const ReviewProgressBars = () => {
    return (
        <Box width="25%" ml={3}>
            {reviewData.map((data, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                    <Typography variant="subtitle2" component="div" sx={{ minWidth: 64 }}>
                        {data.stars} stars
                    </Typography>
                    <BorderLinearProgress
                        variant="determinate"
                        value={data.count ? (data.count / maxCount) * 100 : 0}
                        sx={{ flexGrow: 1, mx: 2 }}
                    />
                    <Typography variant="body2" component="div" sx={{ minWidth: 35 }}>
                        {data.count}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default ReviewProgressBars;