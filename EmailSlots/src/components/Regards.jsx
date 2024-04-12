import PropTypes from "prop-types"

export const Regards = ({regards, senderName}) => {
  return <>
    {regards}, <br/> {senderName}
  </>
}

Regards.propTypes = {
  regards: PropTypes.string,
  senderName: PropTypes.string
}