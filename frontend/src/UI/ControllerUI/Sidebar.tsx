// Sidebar.tsx
import { useState } from "react";
import { Icon } from "./Icon";
import { NavLink } from "react-router";

function Sidebar() {
  const Logo = "../Logo.png";
  const User = "../placeholder.svg";

  const DashboardIcon = Icon.Dashboard;
  const ImageIcon = Icon.Image;
  const PagesIcon = Icon.Pages;
  const DataBase = Icon.DataBase;
  const Documents = Icon.Document;
  const Services = Icon.Services;
  const Package = Icon.Package;
  const Star = Icon.Star;
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Media", icon: ImageIcon },
    { name: "Destination", icon: Documents },
    { name: "Service", icon: Services },
    { name: "Package", icon: Package },
    { name: "Form Data", icon: DataBase },
    { name: "Testimoni Data", icon: Star },
    { name: "Add Page", icon: PagesIcon },
  ];

  return (
    <div className="group flex flex-col p-4 justify-between items-start border-r border-[#D7D7D7] h-screen w-20 hover:w-64 transition-all duration-300 ease-in-out bg-white overflow-hidden">
      {/* Bagian Atas: Logo & Menu Items */}
      <div className="flex flex-col w-full gap-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 px-3 py-2 w-full min-w-50  border-gray-100">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 h-8 object-contain shrink-0"
          />
          {/* Ganti 'hidden hover:block' menjadi 'hidden group-hover:block' */}
          <span className="font-bold text-lg text-black hidden group-hover:block animate-fadeIn">
            Destinala
          </span>
        </div>

        {/* List Menu Navigation */}
        <nav className="flex flex-col gap-2 w-full">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeMenu === item.name;
            const url = item.name.split(" ")[0];

            return (
              <NavLink
                key={index}
                to={url.toLowerCase()}
                onClick={() => setActiveMenu(url)}
                className={`flex items-center gap-4 px-3 py-3 rounded-xl font-medium transition-all duration-200 text-left min-w-fit w-full
                  ${
                    isActive
                      ? "bg-black text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
              >
                {/* Ikon dikunci ukurannya agar tidak ikut bergeser */}
                <IconComponent className="w-6 h-6 shrink-0 " />

                {/* Ganti 'hidden hover:block' menjadi 'hidden group-hover:block' */}
                <span className="text-sm hidden group-hover:block whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bagian Bawah: User Profile */}
      <div className="w-full flex items-center gap-4 border-t border-gray-100 pt-4 px-2 min-w-50">
        <img
          src={User ? User : "./placeholder.svg"}
          alt="User Profile"
          className="object-cover rounded-full h-10 w-10 border border-gray-200 shrink-0"
        />
        {/* Ganti 'hidden hover:block' menjadi 'hidden group-hover:block' */}
        <div className="flex flex-col group-hover:block whitespace-nowrap">
          <span className="text-sm font-semibold text-black hidden group-hover:block">
            Admin Super
          </span>
          <span className="text-xs text-gray-400 hidden group-hover:block">
            Main Dashboard
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
