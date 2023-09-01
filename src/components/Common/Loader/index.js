import { CircularProgress } from '@mui/material'
import React from 'react'
import './style.css'

function Loader() {
  return (
    <div className='page-loader'><CircularProgress/></div>
  )
}

export default Loader