import { useCallback, useState } from "react"
import { NavBar } from "./components/Navbar";
import { PageContainer } from "./components/PageContainer";
import { tabs } from "./data/tabs";


function App() {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [selectedSubTabId, setSelectedSubTabId] = useState(tabs[0].subTabs[0].id);

  const handleTabSelection = useCallback(function handleTabSelection(tab) {
    setSelectedTabId(tab.id);
    setSelectedSubTabId(tab.subTabs[0].id);
  }, []);

  return (
    <div className="outerContainer">
      <NavBar selectedTabId={selectedTabId} handleTabSelection={handleTabSelection}/>
      <div className="innerContainer">
        <NavBar selectedTabId={selectedTabId} selectedSubTabId={selectedSubTabId} handleTabSelection={(tab) => setSelectedSubTabId(tab.id)}/>
        <PageContainer selectedTabId={selectedTabId} selectedSubTabId={selectedSubTabId}/>
      </div>
    </div>
  )
}

export default App
