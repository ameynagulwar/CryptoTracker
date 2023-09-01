import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import './style.css'
import List from '../List';


export default function TabsComponents({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles= {
    color: "var(--white)",
    width: '50vw',
    fontSize: '1.2rem',
    fontFamily: 'Inter',
    textTransform: 'capitalize'
  }

  const theme = createTheme({
    palette: {
        primary: {
            main: "#3a80e9",
        },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={styles}/>
            <Tab label="List" value="list" sx={styles}/>
          </TabList>

        <TabPanel value="grid">
           <div className='grid-outer'>
              {
                  coins.map((coin, i) => {
                  return <Grid coin={coin} key={i}/>
                })
              }
           </div>
        </TabPanel>
        <TabPanel value="list"> 
              <table className='list-table'>
                {
                   coins.map((coin, i) => {
                     return <List coin={coin} key={i}/>
                   })
                }
              </table>  
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
