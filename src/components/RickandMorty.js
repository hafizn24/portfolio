import React, {useEffect, useState} from 'react'

function RickandMorty({array}) {
  var name = ''
  var status = ''
  var species = ''
  
  const display = () =>{
    if(array[array.length - 1] != null){
      name = array[array.length - 1].name
      status = array[array.length - 1].status
      species = array[array.length - 1].species
    }
  }

  return (
    <div>
      {console.log(array[array.length - 1])}
      {display()}
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  )
}

export default RickandMorty
