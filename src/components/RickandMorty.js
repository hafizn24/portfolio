import React, {useEffect, useState} from 'react'
import { CardMedia, Card, Box, Grid, CircularProgress  } from '@mui/material'

import RickandMortyStat from './RickandMortyStat'
import RickandMortyTable from './RickandMortyTable'
import RickandMortyCard from './RickandMortyCard'

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
      {display}
      <Box sx={{
        pt:{
            xs:2,
            sm:2,
            md:4,
            lg:6
        },
     }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* <RickandMortyCard array = {array} display={display}/> */}
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
