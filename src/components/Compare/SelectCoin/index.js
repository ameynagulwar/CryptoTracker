import React, { useEffect, useState } from 'react';
import "./style.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { get100Coins } from '../../../functions/get100Coins';


export default function SelectCoins({crypto1, crypto2, handleCoinChange}) {
  
    const [allcoins, setAllCoins] = useState([])
    const styles = {
        height: "2.5rem",
            width: "115px",
            color: 'var(--white)',
            '& .MuiOutlinedInput-notchedOutline ' : {
                borderColor: 'var(--blue) !important',
            },
            "& .MuiSvgIcon-root": {
                color: 'var(--white)',
            },
            '&:hover':{
               "7& fieldset":{
                border: "#3a80e9",
               }
            }
    }


    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
        const myCoins = await get100Coins()
        setAllCoins(myCoins)
    }

  return (
    <div className='compare-select'>
        <p>Crypto 1</p>
        <Select
          sx={styles}
          value={crypto1}
          label="Crypto 1"
          onChange={(event) => handleCoinChange(event, false)}
        >
         {
            allcoins.filter((item) => item.id != crypto2).map((coin,i) => (
                <MenuItem value={coin.id} key={i} >{coin.name}</MenuItem>
            ))
         }
        </Select>
        <p>Crypto 2</p>
        <Select
          sx={styles}
          value={crypto2}
          label="Crypto 2"
          onChange={(event) => handleCoinChange(event, true)}
        >
         {
            allcoins.filter((item) => item.id != crypto1).map((coin, i) => (
                <MenuItem value={coin.id}key={i}>{coin.name}</MenuItem>
            ))
         }
        </Select>
    </div>
  );
}
