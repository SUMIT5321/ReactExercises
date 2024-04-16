import { data } from "../data/products";
import { GOTO_SHOP } from "../util/customEvents";
import { publish } from "../util/events";
import { Product } from "./Product";
import PropTypes from "prop-types"

export const OrderSummary = ({productIds}) => {

  const boughtProducts = data.productsData.filter(product => productIds.includes(product.id));
  const totalItems = productIds.length;
  const totalAmount = boughtProducts.reduce((prev, current) => prev + current.price, 0);

  const productsList = boughtProducts.map(product => <Product key={product.id} productId={product.id} editable={false}/>)
  
  return <div>
    <h2>Order Summary</h2> <br/>
    <div>
      {productsList}
    </div> <br />
    <p>Total number of Item: {totalItems}</p>
    <p>Total Cost: {totalAmount}</p>

    <button className="customButton add" onClick={() => publish(GOTO_SHOP)}>GOTO SHOP</button>
  </div>
}

OrderSummary.propTypes = {
  productIds: PropTypes.array
}