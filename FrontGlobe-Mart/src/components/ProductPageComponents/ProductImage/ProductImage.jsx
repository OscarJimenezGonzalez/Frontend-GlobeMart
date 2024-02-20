import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PendingIcon from '@mui/icons-material/Pending';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';


export default function ProductImage({ productImg }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <Card sx={{ width: "35%", height: "auto", maxHeight: 435, backgroundColor: "#f5f5f5", position: 'relative' }}>
            <CardMedia
                onClick={handleOpen}
                component="img"
                alt={"Loading Image..."}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                image={productImg ? productImg : 'https://source.unsplash.com/random'}

            />
            <Box sx={{ position: 'absolute', bottom: 0, right: 0, p: 2 }}>
                <IconButton onClick={handleOpen} sx={{ color: 'primary.main', backgroundColor: '#f5f5f5', ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' } }}>
                    <ZoomInIcon />
                </IconButton>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: 400,
                    maxWidth: 700,
                    minHeigth: 600,
                    maxHeigth: 700,
                    bgcolor: 'background.paper',
                    // border: '1px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <CardMedia
                        component="img"
                        alt={"Loading Image..."}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        image={productImg}
                    />
                </Box>

            </Modal>

        </Card >

    );

}

