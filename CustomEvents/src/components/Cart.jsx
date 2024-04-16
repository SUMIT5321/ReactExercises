import { data } from "../data/products"
import PropTypes from "prop-types"
import { Product } from "./Product";
import { ORDER_EVENT } from "../util/customEvents";
import { publish } from "../util/events";
import { getDollarCurrencyFormat } from "../util/numberUtil";

export const Cart = ({selectedProductIds}) => {  
  const productsInCart = data.productsData.filter(product => selectedProductIds.includes(product.id));
  const totalAmount = productsInCart.reduce((prev, current) => prev + current.price, 0);

  const productsList = productsInCart.map(product => <Product key={product.id} productId={product.id} isAdded={true}/>)
  
  return <div className="cart">
    <div><span className="cartTitle">Cart: </span>{ getDollarCurrencyFormat(totalAmount)}</div>
    <div className="separator"/>
    <div className="gridList">
      {productsList}
    </div>
    { selectedProductIds.length ? <>
      <br />
      <div className="separator"/>
      <button className="customButton add" onClick={() => publish(ORDER_EVENT, {ids: selectedProductIds})}>ORDER</button>
    </> : <div>No items added to cart</div> }
  </div>
}

Cart.propTypes = {
  selectedProductIds: PropTypes.array
}