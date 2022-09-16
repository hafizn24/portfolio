import { Paper, Grid, Box, Typography } from "@mui/material"
import React from 'react'

import RickandMortyChart from "./RickandMortyChart"

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
    const countChart = countFuncChart()

    const countDisplay = Array.from(
        count.entries(), ([key, value]) =>
        <> 
            <Typography variant="body2">{key + ": "}<b>{value}</b></Typography>
        </>
    )

    function countFuncChart(){
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

    function value(){
        const values = []
        Array.from(countChart.entries(), ([key, value]) => 
            values.push(value)
        )
        return values
    }

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
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box sx={{py:1}}>
                   {countDisplay}
                </Box>
                <Box sx={{py:1}}>
                    <RickandMortyChart array={value()} unique = {unique}/>
                </Box>
            </Grid>
        </Paper>
    )
}

export default RickandMortyStat