import { REMOVE_FROM_CART_EVENT } from "../util/customEvents"
import { publish } from "../util/events"
import PropTypes from "prop-types"

export const RemoveCta = ({productId}) => {
  return <button className="customButton remove" onClick={() => publish(REMOVE_FROM_CART_EVENT, {id: productId})}>REMOVE</button>
}

RemoveCta.propTypes = {
  productId: PropTypes.string
}