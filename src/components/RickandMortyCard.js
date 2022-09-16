import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import {CardMedia} from '@mui/material'

function RickandMortyCard({array, display}) {
  
    let name = array[0].name
    let status = array[0].status
    let gender = array[0].gender
    let location = array[0].location.name
    let image = array[0].image

    

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
                {display}
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {name}
                </Typography>
                <Typography variant="h5" component="div">
                {status}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {gender}
                </Typography>
                <Typography variant="body2">
                {location}
                <br />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}

export default RickandMortyCard