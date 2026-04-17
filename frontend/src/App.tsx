import { Routes, Route } from "react-router";
import { Editor } from "@craftjs/core";

import PreviewPage from "./Main/Viewport";
import EditorPage from "./Main/EditorPage";

// Resolver Components
import { TextComponent } from "./Utils/TextComponent";
import ButtonComponent from "./Utils/ButtonComponent";
import { Container } from "./Utils/ContainerComponent";
import Hero1 from "./Template/Hero/Hero1";
import SectionWithCard from "./Template/Section/SectionWithCard";
import SectionWithReasonText from "./Template/Section/SectionWithReasonText";

const resolver = {
  TextComponent,
  Container,
  ButtonComponent,
  Hero1,
  SectionWithCard,
  SectionWithReasonText,
};

function App() {

  return (
    <Editor 
      resolver={resolver} 
      enabled={false} // This one line handles everything
    >
      <Routes>
        <Route path="/" element={<EditorPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Editor>
  );
}

export default App;
