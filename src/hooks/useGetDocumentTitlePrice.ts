import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  // const cakePriceUsd = priceData ? parseFloat(priceData.prices.OLIVE) : 0
  const cakePriceUsd = Number(0);

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`

  useEffect(() => {
    document.title = `OliveSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
