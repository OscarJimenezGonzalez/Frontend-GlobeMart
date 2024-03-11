import React from 'react';
import { Box } from '@mui/material';
import loadingGif from '../../../assets/images/loadingOrange.gif';
import loading from '../../../assets/images/loading.gif';


export default function LoadingAnimation() {

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px', overflow: 'hidden' }}>
            <img src={loadingGif} alt={"animation.gif"} style={{ width: '30%', height: 'auto' }} />
        </Box>
    );
}

