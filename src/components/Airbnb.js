import { Box, Grid, Typography, CardMedia, Button } from "@mui/material"
import { Link } from "@mui/material"

import room from './images/room.jpg'

function Airbnb() {
  return (
    <Box
        sx={{
            p:2
        }}
    >
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
                    image={room}
                    alt="fyp"
                />
            </Box>
            <Box
                sx={{
                    p:2
                }}
            >
                <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                    Airbnb Data Preparation and Visualization
                </Typography>
                <Box
                    sx={{
                        lg:'55%'
                    }}
                >
                    <Typography variant="subtitle1">
                        Airbnb, Inc is an American company that operates an online marketplace for <br/>
                        lodging, primarily homestays for vacation rentals and tourism activities. <br/>
                        This project focuses on reparing and visualizing the results based on <br/>
                        the data collected from fewer neighborhoods in the USA.
                    </Typography>
                </Box>
                <Link href={'https://hafiz-airbnb.netlify.app/'} underline="none">
                    <Button variant="outlined" sx={{mt:2, px:4}}>Learn More</Button>
                </Link>
            </Box>
        </Grid>
    </Box>
  )
}

export default Airbnb