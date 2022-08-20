import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import { Typography } from "@mui/material"
import { Link } from "@mui/material"
import { IconButton } from "@mui/material"
import { Avatar } from "@mui/material"
import { Tooltip } from "@mui/material"
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import hafiz from './images/hafiz.jpg'

function Hero() {
    return (
    <Box sx={{
        m:{
            xs:2,
            sm:4,
            md:10,
            lg:14
        }
    }}>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar src={hafiz} sx={{ width: 180, height: 180 }}/>
            <Typography variant="h3">
                Muhammad Hafiz
            </Typography>
            <br />
            <Typography variant="h5">
                {/* I’m a junior Data Analyst and Web Developer. */}

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    I’m a junior 
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', m:1 }}>Data Analyst</Typography>
                    and 
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', m:1 }}>Web Developer</Typography>
                </Grid>
            </Typography>
            <Typography variant="body1">
                {/* As a fresh graduate from Universiti Teknologi MARA (UiTM), I look forward to working as a Data Analyst or Web Developer */}
                
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    As a fresh graduate from 
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mx:1 }}>Universiti Teknologi MARA</Typography>
                    (UiTM), I look forward to working as a
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mx:1 }}>Data Analyst</Typography>
                    or 
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mx:1 }}>Web Developer</Typography>
                </Grid>
            </Typography>
            <Typography variant="body1">
                {/* In short, I am hard-working with a strong independent personality and eager to gain experience. */}
                
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    In short, I am 
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mx:1 }}>hard-working</Typography>
                    with a 
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', mx:1 }}>strong independent</Typography>
                    personality and eager to gain experience.
                </Grid>
            </Typography>
            <br />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{m:1}}
            >
                <Tooltip title="LinkedIn">
                    <Link href="https://www.linkedin.com/in/muhammad-hafiz-bin-mohd-nasarudin-7a73171ab/" underline="none" target={"_blank"} sx={{mx:1}}>
                        <IconButton><LinkedInIcon sx={{color:'white', fontSize: 44}}/></IconButton>
                    </Link>
                </Tooltip>
                <Tooltip title="hafizn24@gmail.com">
                    <Link href="mailto:hafizn24@gmail.com" underline="none" target={"_blank"} sx={{mx:1}}>
                        <IconButton><EmailIcon sx={{color:'white', fontSize: 44}}/></IconButton>
                    </Link>
                </Tooltip>
                <Tooltip title="Resume">
                    <Link href="" underline="none" target={"_blank"} sx={{mx:1}}>
                        <IconButton><DescriptionIcon sx={{color:'white', fontSize: 44}}/></IconButton>
                    </Link>
                </Tooltip>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Hero