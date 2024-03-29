import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../features/contact/contactSlice";

export const Search = () => {
  const searchTerm = useSelector(state => state.searchTerm);
  const dispatch = useDispatch();

  return <div className="toolbar">
    <input className="search" type="text" value={searchTerm} placeholder="Search" onChange={(e) => dispatch(filterContacts({searchTerm: e.target.value}))}/>
  </div>
}