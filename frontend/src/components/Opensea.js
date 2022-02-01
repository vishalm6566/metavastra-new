import React, { useEffect } from 'react'
import "./style2.css"


const Opensea = () => {
    const audio = new Audio();
    audio.src = "stingers-jugaadsoundeffect.mp3";

    useEffect(() => {
        audio.play()
        window.location.href = "https://opensea.io/metavastra";
        // eslint-disable-next-line
    }, []);


    return (
        <>
            {/* <div className='common-container'>
                <h1 id='title2'>Opensea</h1>
            </div> */}
        </>
    )
}

export default Opensea
