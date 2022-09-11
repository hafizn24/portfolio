import { Paper, Grid, Box, Typography } from "@mui/material"
import React from 'react'

function RickandMortyStat({list ,title}) {
    function countFunc(){
        let tempmap =  new Map()
        for(let i in unique){
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
            pb:5
        }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h4" color="secondary">
                    {title}
                </Typography>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box sx={{p:1}}>
                   {countDisplay}
                </Box>
                <Box sx={{p:1}}>
                    
                </Box>
            </Grid>
        </Paper>
    )
}

export default RickandMortyStat