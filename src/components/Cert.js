import { Box, Grid, Typography } from "@mui/material"
import { CardMedia } from "@mui/material"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import azure from './images/azure.jpg'
import excel from './images/excel.jpg'
import toolbox from './images/toolbox.jpg'

function Cert() {
    const azure_text = "azure"
    const excel_text = "excel"
    const toolbox_text = "toolbox"

    return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
    >
        <Box sx={{p:2, border: '1px dashed grey'}}>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <CardMedia
                        component="img"
                        width="auto"
                        image={azure}
                        alt={azure_text}
                    />
                </SplideSlide>
                <SplideSlide>
                    <CardMedia
                        component="img"
                        width="auto"
                        image={excel}
                        alt={excel_text}
                    />
                </SplideSlide>
                <SplideSlide>
                    <CardMedia
                        component="img"
                        width="auto"
                        image={toolbox}
                        alt={toolbox_text}
                    />
                </SplideSlide>
            </Splide>
        </Box>
    </Grid>
  )
}

export default Cert