import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

function Button({text, outline, onClick}) {
  return (
    <motion.div className={outline ? 'outlined' : 'btn'} onClick={() => onClick()} initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1.5}}>{text}</motion.div>
  )
}

export default Button