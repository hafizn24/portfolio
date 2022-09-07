import React, {useEffect, useState} from 'react'

function RickandMorty({array}) {
  
  const display = () =>{
    if(array[array.length - 1] != null){
      return(
        <div>
          <p>array[array.length - 1].name</p>
          <p>array[array.length - 1].image</p>
          <p>array[array.length - 1].species</p>
          <p>array[array.length - 1].status</p>
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
