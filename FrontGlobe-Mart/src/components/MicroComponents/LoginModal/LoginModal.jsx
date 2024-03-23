import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { Typography, Box, Button } from '@mui/material';


function LoginModal({ openLogin, closeLoginModal }) {

    const navigate = useNavigate()

    return (
        <Box>
            <Modal
                open={openLogin}
                onClose={closeLoginModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                    <Typography id="modal-title" variant="h6" component="h2" sx={{ color: "#2E7D32", mt: 2, mb: 2 }}>
                        You must be logged in
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
                        Access exclusive features
                    </Typography>

                    <Button
                        variant="containedSuccess"
                        onClick={() => { navigate('/Login'); }}>
                        Login
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default LoginModal