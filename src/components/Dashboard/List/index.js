import React from 'react'
import './style.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function List({coin, i}) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.tr className='list-row' key={i} initial={{x: -100}} animate={{x: 0}} transition={{duration: 1}}>
        <td className='coin-info td-img'>
            <div className='coin-img'>
               <Tooltip title='Coin-Logo' placement='bottom-start'><img src={coin.image} alt='coin-logo'/></Tooltip>
            </div>
            <div className='coin-symbolName'>
               <Tooltip title='Symbol'><span className='coinSymbol'>{coin.symbol}-USD</span></Tooltip>
                <Tooltip title='Name'  placement='bottom-start'><span className='coinName'>{coin.name}</span></Tooltip>
            </div>
        </td>
        <Tooltip title='Price changes in 24 Hrs'  placement='bottom-start'>
        <td className='coin-percentageDetails'>
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
        </td>
        </Tooltip>
        <Tooltip title="Current Price"  placement='bottom-start'>
        <td className='current-price'>
            <h3 className={ coin.price_change_percentage_24h < 0? 'red-price' : 'green-price'}>${coin.current_price.toFixed(2)}</h3>
        </td>
        </Tooltip>
        <td className='caps list'>
            <Tooltip title='Total Volume'  placement='bottom-start'><span className='coin-totalVol list-totalVolume'>${coin.total_volume}</span></Tooltip>
            <Tooltip title='Market Cap'  placement='bottom-start'><span className='coin-marketCap list-MarketCap'>${coin.market_cap}</span></Tooltip>
        </td>
    </motion.tr>
    </Link>
  )
}

export default List