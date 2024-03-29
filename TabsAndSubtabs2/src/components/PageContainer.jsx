import { tabs } from "../data/tabs"
import  {PropTypes } from "prop-types"

export const PageContainer = ({selectedTabId, selectedSubTabId}) => {
  const selecetedSubTab = tabs.find(tab => tab.id === selectedTabId).subTabs
    .find(subtab => subtab.id === selectedSubTabId);

  return <>
    <div className="content">{selecetedSubTab.name} page</div>
  </>
}


PageContainer.propTypes = {
  selectedTabId: PropTypes.number,
  selectedSubTabId: PropTypes.number
}