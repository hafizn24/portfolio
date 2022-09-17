import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid, Avatar, Chip } from '@mui/material'
import {CardMedia, IconButton} from '@mui/material'

import RefreshIcon from '@mui/icons-material/Refresh';

function RickandMortyCard({gender, species, status, name, location, image}) {
    let index  = Math.floor(Math.random() * name.length)
    const [random, setRandom] = useState(index)

    const click = () =>{
        setRandom(Math.floor(Math.random() * name.length))
    }
   
    return (
    <Card  elevation={0}
        sx={{
            pt:1,
            my:2,
            width:270,
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
                <Typography variant="h5" component="div" color="primary">
                {name[random]}
                </Typography>
                <Typography>
                {location[random]}
                </Typography>
                <Typography color="secondary">
                {species[random]}
                </Typography>
                <Typography variant="body2">
                {gender[random]}
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <IconButton onClick={click}><RefreshIcon sx={{fontSize: 30}} /></IconButton>
            </Grid>
        </CardContent>
    </Card>
    )
}

export default RickandMortyCard
