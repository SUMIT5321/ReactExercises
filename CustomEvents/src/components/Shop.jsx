import { useState } from "react"
import { Cart } from "./Cart"
import { ProductList } from "./ProductList"
import { useEffect } from "react";
import { subscribe, unsubscribe } from "../util/events";
import { ADD_TO_CART_EVENT, REMOVE_FROM_CART_EVENT } from "../util/customEvents";

export const Shop = () => {
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  function handleAddProduct(data) {
    setSelectedProductIds(ids => [...ids, data.detail.id]);
  }

  function handleRemoveProduct(data) {
    setSelectedProductIds(ids => ids.filter(id => id !== data.detail.id));
  }

  useEffect(() => {
    subscribe(ADD_TO_CART_EVENT, handleAddProduct);
    subscribe(REMOVE_FROM_CART_EVENT, handleRemoveProduct);
  
    return () => {
      unsubscribe(ADD_TO_CART_EVENT, handleAddProduct)
      unsubscribe(REMOVE_FROM_CART_EVENT, handleRemoveProduct)
    }
  }, []);

  return <div className="shop">
    <ProductList selectedProductIds={selectedProductIds}/>
    <Cart selectedProductIds={selectedProductIds}/>
  </div>
}