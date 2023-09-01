import React from 'react'
import "./style.css"
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='navbar'>
       <motion.h1 className='logo' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}}>CryptoTracker<span style={{color: "var(--blue)"}}>.</span></motion.h1>
       <div className='links'>
           <Link to='/'><motion.p className='link' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}}>Home</motion.p></Link>
           <Link to='/compare'><motion.p className='link' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}}>Compare</motion.p></Link>
           <Link to='/watchlist'><motion.p className='link' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}}>WatchList</motion.p></Link>
           <Link to='/dashboard'><Button text={"Dashboard"} onClick={() => console.log("btn is clicked")}/></Link>
       </div>
       <div className='mobile-drawer'>
        <TemporaryDrawer/>
       </div>
    </div>
  )
}

export default Header