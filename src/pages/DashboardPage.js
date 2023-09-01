import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponents from '../components/Dashboard/TabsComponents'
import axios from 'axios'
import Search from '../components/Dashboard/Search'
import PaginationComponent from '../components/Dashboard/Pagination'
import Loader from "../components/Common/Loader"
import BackToTop from '../components/Common/BackToTop'
import { get100Coins } from '../functions/get100Coins'


function DashboardPage() {

    const [coins, setCoins] = useState([])
    const [paginationcoins, setPaginationCoins] = useState([])
    const [search, setSearch] = useState('');
    const [isloading, setIsLoading] = useState(true);

    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
      setPage(value);
      var previousIndex = (value - 1) * 10;
      setPaginationCoins(coins.slice(previousIndex, previousIndex + 10))
    };

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    var filterCoins = coins.filter((item) => 
      item.name.toLowerCase().includes(search.toLowerCase()) || 
      item.symbol.toLowerCase().includes(search.toLowerCase())
    )

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
      const myCoins = await get100Coins()
      if(myCoins){
        setCoins(myCoins)
        setPaginationCoins(myCoins.slice(0,10))
        setIsLoading(false);
      }
    }
  return (
    <div>
      <BackToTop/>
      <Header/>
      {isloading ? (<Loader/>) : (
        <div>
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabsComponents coins={search? filterCoins : paginationcoins}/>
        {!search && (<PaginationComponent page={page} handlePageChange={handlePageChange}/>)}
    </div>
      )}
    </div>
  )
}

export default DashboardPage