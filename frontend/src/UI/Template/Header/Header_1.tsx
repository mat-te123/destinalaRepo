import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useEditorNav } from "../../../Services/EditorNavContext";

function Header_1() {
  const { navigateTo } = useEditorNav();
  const navigate = useNavigate();
  const location = useLocation();
  const isEditor = location.pathname.includes("editor");
  return (
    <div className="bg-[#FFFFFF] py-6 px-20 flex flex-row gap-10 items-center justify-between font-main">
      <img src="../LogoPlaceholder.svg" alt="Logo" className="h-7" />
      <div className="flex flex-row items-center justify-center gap-10 w-full">
        <span
          className="font-medium text-lg cursor-pointer"
          onClick={isEditor ? () => navigateTo("preview") : () => navigate("/")}
        >
          Home
        </span>
        <span
          className="font-medium text-lg cursor-pointer mx-6"
          onClick={
            isEditor
              ? () => navigateTo("services")
              : () => navigate("/services")
          }
        >
          Layanan
        </span>
        <span
          className="font-medium text-lg cursor-pointer"
          onClick={
            isEditor
              ? () => navigateTo("destinations")
              : () => navigate("/destinations")
          }
        >
          Destinasi
        </span>
        <span
          className="font-medium text-lg cursor-pointer"
          onClick={() => navigateTo("booking")}
        >
          Pemesanan
        </span>
        <span
          className="font-medium text-lg cursor-pointer"
          onClick={() => navigateTo("about")}
        >
          Tentang
        </span>
        <span
          className="font-medium text-lg cursor-pointer"
          onClick={() => navigateTo("contact")}
        >
          Kontak
        </span>
      </div>
    </div>
  );
}

export default Header_1;
