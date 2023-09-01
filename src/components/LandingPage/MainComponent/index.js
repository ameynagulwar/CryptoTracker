import React from 'react'
import './style.css'
import Button from '../../Common/Button'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradeint.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function MainComponent() {
  return (
    <div className='main-conatiner'>
        <div className='left-component'>
            <motion.h1 className='trackCrypto' initial={{opacity: 0, x: -200}} animate={{opacity: 1, x: 0}} transition={{duration: 1.5}}>Track Crypto</motion.h1>
            <motion.h1 className='realTime' initial={{opacity: 0, x: 200}} animate={{opacity: 1, x: 0}} transition={{duration: 1.5}}>Real Time.</motion.h1>
            <motion.p className='info' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}}>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <motion.div className='mainComponent-btns'initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}}>
                <Link to='/dashboard'><Button text={"Dashboard"} onClick={() => console.log("btn is clicked2")}/></Link>
                <Link to='/compare'><Button text={"Compare"} outline={true} onClick={() => console.log("compare page")}/></Link>
            </motion.div>
        </div>
        <div className='right-component'>
             <motion.img src={iphone} className='iPhone-img' alt="Phone-img" initial={{y : -20}} animate={{y: 10}} transition={{type: "smooth", repeatType: "mirror", duration: 2, repeat: Infinity}}/>
             <img src={gradient} className='gradient-img'  alt="Phone-img"/>
        </div>
    </div>
  )
}

export default MainComponent