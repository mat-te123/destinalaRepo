import Sidebar from "../ControllerUI/Sidebar";
import Home from "../ControllerUI/Home";

function EditorPage() {
  return (
    <div className="flex flex-row h-screen w-screen font-main overflow-hidden">
      <Sidebar />
      <Home />
    </div>
  );
}

export default EditorPage;
