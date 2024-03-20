import { NavBar } from "./components/Navbar"
import { InnerNavBar } from "./components/InnerNavBar";
import { PageContainer } from "./components/PageContainer";


function App() {
  
  return (
    <div className="outerContainer">
      <NavBar />
      <div className="innerContainer">
        <InnerNavBar />
        <PageContainer />
      </div>
    </div>
  )
}

export default App
