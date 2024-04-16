import { ADD_TO_CART_EVENT } from "../util/customEvents"
import { publish } from "../util/events"
import PropTypes from "prop-types"

export const AddCta = ({productId}) => {
  return <button className="customButton add" onClick={() => publish(ADD_TO_CART_EVENT, {id: productId})}>ADD TO CART</button>
}

AddCta.propTypes = {
  productId: PropTypes.string
}