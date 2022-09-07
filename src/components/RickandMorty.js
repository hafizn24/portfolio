import React, {useEffect, useState} from 'react'

function RickandMorty({array}) {
  
  const display = () =>{
    if(array[0] != null){
      return array[0].name
    }
  }

  return (
    <div>
      {console.log(array[0])}
      {display()}
    </div>
  )
}

export default RickandMorty
