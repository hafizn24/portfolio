import React, {useEffect, useState} from 'react'

function RickandMorty({array}) {
  
  const display = () =>{
    if(array[array.length - 1] != null){
      return array[array.length - 1].name
    }
  }

  return (
    <div>
      {console.log(array[array.length - 1])}
      {display()}
    </div>
  )
}

export default RickandMorty
