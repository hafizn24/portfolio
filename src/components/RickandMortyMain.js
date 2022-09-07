import React, {useEffect, useState} from 'react'

import RickandMorty from './RickandMorty'

function RickandMortyMain() {

  const [arrayList, setArrayList] = useState('')
  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character'

    const fetchData = async() =>{
      try{
        const tempInfo = []
        let tempUrl = ''

        let response = await fetch(url)
        let tempJson = await response.json()

        while(tempJson.info.next != null){
          tempUrl = tempJson.info.next

          for(let i in tempJson.results){
            tempInfo.push(tempJson.results[i])
          }

          response = await fetch(tempJson.info.next)
          tempJson = await response.json()
        }
        setArrayList(tempInfo)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <div>
      <RickandMorty 
        array={arrayList}
      />
    </div>
  )
}

export default RickandMortyMain
