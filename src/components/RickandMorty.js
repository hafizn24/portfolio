import React, {useEffect, useState} from 'react'
import { CardMedia, Card, Box, Grid, CircularProgress  } from '@mui/material'

import RickandMortyStat from './RickandMortyStat'
import RickandMortyTable from './RickandMortyTable'

function RickandMorty({array}) {
  const genderList = []
  for(let i in array){
    genderList.push(array[i].gender)
  }

  const speciesList = []
  for(let i in array){
    speciesList.push(array[i].species)
  }

  const statusList = []
  for(let i in array){
    statusList.push(array[i].status)
  }

  const display = () =>{
    if(array[array.length - 1] == null){
      return(
        <>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress sx={{m:2}}/>
          </Grid>
        </>
      )}
    }

  return (
    <div>
      {display()}
      <Box sx={{
        mt:{
            xs:2,
            sm:4,
            md:6,
            lg:8
        },
     }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <RickandMortyStat list = {genderList} title = {'Gender'}/>
          <br />
          <RickandMortyStat list = {speciesList} title = {'Species'}/>
          <br />
          <RickandMortyStat list = {statusList} title = {'Status'}/>
          <br />
          <RickandMortyTable array = {array}/>
        </Grid>
      </Box>
    </div>
  )
}

export default RickandMorty
