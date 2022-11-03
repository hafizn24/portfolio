import { Box, Grid, Typography, CardMedia, Button, Tooltip, IconButton,  } from "@mui/material"
import { Link } from "@mui/material"
import YouTubeIcon from '@mui/icons-material/YouTube';

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
                <Tooltip title="Demo Video">
                    <Link href={'https://drive.google.com/file/d/141osFR3C834aFyq0hbv4JtP2FWAkKGa2/view?usp=sharing'} underline="none" target={"_blank"} sx={{mx:1}}>
                        <IconButton sx={{mt:2}}><YouTubeIcon sx={{color:'white', fontSize: 44,}}/></IconButton>
                    </Link>
                </Tooltip>
            </Box>
        </Grid>
    </Box>
  )
}

export default Project
