import React from 'react'
import "./style.css"
import { GitHub, LinkedIn } from '@mui/icons-material';
function Footer() {
  return (
    <div className='footer'>
      <div className='links'>
          <a href='https://www.linkedin.com/in/amey-nagulwar-ab35911ba/'><LinkedIn/></a>
          <a href='https://github.com/ameynagulwar?tab=repositories'><GitHub/></a>
      </div>
    </div>
  )
}

export default Footer