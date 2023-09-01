import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { coinObject } from '../functions/convertObject'
import Loader from '../components/Common/Loader'
import List from '../components/Dashboard/List'
import Header from '../components/Common/Header'
import CoinInfo from '../components/Coin/CoinInfo'
import { getCoinData } from '../functions/getcoinData'
import { getPrices } from '../functions/getCoinPrices'
import LineChart from '../components/Coin/LineChart'
import { convertDate } from '../functions/convertDate'
import SelectDays from '../components/Coin/SelectDays'
import { settingChartData } from '../functions/settingChartData'
import TogglePriceType from '../components/Coin/PriceType'
import BackToTop from '../components/Common/BackToTop'


function CoinPage() {
    const [isloading, setIsLoading] = useState(true)
    const [coinData, setCoinData] = useState([])
    const [days, setDays] = useState(30)
    const [chartData, setChartData] = useState({})
    const [PriceType, setPriceType] = useState('prices');
    const {id} = useParams()

    useEffect(() => {
      if(id){
        getData()
      }
      
    },[id])

    async function getData () {
           
       const data = await getCoinData(id)
       if(data){
          coinObject(setCoinData, data)
          const prices = await getPrices(id, days, PriceType)
          if(prices?.length > 0){
            settingChartData(setChartData,prices)
            setIsLoading(false)
          }
       }
      }

      const handleDaysChange = async (event) => {
        setIsLoading(true)
        setDays(event.target.value)
        const prices = await getPrices(id, event.target.value, PriceType)
          if(prices?.length > 0){
            settingChartData(setChartData,prices)
            setIsLoading(false)
          }
      }

   

      const handlePriceTypeChange = async (event, newType) => {
        console.log('Current PriceType:', PriceType);
        console.log('New PriceType:', newType);
        
        setIsLoading(true);
        setPriceType(newType);
      
        const prices = await getPrices(id, days, newType);
        console.log('Fetched Prices:', prices);
      
        if (prices?.length > 0) {
          settingChartData(setChartData, prices);
          setIsLoading(false);
        } else {
          console.log('no prices is fetch');
        }
      };
      
      

  return (
    <div>
        <BackToTop/>
        <Header/>
        {isloading ? (
          <Loader/> 
        ) : (
          <>
            <div className='coins-wrapper' style={{padding: "0rem 1rem"}}>
                 <List coin={coinData}/>
            </div>
             <div className='coins-wrapper'>
                <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                <TogglePriceType PriceType={PriceType} handlePriceTypeChange={handlePriceTypeChange}/>
                <LineChart chartData={chartData} PriceType={PriceType}/>
             </div>
             <CoinInfo name={coinData.name} desc={coinData.desc}/>
          </>
         
         )}
    </div>
  )
}

export default CoinPage