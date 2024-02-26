import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AdMainCard({ imageURL, title, description, id, color }) {
  return (
    <Card sx={{
      minWidth: "95%",
      // maxHeight: "75vh",
      position: 'relative'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 'auto',
            maxHeight: '75vh',
            objectFit: 'contain',
            width: '100%'
          }}
          image={imageURL}
          alt="commercial Ad"
        />
        <CardContent sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          maxHeight: '75vh',
          // color: 'black', vamos a ver para pasarle por props
          padding: '10px'
        }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: color // Usa el color pasado como prop para el título
            }}
            gutterBottom
            variant="h5"
            component="div">
            {title}
          </Typography>
          <Typography variant="body1" style={{ color: '#fff' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}