'use client'

import React, {useEffect, useState} from 'react'

function Test() {
  const [data,setData] = useState("test")

  useEffect(()=>{
    setData("naja")
  },[])

  return (
    <> 
    <div>test {data} </div>
    <button style={{backgroundColor : 'red', width : '60px'}} role='button' onClick={()=> setData("eiei")}>Test</button>
    </>
  )
}

export default Test