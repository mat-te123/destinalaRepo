import Header from "../reuseableUI/Header";
import ElementSelector from "./ElementSelector";
// import TemplateTest from "../Template/TemplateTest";
import PreviewPage from "../Main/Viewport";
import { Button } from "@heroui/react";
import { useState } from "react";
// Editable Components

function Home() {
  const Text: string = "./Text.png";
  const Image: string = "./Image.png";
  const Section: string = "./Section.png";

  const [selectedElement, setSelectedElement] = useState<string>("Text");

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
            {/* Element Options */}
            <div className="flex flex-col bg-[#F6F6F6] p-4 gap-8 w-48 h-full">
              <Button
                className="w-full border bg-[#F6F6F6] border-black shadow-lg/20 text-black flex flex-row items-center justify-start py-5"
                onClick={() => setSelectedElement("Text")}
              >
                <img src={Text} alt="Text" />
                Text
              </Button>
              <Button
                className="w-full border bg-[#F6F6F6] border-black shadow-lg/20 text-black flex flex-row items-center justify-start py-5"
                onClick={() => setSelectedElement("Image")}
              >
                <img src={Image} alt="Image" />
                Image
              </Button>
              <Button
                className="w-full border bg-[#F6F6F6] border-black shadow-lg/20 text-black flex flex-row items-center justify-start py-5"
                onClick={() => setSelectedElement("Section")}
              >
                <img src={Section} alt="Section" />
                Section
              </Button>
            </div>
            {/* Element Editor */}
            <div
              className="flex-1 px-5 py-6 w-98 bg-[#FCFCFC] overflow-y-auto h-full scroll-smooth"
              id="scroll"
            >
              <ElementSelector selectedElement={selectedElement} />
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <PreviewPage />
        </div>
      </div>
    </div>
  );
}

export default Home;
