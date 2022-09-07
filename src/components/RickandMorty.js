import React, {useEffect, useState} from 'react'

function RickandMorty({array}) {
  
  const display = () =>{
    if(array[array.length - 1] != null){
      return(
        <div>
          <p>{{array[array.length - 1]}}.name</p>
        </div>)
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
