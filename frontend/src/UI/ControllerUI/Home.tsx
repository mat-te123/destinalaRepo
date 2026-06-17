import { useState } from "react";
import {
  EditorNavProvider,
  useEditorNav,
} from "../../Services/EditorNavContext";
// UI import
import Header from "../ReuseableUI/Header";
import SettingController from "./Controller/SettingController";
// import TemplateTest from "../Template/TemplateTest";
import PreviewPage from "../Template/Pages/Home/Viewport";
import ServicesPage_1 from "../Template/Pages/Services/ServicesPage_1";
import FeaturedPage_1 from "../Template/Pages/Featured/FeaturedPage_1";
// Editable Components

function EditorLayout() {
  const DefaultWindowsLocation = window.location.href;
  console.log(DefaultWindowsLocation);

  const { currentPage } = useEditorNav();

  const RenderedPage = (() => {
    switch (currentPage) {
      case "preview":
        return <PreviewPage />;
      case "services":
        return <ServicesPage_1 />;
      case "featured":
        return <FeaturedPage_1 />;
      default:
        return <PreviewPage />;
    }
  })();

  return (
    <div className="flex flex-col flex-1 w-screen h-full overflow-hidden">
      <Header />
      <div className="flex flex-row flex-1 overflow-hidden">
        {/* Left Panel */}

        <div className="flex flex-col h-full">
          <h1 className="p-5 border-b border-[#D7D7D7] font-bold">
            Edit Element
          </h1>
          <div className="flex flex-row flex-1 overflow-hidden ">
            <div
              className="flex-1 px-5 py-6 w-98 bg-[#FCFCFC] overflow-y-auto h-full scroll-smooth"
              id="scroll"
            >
              <SettingController />
            </div>
          </div>
        </div>
        <div className="flex flex-1 min-w-0">{RenderedPage}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <EditorNavProvider>
      <EditorLayout />
    </EditorNavProvider>
  );
}
