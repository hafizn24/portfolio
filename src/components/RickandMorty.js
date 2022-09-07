import React, {useEffect, useState} from 'react'

function RickandMorty({array}) {

  return (
    <div>
      {console.log(array[0])}
      {array[0].name}
    </div>
  )
}

export default RickandMorty
