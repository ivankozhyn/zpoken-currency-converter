const BASE_URL =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'

export const getExchangeRates = async () => {
  try {
    const data = await fetch(BASE_URL).then(response => {
      return response.json()
    })
    return data
  } catch (error) {
    console.log('getExchangeRates api error: ', error)
  }
}
