import React, { useEffect, useState } from "react";
import { get100Coins } from "../functions/get100Coins";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { color, motion } from "framer-motion";
import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Header from "../components/Common/Header";
import { Link } from "react-router-dom";
import Button from "../components/Common/Button";
import BackToTop from '../components/Common/BackToTop'
import Search from "../components/Dashboard/Search";
import { toast } from "react-toastify";

function WatchListPage() {
  let watchListArrayData = localStorage.getItem("myData");
  watchListArrayData = watchListArrayData ? JSON.parse(watchListArrayData) : [];
  const [mydata, setMyData] = useState(watchListArrayData);


  const removeWatchList = (name,event) => {
    console.log(event)
     const storedData = localStorage.getItem('myData');
     const dataArray = JSON.parse(storedData);

    const objectToDelete = event // The object you want to delete
    const indexToDelete = dataArray.findIndex(item => item.id === objectToDelete);

   if (indexToDelete !== -1) {
    dataArray.splice(indexToDelete, 1); // Remove 1 element at the found index

   const updatedData = JSON.stringify(dataArray);
   localStorage.setItem('myData', updatedData);
   toast.success(`${name} remove from WatchList...!!!`, {
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
  else{
  console.log("not getting id")
  }

  }

 



  return (
    <div>
      <BackToTop/>
      <Header />
      {mydata?.length <= 0 ? (
        <div className="noCoinData">
          <h1>NO COIN IN WATCHLIST...!!!</h1>
          <Link to="/dashboard">
            <Button
              text={"Dashboard"}
              onClick={() => console.log("btn is clicked2")}
            />
          </Link>
        </div>
      ) : (
       <div>
        
        <div className="watchlist-grid">
          {mydata.map((coin, i) => (
            <Link to={`/coin/${coin.id}`}>
              <motion.div
                className={
                  coin.cp < 0
                    ? "grid-coinComponent-red"
                    : "grid-coinComponent-green"
                }
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                key={i}
              >
                <div className="outer-grid">
                  <div className="coin-info">
                    <div className="coin-img">
                      <img src={coin.img} alt="coin-logo" />
                    </div>
                    <div className="coin-symbolName">
                      <span className="coinSymbol">{coin.sym}-USD</span>
                      <span className="coinName">{coin.nam}</span>
                    </div>
                  </div>
                  <div
                    className={
                      coin.cp < 0 ? "watchlistStar-red" : "watchlistStar-green"
                    }
                  onClick={() => removeWatchList(coin.nam,coin.id)} >
                    <StarOutlinedIcon/>
                  </div>
                </div>
                <div className="coin-percentageDetails">
                  <div className={coin.cp < 0 ? "red" : "green"}>
                    <span>{coin.cp}%</span>
                  </div>
                  <div className="arrow">
                    {coin.cp < 0 ? (
                      <div className="red-arrow">
                        <TrendingDownRoundedIcon />
                      </div>
                    ) : (
                      <div className="green-arrow">
                        <TrendingUpRoundedIcon />
                      </div>
                    )}
                  </div>
                </div>
                <div className="current-price">
                  <h3 className={coin.cp < 0 ? "red-price" : "green-price"}>
                    ${coin.currP}
                  </h3>
                </div>
                <div className="caps">
                  <p className="coin-totalVol">Total Volume:- ${coin.ctv}</p>
                  <p className="coin-marketCap">Market cap:- ${coin.cmc}</p>
                </div>
              </motion.div>
            </Link>
          ))}{" "}
        </div>
        </div>
      )}
    </div>
  );
}

export default WatchListPage;
