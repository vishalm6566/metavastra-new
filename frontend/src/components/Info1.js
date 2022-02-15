import React, { useState, useEffect } from 'react'
import "./info1.css"
import Accordion from "./Accordion";
import { Link } from "react-router-dom";
 

const Info1 = () => {
    const audio = new Audio();
    audio.src = "stingers-jugaadsoundeffect.mp3";
    useEffect(() => {
        audio.play()
    })

    const mainImgUrl = "https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg"
    const gridImg1 = "https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg"
    const gridImg2 = "https://luxurylaunches.com/wp-content/uploads/2021/10/dolce-gabbana-nft-9.jpg"
    const gridImg3 = "https://womanonblockchain.com/wp-content/uploads/2021/11/dyuyim8hpzwgyszwk36f-1-768x768.jpg"
    const gridImg4 = "https://womanonblockchain.com/wp-content/uploads/2021/11/b2gxbulitgwgu3cavcru.jpg"
    const gridImg5 = "https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg"
    const gridImg6 = "https://luxurylaunches.com/wp-content/uploads/2021/10/dolce-gabbana-nft-9.jpg"

    const [mainImg, setMainImg] = useState(mainImgUrl)

    return (
        <>
            <div id='main-container'>
                <h1 id='title4'>Info</h1>
                <div id='img-info'>
                    <div id='container11'>
                        <div id='main-img'>
                            <img id='main-img1' src={mainImg} alt='' />
                        </div>
                        <div className='grid' >
                            <img className='grid-img' id='grid-img-1' onClick={() => setMainImg(gridImg1)} src={gridImg1} alt="" />
                            <img className='grid-img' id='grid-img-2' onClick={() => setMainImg(gridImg2)} src={gridImg2} alt="" />
                            <img className='grid-img' id='grid-img-3' onClick={() => setMainImg(gridImg3)} src={gridImg3} alt="" />
                            <img className='grid-img' id='grid-img-4' onClick={() => setMainImg(gridImg4)} src={gridImg4} alt="" />
                            <img className='grid-img' id='grid-img-5' onClick={() => setMainImg(gridImg5)} src={gridImg5} alt="" />
                            <img className='grid-img' id='grid-img-6' onClick={() => setMainImg(gridImg6)} src={gridImg6} alt="" />
                        </div>
                    </div>
                    <div id='container22'>
                        <h1 style={{ fontFamily: "Gothia Serif", fontSize: "1.5rem", marginBottom: "10px" }}>The Mosaic Impossible Jacket</h1>
                        <p style={{ color: "white", padding: "10px 0px 20px 0px" }}>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet vel incidunt praesentium impedit ea cum obcaecati, autem possimus accusantium ex optio ut minima doloremque voluptates sed nihil harum quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum ab impedit suscipit, voluptate error vero nam mollitia ex nihil aut autem perspiciatis earum? Sunt molestias aliquid perspiciatis consectetur ducimus.</p>
                        <Accordion />
                    </div>
                </div>
                <br /><br /><br />
                <hr />
                <div id='story'>
                    <h1 style={{ padding: '4%', fontFamily: "Gothia Serif", }}>story</h1>
                    <p>When you talk about Bulandshahr, a district in Uttar Pradesh , India, you will be tracked back to the ancient times and will find true events related to the place which happened in 3137 BC, including events related to Mahabharat. <br />
                        One such event which inspired the creation of The Baran Sanichar Shirt was the discovery of a boy who was found in the district of Bulandshahr in 1867.
                        The boy was 6 years old, walked on four and ate only raw meat. He was raised by a group of 5 wolves. The name of the boy was Dina Sanichar. <br />
                        It is beleived that the character of Mowgli in the comic The Jungle Book was inspired by Dina Sanicharls life events. The half wolf on the shirt signifies how the boy was half wolf and half human and still survived for 34 years. <br />
                        The 5 golden rings on the shirt signifies the protection that the 5 wolves gave to Dina Sanichar for 6 years.
                    </p>
                </div>
                <Link to='/privacy-policy' style={{ margin: "10px", padding: "10px", color: "white", textAlign : "center"}}>Privacy policy</Link>
                <Link to='/privacy-policy' style={{ margin: "10px", padding: "10px", color: "white", textAlign : "center"}}>Terms and condition</Link>
            </div>
        </>
    )
}

export default Info1
