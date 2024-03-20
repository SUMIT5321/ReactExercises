import { useDispatch, useSelector } from "react-redux"
import { updateTabSelection } from "../features/tabs/tabsSlice";

export const NavBar = () => {
  const tabs = useSelector(state => state.tabs);
  const selectedTabIndex = useSelector(state => state.selectedTabIndex);
  const dispatch = useDispatch()

  return <>
    <div className="navbar">
      {tabs.map((tab, index) => <div key={tab.id} className={index == selectedTabIndex ? "active" : "navItem"} onClick={() => dispatch(updateTabSelection({index: index}))}>{tab.name}</div>)}
    </div>
  </>
}