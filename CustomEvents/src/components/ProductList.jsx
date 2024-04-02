import { data } from "../data/products"
import { Product } from "./Product";
import PropTypes from "prop-types"


export const ProductList = ({selectedProductIds}) => {
  const list = data.productsData;

  const products = list.map(product => {
    return <Product key={product.id} productId={product.id} isAdded={selectedProductIds.includes(product.id)}/> 
  });

  return <div className="productListContainer">
    <h2>Select from Iphone 11 Pro variants</h2> <br/>
    <div className="gridList">{products}</div>
  </div>
}

ProductList.propTypes = {
  selectedProductIds: PropTypes.array
}
