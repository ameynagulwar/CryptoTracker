import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoin'
import SelectDays from '../components/Coin/SelectDays'
import { coinObject } from '../functions/convertObject';
import { getCoinData } from '../functions/getcoinData';
import { getPrices } from '../functions/getCoinPrices';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import {settingChartData} from '../functions/settingChartData'
import LineChart from '../components/Coin/LineChart';
import TogglePriceType from '../components/Coin/PriceType';
import BackToTop from '../components/Common/BackToTop'   


function ComparePage() {

  const [crypto1, setCrypto1] = useState('bitcoin');
  const [crypto2, setCrypto2] = useState('ethereum');
  const [days, setDays] = useState(30)
  const [crypto1Data, setCrypto1Data] = useState({})
  const [crypto2Data, setCrypto2Data] = useState({})
  const [isloading, setIsLoading] = useState(true)
  const [PriceType, setPriceType] = useState('prices')
  const [chartData, setChartData] = useState({})

 async function handleDaysChange(event){
    setIsLoading(true)
    setDays(event.target.value)
    const prices1 = await getPrices(crypto1, event.target.value, PriceType)
    const prices2 = await getPrices(crypto2, event.target.value, PriceType)
   if(prices1?.length > 0 && prices2.length > 0){
     settingChartData(setChartData,prices1,prices2)
     setIsLoading(false)
   }
  }

  const handlePriceTypeChange = async (event, newType) => {
    console.log('Current PriceType:', PriceType);
    console.log('New PriceType:', newType);
    
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getPrices(crypto1, days, newType)
    const prices2 = await getPrices(crypto2, days, newType)
   if(prices1?.length > 0 && prices2.length > 0){
     settingChartData(setChartData,prices1,prices2)
     setIsLoading(false)
   }
  
    
  };

  useEffect(() => {
    getData()
  },[])

  async function getData(){
    setIsLoading(true)
    const data1 = await getCoinData(crypto1)
    const data2 = await getCoinData(crypto2)
      coinObject(setCrypto1Data, data1)
      coinObject(setCrypto2Data, data2)

    if(data1 && data2){
      const prices1 = await getPrices(crypto1, days, PriceType)
      const prices2 = await getPrices(crypto2, days, PriceType)
      if(prices1?.length > 0 && prices2?.length > 0){
         settingChartData(setChartData,prices1,prices2)
         setIsLoading(false)
         console.log("both prices fetch", prices1, prices2)
      }
    }
    
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true)
    if(isCoin2){
        setCrypto2(event.target.value)
        console.log("crytp2",crypto2)
        const data = await getCoinData(event.target.value)
        if(data){
          coinObject(setCrypto2Data, data)
       }
       const prices1 = await getPrices(crypto1, days, PriceType)
       const prices2 = await getPrices(crypto2, days, PriceType)
      if(prices1?.length > 0 && prices2.length > 0){
        settingChartData(setChartData,prices1,prices2)
        console.log(prices1,prices2)
        setIsLoading(false)
      }
    }
    else{
      setCrypto1(event.target.value)
      console.log("cry",crypto1,event.target.value)
      const data = await getCoinData(event.target.value)
        if(data){
          coinObject(setCrypto1Data, data)
       }
       const prices1 = await getPrices(crypto1, days, PriceType)
       const prices2 = await getPrices(crypto2, days, PriceType)
      if(prices1?.length > 0 && prices2.length > 0){
        settingChartData(setChartData,prices1,prices2)
        console.log(prices1,prices2)
        setIsLoading(false)
      }
    }
}


  return (
    <div>
        <BackToTop/>
        <Header/>
        {isloading ? (
          <Loader/>
        ) : (
          <>
            <div className='coins-days'>
               <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange}/>
                 <div id='daysCompare'>
                     <SelectDays days={days} handleDaysChange={handleDaysChange} noPtag={true}/>
                 </div>
             </div>
              <div className='coins-wrapper' style={{padding: "0rem 1rem"}}>
                 <List coin={crypto1Data}/>
            </div>
            <div className='coins-wrapper' style={{padding: "0rem 1rem"}}>
                 <List coin={crypto2Data}/>
            </div> 
            <div className='coins-wrapper'>
               <div className='toggle'></div>
               <div className='toggle'></div>
               <div className='toggle'></div>
               <TogglePriceType PriceType={PriceType} handlePriceTypeChange={handlePriceTypeChange}/>
               <LineChart chartData={chartData} PriceType={PriceType} multiAxis={true}/>
            </div>
            <CoinInfo name={crypto1Data.name} desc={crypto1Data.desc}/>
            <CoinInfo name={crypto2Data.name} desc={crypto2Data.desc}/>
          </>
        
        )}
    </div>
  )
}

export default ComparePage