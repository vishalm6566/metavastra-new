import React,{useEffect} from 'react'
import "./style2.css"

const Contact = () => {
  const audio = new Audio();
  audio.src = "stingers-jugaadsoundeffect.mp3";
  useEffect(()=>{
    audio.play()
  })
    return (
        <>
        <div className='common-container'>
          <h1 id='title2'>Contact</h1>  
        </div>  
        </>
    )
}

export default Contact
