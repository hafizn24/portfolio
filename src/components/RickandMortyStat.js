import { Paper, Grid, Box, Typography } from "@mui/material"
import React from 'react'

function RickandMortyStat({list ,title}) {
    function countFunc(){
        let tempmap =  new Map()
        let size = 0
        if(unique.length > 3){
            size = 3
        }else{
            size = unique.length
        }
        for(let i = 0; i < size; i++){
            let index = 0
            for(let j in list){
                if(list[j] == unique[i]){
                    index += 1
                }
            }
            tempmap.set(unique[i], index)
        }
        return tempmap
    }

    const unique = [...new Set(list)]
    const count = countFunc()

    const countDisplay = Array.from(
        count.entries(), ([key, value]) =>
        <> 
            <Typography variant="body2">{key + ": "}<b>{value}</b></Typography>
        </>
    )

    return (
        <Paper elevation={0} sx={{
            mx:2,
            my:1,
            px:5,
            pt:2,
            pb:2,
            minWidth: 300
        }}>
            <Grid
                container
                direction="row"
                justifyContent="left"
                alignItems="center"
            >
                <Typography variant="h5" color="secondary">
                    {title}
                </Typography>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="left"
                alignItems="left"
            >
                <Box sx={{py:1}}>
                   {countDisplay}
                </Box>
            </Grid>
        </Paper>
    )
}

export default RickandMortyStat