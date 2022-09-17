import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid, Avatar, Chip } from '@mui/material'
import {CardMedia} from '@mui/material'

function RickandMortyCard({gender, species, status, name, location, image}) {
    const random = Math.floor(Math.random() * name.length)
    
    return (
    <Card  elevation={0}
        sx={{
            py:1,
            my:2,
            width:270
        }}
    >
        <CardContent>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar alt='Image' src={image[random]} sx={{ width: 140, height: 140, mb:1 }} />
                <Chip label={status[random]} />
                <Typography variant="h5" component="div">
                {name[random]}
                </Typography>
                <Typography>
                {location[random]}
                </Typography>
                <Typography color="text.secondary">
                {species[random]}
                </Typography>
                <Typography variant="body2">
                {gender[random]}
                </Typography>
            </Grid>
        </CardContent>
    </Card>
    )
}

export default RickandMortyCard