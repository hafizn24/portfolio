import { Box, Grid, Typography } from "@mui/material"

function Edu() {
  return (
    <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
        <Box sx={{
            m:{
                xs:2,
                sm:4,
                md:6,
                lg:8
            }
        }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h4">Education</Typography>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="baseline"
            >
                <Box sx={{p:2}}>
                    <Typography variant="h6">
                        DIPLOMA
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                            COMPUTER SCIENCE
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                        Universiti Teknologi MARA (UiTM), SEGAMAT
                    </Typography>
                </Box>
                <Box sx={{p:2}}>
                    <Typography variant="h6">
                        BACHELOR'S DEGREE
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                            INTELLIGENT SYSTEMS ENGINEERING
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle1" color="secondary">
                        Universiti Teknologi MARA (UiTM), SHAH ALAM
                    </Typography>
                    <Typography variant="subtitle2">
                        CGPA: 3.51/4.00
                    </Typography>
                </Box>
            </Grid>
        </Box>
    </Grid>
  )
}

export default Edu