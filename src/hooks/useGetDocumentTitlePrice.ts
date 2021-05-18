import { useEffect } from 'react'
import useGetOlivePrice from './useGetOlivePrice'

const useGetDocumentTitlePrice = () => {
  const olivePrice = useGetOlivePrice();
  const cakePriceUsd = olivePrice ? parseFloat(olivePrice?.toFixed(6)) : 0

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
