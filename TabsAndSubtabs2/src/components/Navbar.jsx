import React from "react";
import { tabs } from "../data/tabs";

export const NavBar = React.memo(function NavBar({selectedTabId, selectedSubTabId, handleTabSelection}) {
  const selectedId = selectedSubTabId ? selectedSubTabId : selectedTabId;
  const tabsToPresent = selectedSubTabId ? tabs.find(tab => tab.id === selectedTabId).subTabs : tabs;

  return <>
    <div className="navbar">
      {tabsToPresent.map(tab => <div key={tab.id} className={tab.id == selectedId ? "active" : "navItem"} onClick={() => handleTabSelection(tab)}>{tab.name}</div>)}
    </div>
  </>
});