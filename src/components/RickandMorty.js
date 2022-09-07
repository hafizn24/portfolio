import React, {useEffect, useState} from 'react'

function RickandMorty({array}) {

  return (
    <div>
      {console.log(array[0])}
      {
        if(array[0] != null){
          array[0].name
        }
      }
    </div>
  )
}

export default RickandMorty
