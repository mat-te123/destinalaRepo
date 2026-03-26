import Sidebar from "./ComponentUI/Sidebar"
import Home from "./ComponentUI/Home"

function App() {


  return (
    <div className="flex flex-row h-screen w-screen font-main overflow-hidden">
      <Sidebar />
      <Home />
    </div>

  )
}

export default App
