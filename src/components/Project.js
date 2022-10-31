import { Box, Grid, Typography, CardMedia, Button } from "@mui/material"
import { Link } from "@mui/material"

import fyp from './images/fyp_colage.png'
import ieee from './pdfs/ieee.pdf'

function Project() {
  return (
    <Box
        sx={{
            p:2
        }}
    >
        <Typography variant="h4" align='center' sx={{m:2}}>Projects</Typography>
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Box
                sx={{
                    width:{
                        lg:'50%'
                    }
                }}
            >
                <CardMedia 
                    component="img"
                    width="auto"
                    image={fyp}
                    alt="fyp"
                />
            </Box>
            <Box
                sx={{
                    p:2
                }}
            >
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                    Face Mask Detection Using CNN
                </Typography>
                <Box
                    sx={{
                        lg:'55%'
                    }}
                >
                    <Typography variant="subtitle1">
                        The system can detect a face mask by implementing a CNN classification algorithm. <br />
                        This study focuses on two CNN models with different optimizers trained with <br />
                        an image dataset labeled in two separateclass labels.
                    </Typography>
                </Box>
                <Link href={ieee} underline="none" target={"_blank"}>
                    <Button variant="outlined" sx={{mt:2, px:4}}>Learn More</Button>
                </Link>
            </Box>
        </Grid>
    </Box>
  )
}

export default Project
