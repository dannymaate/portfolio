import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function ActionAreaCard({title, summary, image, alt, link }) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href={ link } target="_blank">
          <CardMedia
            component="img"
            height="140"
            paddingTop="56%"
            image={ image }
            alt={ alt }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { title }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { summary }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}