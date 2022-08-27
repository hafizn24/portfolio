import { Box, Grid, Typography, CardMedia, Button } from "@mui/material"
import { Link } from "@mui/material"

import fyp from './images/fyp_colage.png'
import ieee from './pdfs/ieee.pdf'

function Project() {
  return (
    <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        pt={2}
        // sx={{border: '1px dashed grey'}}
    >
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            <Box sx={{m:2}}>
                <Typography variant="h4" sx={{m:2}}>
                    Projects
                </Typography>
            </Box>
        </Grid>
        {/* Put codes below into seperated func */}
        <Box sx={{
            ml:{
                lg:3
            },
            // border: '1px dashed grey',
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
            ml:{
                lg:3
            }
            // border: '1px dashed grey',
        }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                Face Mask Detection Using CNN
            </Typography>
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2">
                    The system can detect a face mask by implementing a 
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', ml:0.5 }}>
                    CNN classification algorithm
                </Typography>
                <Typography variant="body2">.</Typography>
            </Grid>
            
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2">
                    This study focuses on two
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', mx:0.5 }}>
                    CNN models
                </Typography>
                <Typography variant="body2">
                    with different 
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', ml:0.5 }}>
                    optimizers
                </Typography>
            </Grid>
            <Grid
            container
            direction="row"
            >
                <Typography variant="body2">
                    trained with an image dataset labeled in two separate
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', ml:0.5 }}>
                    class labels
                </Typography>
                <Typography variant="body2">
                    .
                </Typography>
            </Grid>
            <Link href={ieee} underline="none" target={"_blank"}>
                <Button variant="outlined" sx={{mt:2, px:4}}>Learn More</Button>
            </Link>
        </Box>
    </Grid>
  )
}

export default Project