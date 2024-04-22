import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CancelIcon from '@mui/icons-material/Cancel';

const Input = styled('input')({
    display: 'none',
});

const CloudinaryComponent = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Por favor, selecciona una imagen para subir.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'rqzxefck');

        try {
            setLoading(true);
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dq4qmmvpp/image/upload',
                formData
            );
            onUpload(response.data.url);
            alert('Image loaded Successfully!');
        } catch (error) {
            console.error('Image loading failed, try again', error);
            alert('Image loading failed, try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box my={1}>
            <Box display={"flex"}>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageChange} />
                    <Button variant="contained" component="span" sx={{ mr: 1, textTransform: 'lowercase' }}>
                        Enter an image
                    </Button>
                </label>

                <Button onClick={handleSubmit} variant="containedSuccess" type="submit" disabled={loading || !file} sx={{ textTransform: 'lowercase' }}>
                    {loading ? 'Cargando...' : 'Upload Image'}
                </Button>

                {file && (
                    <Box display={"flex"} alignContent={"center"} alignItems={"center"} sx={{ ml: 0, textTransform: 'lowercase' }}>
                        <IconButton onClick={() => setFile("")}>
                            <CancelIcon fontSize='small' />
                        </IconButton>
                        <Typography variant="body2">Remove File</Typography>
                    </Box>
                )}
            </Box>

            {file && (
                <Box sx={{ display: "flex", mt: 1 }}>
                    <Typography variant="body2">
                        File: &nbsp;
                    </Typography>
                    <Typography variant="body2" fontStyle={"italic"}>
                        {file.name}
                    </Typography>
                </Box>
            )}
        </Box>

        // <form onSubmit={handleSubmit}>
        // <label htmlFor="contained-button-file">
        //     <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageChange} />
        //     <Button variant="contained" component="span" sx={{ mr: 1 }}>
        //         Load an image
        //     </Button>
        // </label>
        // <Button variant="containedSuccess" type="submit" disabled={loading || !file}>
        //     {loading ? 'Cargando...' : 'Upload Image'}
        // </Button>

        // {file && <Button onClick={() => setFile("")} sx={{ ml: 1 }}> <IconButton> <CancelIcon fontSize='small' /></IconButton> Remove File</Button>}


        // {file && (
        //     <Box sx={{ display: "flex", mt: 1 }}>
        //         <Typography variant="body2">
        //             File: &nbsp;
        //         </Typography>
        //         <Typography variant="body2" fontStyle={"italic"}>
        //             {file.name}
        //         </Typography>
        //     </Box>
        // )}
        // </form>

    );
};

export default CloudinaryComponent;