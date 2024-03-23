import React from 'react'
import { Modal, Typography, Box } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function SuccessAddingProductModal({ closeSuccessModal, openSuccess }) {

    return (
        <Box>
            <Modal
                open={openSuccess}
                onClose={closeSuccessModal}
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
                    borderRadius: 1,
                    textAlign: 'center',
                    outline: 'none'
                }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 60, color: "#2E7D32" }} />
                    <Typography id="modal-title" variant="h6" component="h2" sx={{ color: "#2E7D32", mt: 2 }}>
                        Product Successfully added to Cart
                    </Typography>
                </Box>
            </Modal>
        </Box>
    )
}

export default SuccessAddingProductModal