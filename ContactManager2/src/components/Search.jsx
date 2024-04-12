import PropTypes from "prop-types"

export const Search = ({ searchTerm, updateSearchTerm }) => {
  return <div className="toolbar">
    <input className="search" type="text" value={searchTerm} placeholder="Search" onChange={(e) => updateSearchTerm(e.target.value)} />
  </div>
}

Search.propTypes = {
  searchTerm: PropTypes.string,
  updateSearchTerm: PropTypes.func
}