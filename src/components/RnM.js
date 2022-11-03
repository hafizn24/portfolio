import { Box, Grid, Typography, CardMedia, Button } from "@mui/material"
import { Link } from "@mui/material"

import rnm from './images/rnm.png'

function RnM() {
  return (
    <Box
        sx={{
            p:2
        }}
    >
        <Grid
            container
            direction="row-reverse"
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
                    image={rnm}
                    alt="fyp"
                />
            </Box>
            <Box
                sx={{
                    p:2
                }}
            >
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                    The Rick and Morty API
                </Typography>
                <Box
                    sx={{
                        lg:'55%'
                    }}
                >
                    <Typography variant="subtitle1">
                        The Rick and Morty API is a REST(ish) and GraphQL API based on <br />
                        the television show Rick and Morty. You will have access to about hundreds of <br />
                        characters, images, locations and episodes. The Rick and Morty API <br />
                        is filled with canonical information as seen on the TV show.
                    </Typography>
                </Box>
                <Link href='/rickandmorty' underline="none">
                    <Button variant="outlined" sx={{mt:2, px:4}}>Learn More</Button>
                </Link>
            </Box>
        </Grid>
    </Box>
  )
}

export default RnM
