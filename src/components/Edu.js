import { Box, Grid, Typography } from "@mui/material"

function Edu() {
  return (
    <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
        <Box sx={{p:2}}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h3">Education</Typography>
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
                </Box>
            </Grid>
        </Box>
    </Grid>
  )
}

export default Edu