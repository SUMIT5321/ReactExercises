import { useEffect } from "react"
import { AddCta } from "./components/AddCta"
import { Cart } from "./components/Cart"
import { Product } from "./components/Product"
import { ProductList } from "./components/ProductList"
import { RemoveCta } from "./components/RemoveCta"
import { Shop } from "./components/Shop"
import { subscribe, unsubscribe } from "./util/events"
import { GOTO_SHOP, ORDER_EVENT } from "./util/customEvents"
import { useState } from "react"
import { OrderSummary } from "./components/OrderSummary"

function App() {
  const [data, setData] = useState({
    purchasedProductIds: []
  });
  
  function handleProductOrder(data) {
    const ids = data.detail.ids;
    setData(data => ({...data, purchasedProductIds: ids}))
  }

  function handleGoToShopClick() {
    setData(data => ({...data, purchasedProductIds: []}))
  }

  useEffect(() => {
    subscribe(ORDER_EVENT, handleProductOrder)
    subscribe(GOTO_SHOP, handleGoToShopClick)

    return () => {
      unsubscribe(ORDER_EVENT, handleProductOrder)
      unsubscribe(GOTO_SHOP, handleGoToShopClick)
    }
  }, [])

  return (
    data.purchasedProductIds.length ? <OrderSummary productIds={data.purchasedProductIds} /> : <Shop />
  )
}

export default App
