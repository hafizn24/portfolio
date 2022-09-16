import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import {CardMedia} from '@mui/material'

function RickandMortyCard({gender, species, status, name, location, image}) {
    
    return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
    >
        <Card  elevation={0}
            sx={{
                my:2,
                width:360
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {name[0]}
                </Typography>
                <Typography variant="h5" component="div">
                {status[0]}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {gender[0]}
                </Typography>
                <Typography variant="body2">
                {location[0]}
                <br />
                <CardMedia
                    component="img"
                    height="194"
                    image={image[0]}
                    alt="Image"
                />
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    )
}

export default RickandMortyCard