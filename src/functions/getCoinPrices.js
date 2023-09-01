import axios from "axios"


export const getPrices = (id, days, PriceType) => {
  console.log(days)
  console.log(PriceType)
    const coinsPrices =  axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response) => {
      console.log(response.data)
      return response.data[PriceType]
    }).catch((error) => {
     console.log(error)
    })
    return coinsPrices
}