import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches() {
  const [checked, setChecked] = useState(true);
  const [theme, setTheme] = useState('dark-theme')

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if(document.body.className === 'dark-theme'){
        document.body.className = 'light-theme'
    }
    else{
        document.body.className = 'dark-theme'
    }
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
