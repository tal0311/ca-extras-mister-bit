// BITCOIN SERVICE
import axios from 'axios'
// session storage key
const KEY = 'cache'

// API URLS
const MARKET_PRICE_URL =
  'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'

var gCACHE = {
  tradeVol: null,
  avgBlockSize: null,
  marketPrice: null,
}

export const bitcoinService = {
  getRate,
  getMarketPrice,
}

async function getRate(coins) {
  try {
    const res = await axios.get(
      'https://blockchain.info/tobtc?currency=USD&value=1'
    )
    const rate = coins / res.data
    return rate.toFixed(2)
  } catch (error) {
    throw new Error(' can not get bit rate ')
  }
}

async function getMarketPrice() {
  console.log('pk')
  const gCACHE = _loadFromSession(KEY)

  if (gCACHE.marketPrice.values.length) {
    console.log('gCACHE:', gCACHE)
    return Promise.resolve(gCACHE.marketPrice.values)
  }

  try {
    console.log('getting data from api')
    const res = await axios.get(MARKET_PRICE_URL)
    console.log(res.data)
    gCACHE.marketPrice = res.data
    _saveToSession(KEY)
    return res.data
  } catch (error) {
    console.log('can not get market prices:', error)
  }
}
function getConfirmedTransactions() {}

function _saveToSession(key) {
  localStorage.setItem(key, JSON.stringify(gCACHE))
}
function _loadFromSession(key) {
  return JSON.parse(localStorage.getItem(key))
}
