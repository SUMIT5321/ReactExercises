import { useDispatch, useSelector } from "react-redux"
import { updateInnerTabSelection } from "../features/tabs/tabsSlice";

export const InnerNavBar = () => {
  const tab = useSelector(state => state.tabs[state.selectedTabIndex]);
  const selectedInnerTabIndex = useSelector(state => state.selectedInnerTabIndex)

  const dispatch = useDispatch()

  return <>
    <div className="innerNavBar">
      {tab.subTabs.map((tab, index) => <div key={tab.id} className={index == selectedInnerTabIndex ? "active" : "navItem"} onClick={() => dispatch(updateInnerTabSelection({index: index}))}>{tab.name}</div>)}
    </div>
  </>
}