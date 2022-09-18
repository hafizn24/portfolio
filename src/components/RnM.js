import { Box, Grid, Typography, CardMedia, Button } from "@mui/material"
import { Link } from "@mui/material"

import rnm from './images/rnm.png'

function RnM() {
  return (
    <Grid
        container
        direction="row-reverse"
        justifyContent="space-around"
        alignItems="center"
        pt={2}
        // sx={{border: '1px dashed grey'}}
    >
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
                image={rnm}
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
                Rick and Morty API Visualization
            </Typography>
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2">
                    The Rick and Morty API is a REST(ish) and GraphQL API based on the television show 
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', ml:0.5 }}>
                    Rick and Morty
                </Typography>
                <Typography variant="body2">.</Typography>
            </Grid>
            
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2">
                    You will have access to about hundreds of 
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', mx:0.5 }}>
                    characters, images, locations and episodes
                </Typography>
                <Typography variant="body2">
                    . 
                </Typography>
            </Grid>
            <Grid
            container
            direction="row"
            >
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', mr:0.5 }}>
                    The Rick and Morty API
                </Typography>
                <Typography variant="body2">
                    is filled with canonical information as seen on the TV show.
                </Typography>
                <Typography variant="body2">
                    .
                </Typography>
            </Grid>
            <Link href='/rickandmorty' underline="none">
                <Button variant="outlined" sx={{mt:2, px:4}}>Learn More</Button>
            </Link>
        </Box>
    </Grid>
  )
}

export default RnM