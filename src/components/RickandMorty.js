import React, {useEffect, useState} from 'react'
import { CardMedia, Card } from '@mui/material'

import RickandMortyStat from './RickandMortyStat'

import loading from './images/loading.gif'

function RickandMorty({array}) {

  const genderList = []
  for(let i in array){
    genderList.push(array[i].gender)
  }

  const speciesList = []
  for(let i in array){
    speciesList.push(array[i].species)
  }

  const display = () =>{
    if(array[array.length - 1] == null){
      return(
        <CardMedia 
          component="img"
          alt={loading}
          height="300px"
          image={loading}
        />
      )
    }
  }

  return (
    <div>
      {display()}
      <p>{array[array.length - 1].name}</p>
      <RickandMortyStat list = {genderList} title = {'Gender'}/>
      <br />
      <RickandMortyStat list = {speciesList} title = {'Species'}/>
    </div>
  )
}

export default RickandMorty
