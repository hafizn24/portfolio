import { Box, Grid, Typography, CardMedia, Button } from "@mui/material"
import { Link } from "@mui/material"

import room from './images/room.jpg'

function Airbnb() {
  return (
    <Grid
        container
        direction="row"
        justifyContent="flex-start"
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
                image={room}
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
                Airbnb Data Preparation and Visualization
            </Typography>
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2">
                    Airbnb, Inc is an American company that operates an online marketplace for
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', ml:0.5 }}>
                    lodging, primarily homestays for vacation rentals and tourism activities
                </Typography>
                <Typography variant="body2">.</Typography>
            </Grid>
            
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2">
                    This project focuses on 
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', mx:0.5 }}>
                    reparing and visualizing 
                </Typography>
                <Typography variant="body2">
                    the results based on
                </Typography>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', ml:0.5 }}>
                    the data collected
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
            >
                <Typography variant="body2">
                    from fewer neighborhoods in the USA.
                </Typography>
            </Grid>
            <Link href={'https://hafiz-airbnb.netlify.app/'} underline="none">
                <Button variant="outlined" sx={{mt:2, px:4}}>Learn More</Button>
            </Link>
        </Box>
    </Grid>
  )
}

export default Airbnb