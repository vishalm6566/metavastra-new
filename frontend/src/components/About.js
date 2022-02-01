import React,{useEffect} from 'react'
import "./style2.css"

const About = () => {
  const audio = new Audio();
  audio.src = "stingers-jugaadsoundeffect.mp3";
  useEffect(()=>{
    audio.play()
    // eslint-disable-next-line
  },[])
    return (
        <>
        <div className='common-container'>
          <h1 id='title2'>About</h1>  
        </div>
        </>
    )
}

export default About
