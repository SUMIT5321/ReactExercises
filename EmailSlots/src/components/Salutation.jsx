import PropTypes from "prop-types"

export const Salutation = ({salutation, receiverName}) => {
  return <>
    {salutation} {receiverName},
  </>
}

Salutation.propTypes = {
  salutation: PropTypes.string,
  receiverName: PropTypes.string
}