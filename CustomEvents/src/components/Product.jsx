import { data } from "../data/products"
import React from "react"
import { RemoveCta } from "./RemoveCta";
import { AddCta } from "./AddCta";
import { getDollarCurrencyFormat } from "../util/numberUtil";

export const Product = React.memo(({ productId, isAdded=false, editable=true }) => {
  const product = data.productsData.find(product => product.id === productId);
  const cta = editable ? isAdded ? <RemoveCta productId={product.id}/> : <AddCta productId={product.id}/> : null
  
  return <div className="card">
    <img src={`public/${product.image}`} alt="Avatar" className="image"></img>
    <div className="cardContent">
      <div className="name">{product.name}</div>
      <div className="price">{ getDollarCurrencyFormat(product.price) } {`(${product.storage})`}</div>
      {cta}
    </div>
  </div>
})