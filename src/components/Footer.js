import { Grid, Typography, Box } from "@mui/material"

function Footer() {
  return (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Box sx={{
            pt:{
                xs:2,
                sm:4,
                md:6,
                lg:8
            },
            pb:{
                xs:1,
                sm:3,
                md:4,
                lg:6
            },
            // border: '1px dashed grey'
        }}>
            <Typography sx={{ fontWeight: 'bold'}} variant="subtitle2">
                Hafiz Nasarudin &#169; 2022
            </Typography>
        </Box>
    </Grid>
  )
}

export default Footer