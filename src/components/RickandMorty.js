import React, {useEffect, useState} from 'react'
import { CardMedia, Card, Box, Grid, CircularProgress  } from '@mui/material'

import RickandMortyStat from './RickandMortyStat'
import RickandMortyTable from './RickandMortyTable'
import RickandMortyCard from './RickandMortyCard'

function RickandMorty({array}) {
  const genderList = []
  const speciesList = []
  const statusList = []

  const nameList = []
  const locationList = []
  const imageList = []

  for(let i in array){
    genderList.push(array[i].gender)
    speciesList.push(array[i].species)
    statusList.push(array[i].status)
    nameList.push(array[i].name)
    locationList.push(array[i].location.name)
    imageList.push(array[i].image)
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
            {console.log('loading')}
            <CircularProgress sx={{mt:2}}/>
          </Grid>
        </>
      )
    }
  }

  return (
    <div>
      {display()}
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
          <RickandMortyCard gender = {genderList} species = {speciesList} status = {statusList} name = {nameList} location = {locationList} image = {imageList}/>
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