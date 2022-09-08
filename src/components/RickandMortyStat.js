import React from 'react'

function RickandMortyStat({list ,title}) {
    function countFunc(){
        let tempmap =  new Map()
        for(let i in unique){
            let index = 0
            for(let j in list){
                if(list[j] == unique[i]){
                    index += 1
                }
            }
            tempmap.set(unique[i], index)
        }
        return tempmap
    }

    const unique = [...new Set(list)]
    const count = countFunc()
    const countDisplay = Array.from(
        count.entries(), ([key, value]) => 
        <div>{key + ": " + value}</div>
    )

    return (
        <div>
            {countDisplay}
        </div>
    )
}

export default RickandMortyStat