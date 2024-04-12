import { Regards } from "./Regards";
import { Salutation } from "./Salutation";
import PropTypes from "prop-types"

export const Email = ({
  receiverName="Sir", 
  senderName="Anonymous", 
  salutation="Hi", 
  regards="Regards",
  children}) => {


  return <div>
    <Salutation salutation={salutation} receiverName={receiverName} /> <br />
    {children}<br />
    <Regards regards={regards} senderName={senderName} />
  </div>
}

Email.propTypes = {
  receiverName: PropTypes.string,
  senderName: PropTypes.string,
  salutation: PropTypes.string,
  regards: PropTypes.string,
  children: PropTypes.node
}