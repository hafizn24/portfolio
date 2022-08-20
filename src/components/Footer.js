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
            p:4
        }}>
            <Typography sx={{ fontWeight: 'bold'}} variant="subtitle2">
                Hafiz Nasarudin &#169; 2022
            </Typography>
        </Box>
    </Grid>
  )
}

export default Footer