import React,{useEffect} from 'react'
import "./style2.css"

const Faq = () => {
    const audio = new Audio();
    audio.src = "stingers-jugaadsoundeffect.mp3";
    useEffect(()=>{
      audio.play()
      // eslint-disable-next-line
    },[])
    return (
        <>
            <div className='common-container'>
                <h1 id='title2'>FAQ</h1>
            </div>
        </>
    )
}

export default Faq
