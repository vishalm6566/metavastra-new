import React, { useEffect } from 'react'
import "./style3.css"
import { Link, Outlet } from "react-router-dom";
import demoImg from "./demo-img.jpg";

// import Info1 from './Info1';


const Allitems = () => {
    const audio = new Audio();
    audio.src = "stingers-jugaadsoundeffect.mp3";
    useEffect(() => {
        audio.play()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="row">
                <h1 id='title3'>Our exclusive collection</h1>
                <div className="column">
                    <Link to="info1"><img src="https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg" alt='' /></Link>
                    <h3>Card 1</h3>
                    <p>The Lion Crown</p>
                    <p>Some text</p>
                </div>

                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 2</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 3</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 4</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 5</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 6</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 7</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 8</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <Link to=""><img src={demoImg} alt='' /></Link>
                    <h3>Card 9</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div className='overlay'>
                        <div className='content'>
                            <h3>Locked</h3>
                            <p>Miniting will start soon</p>
                        </div>
                    </div>
                </div>
                <Link to='/privacy-policy' style={{ margin: "10px", padding: "10px", color: "white" }}>Privacy policy</Link>
                <Link to='/privacy-policy' style={{ margin: "10px", padding: "10px", color: "white" }}>Terms and condition</Link>
            </div>

            <Outlet />
            {/* <Routes>
                < Route exact path=":info1" element={<Info1 />} />
            </Routes> */}
        </>
    )
}

export default Allitems
