import { Box } from '@mui/system'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';



function ProductAddedCard({ qty, imageURL, name, price, model, company }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'start', width: "100%" }}>
            <Card sx={{ borderRadius: 0, maxWidth: 150, maxHeight: 200, width: 150, height: 200 }}>
                <CardActionArea sx={{ width: 150, height: 200 }}>
                    <CardMedia
                        component="img"
                        image={imageURL}
                        alt="product Img"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </CardActionArea>
            </Card>
            <Card sx={{ borderRadius: 0, flex: 1, maxHeight: 200, height: 200, p: 2 }}>

                <Box sx={{ flex: '1', px: 2, py: 1, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 0.5 }} variant="subtitle2">
                        {model}
                    </Typography>
                    <Typography sx={{ color: 'primary.main', my: 0.5 }} variant="body1" component="div">
                        {price} €
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Amount: {qty}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography sx={{ fontStyle: 'italic', mt: 1, mb: 2 }} variant="subtitle2" color="text.secondary">
                            Sold by: {company}
                        </Typography>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} sx={{ mt: 1 }}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Box>
    )

}

export default ProductAddedCard