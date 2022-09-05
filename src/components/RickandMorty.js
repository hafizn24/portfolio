import React, {useEffect, useState} from 'react'

function RickandMorty() {
  const[list, setList] = useState("")

  
  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character'
    const fetchData = async() =>{
      try{
        var response = await fetch(url)
        var tempJson = await response.json()

        const tempList = []

        while(tempJson.info.next != null){ 
          for(let i in tempJson.results){
            tempList.push(tempJson.results[i])
          }

          response = await fetch(tempJson.info.next)
          tempJson = await response.json()
        }
        setList(tempList)
        console.log(list)
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