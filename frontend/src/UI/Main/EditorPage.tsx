// EditorPage.tsx
import { Outlet } from "react-router"; // Impor Outlet
import Sidebar from "../ControllerUI/Sidebar";

function EditorPage() {
  return (
    <div className="flex flex-row h-screen w-screen font-main overflow-hidden">
      {/* Sidebar hanya ditulis sekali di sini, tidak akan me-render ulang saat pindah page */}
      <Sidebar />

      {/* Outlet adalah tempat di mana Home atau MediaPage akan muncul */}
      <div className="flex-1 h-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default EditorPage;
