import React, {useEffect, useState} from 'react'

function RickandMorty() {
  const[arrayList, setArrayList] = useState()

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character'
    const fetchData = async() =>{
      try{
        let tempUrl = []
        // tempUrl.push(url)

        let response = await fetch(url)
        let tempJson = await response.json()

        while(tempJson.info.next != null){

          for(let i in tempJson.results){
            tempUrl.push(tempJson.results[i].name)
          }

          response = await fetch(tempJson.info.next)
          tempJson = await response.json()
        }
        console.log(tempUrl)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <div>
      Test
    </div>
  )
}

export default RickandMorty