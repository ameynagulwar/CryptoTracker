import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  
    const [open, setOpen] = useState(false)
  
  return (
    <div>
          <IconButton onClick={() => setOpen(true)}><MenuIcon className='link'/></IconButton>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={() => setOpen(false)}
          >
           <div className='drawer-containes'>
              <Link to='/'><p className='link'>Home</p></Link>
              <Link to='/compare'><p className='link'>Compare</p></Link>
              <Link to='/watchlist'><p className='link'>WatchList</p></Link>
              <Link to='/dashboard'><p className='link'>DashBoard</p></Link>
           </div>
          </Drawer>
    </div>
  );
}
