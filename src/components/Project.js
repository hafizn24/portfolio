import { Box, Grid, Typography, CardMedia } from "@mui/material"

import fyp from './images/fyp_colage.png'

function Project() {
  return (
    <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        pt={2}
        sx={{border: '1px dashed grey'}}
    >
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h4">
                Projects
            </Typography>
        </Grid>
        <Box sx={{
            ml:{
                lg:3
            },
            border: '1px dashed grey',
            width: {
                lg: "50%"
            }
        }}>
            <CardMedia 
                component="img"
                width="auto"
                image={fyp}
                alt="fyp"
            />
        </Box>
        <Box sx={{
            m:1,
            border: '1px dashed grey',
        }}>
            <Typography variant="h6">
                Final Year Project
                </Typography>
            <Typography variant="subtitle1">
                The system can detect a face mask by implementing a CNN classification algorithm.
            </Typography>
            <Typography variant="subtitle1">
                This study focuses on two CNN models with different optimizers
            </Typography>
            <Typography variant="subtitle1">
                trained with an image dataset labeled in two separate class labels.
            </Typography>
        </Box>
    </Grid>
  )
}

export default Project