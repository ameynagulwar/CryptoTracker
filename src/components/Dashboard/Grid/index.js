import React, { useState } from 'react'
import './style.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import {color, motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { toast } from 'react-toastify';

function Grid({coin, i}) {
    const [clicked, setClicked] = useState(false)
    
    const addWatchList = () => {
        let watchListArray = localStorage.getItem('myData');
        watchListArray = watchListArray ? JSON.parse(watchListArray) : [];
        const coins = {
            id: coin.id,
            img: coin.image,
            sym: coin.symbol,
            nam: coin.name,
            cp: coin.price_change_percentage_24h.toFixed(2),
            currP: coin.current_price,
            ctv: coin.total_volume,
            cmc: coin.market_cap,
        }
        watchListArray.push(coins);
        localStorage.setItem('myData', JSON.stringify(watchListArray))
        setClicked(true)
        toast.success(`${coin.name} add to WatchList...!!!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.div className={coin.price_change_percentage_24h < 0? "grid-coinComponent-red" : "grid-coinComponent-green"} initial={{y:50}} animate={{y: 0}} transition={{duration: 1}} key={i}>
        <div className='outer-grid'>
          <div className='coin-info'>
            <div className='coin-img'>
                <img src={coin.image} alt='coin-logo'/>
            </div>
            <div className='coin-symbolName'>
                <span className='coinSymbol'>{coin.symbol}-USD</span>
                <span className='coinName'>{coin.name}</span>
            </div>
          </div>
          <div className={coin.price_change_percentage_24h < 0? "watchlistStar-red" : "watchlistStar-green"} onClick={addWatchList}>
              {clicked? (<StarOutlinedIcon/>) : (<StarOutlineSharpIcon/>)}
          </div>
        </div>
        <div className='coin-percentageDetails'>
            <div className={coin.price_change_percentage_24h < 0? 'red' : 'green'}>
                <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
            </div>
            <div className='arrow'>
                {
                   coin.price_change_percentage_24h < 0? (
                   <div className='red-arrow'>
                     <TrendingDownRoundedIcon/>
                   </div>) : (
                    <div className='green-arrow'>
                        <TrendingUpRoundedIcon/>
                    </div>
                   )
                }
            </div>
        </div>
        <div className='current-price'>
            <h3 className={ coin.price_change_percentage_24h < 0? 'red-price' : 'green-price'}>${coin.current_price.toFixed(2)}</h3>
        </div>
        <div className='caps'>
            <p className='coin-totalVol'>Total Volume:- ${coin.total_volume}</p>
            <p className='coin-marketCap'>Market cap:- ${coin.market_cap}</p>
        </div>
    </motion.div>
    </Link>
  )
}

export default Grid