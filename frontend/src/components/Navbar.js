import React from 'react'
import './style.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {



    return (
        <>
            <div className='navbar1'>
                <span id='title1'>Metavastra</span>
                <NavLink className="nav-items" to='/home'>Home</NavLink>
                <NavLink className="nav-items"  to='/nft'>NFT</NavLink>
                <NavLink className="nav-items"  to='/'>RoadMap</NavLink>
                <NavLink className="nav-items"  to='/opensea' >Opensea</NavLink>
                <NavLink className="nav-items"  to='/about'>About</NavLink>
                <NavLink className="nav-items"  to='/faq'>Faq</NavLink>
                <NavLink className="nav-items"  to='/contact'>Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar
