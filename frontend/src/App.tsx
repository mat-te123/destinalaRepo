import { Routes, Route } from "react-router";
import { Editor } from "@craftjs/core";

import PreviewPage from "./UI/Main/Viewport";
import EditorPage from "./UI/Main/EditorPage";

// Resolver Components
import { TextComponent } from "./UI/Utils/TextComponent";
import ButtonComponent from "./UI/Utils/ButtonComponent";
import { Container } from "./UI/Utils/ContainerComponent";
import TestimonialCard from "./UI/Utils/TestimonialCard";
import Hero1 from "./UI/Template/Hero/Hero1";
import SectionWithCard from "./UI/Template/Section/SectionWithCard";
import SectionWithReasonText from "./UI/Template/Section/SectionWithReasonText";
import SectionWithService from "./UI/Template/Section/SectionWIthService";
import SectionWithTestimonial from "./UI/Template/Section/SectionWithTestimonial";
import SectionWithAbout from "./UI/Template/Section/SectionWithAbout";
import SectionWithEmailSection from "./UI/Template/Section/SectionWithEmailSection";
import Footer_1 from "./UI/Template/Footer/Footer_1";
import ServicesPage_1 from "./UI/Template/Pages/Services/ServicesPage_1";
import FeaturedPage_1 from "./UI/Template/Pages/Featured/FeaturedPage_1";

const resolver = {
  TextComponent,
  Container,
  ButtonComponent,
  Hero1,
  SectionWithCard,
  SectionWithReasonText,
  SectionWithService,
  SectionWithTestimonial,
  SectionWithAbout,
  SectionWithEmailSection,
  TestimonialCard,
  Footer_1,
  ServicesPage_1,
  FeaturedPage_1
};

function App() {
  return (
    <Editor
      resolver={resolver}
      enabled={true} // This one line handles everything
    >
      <Routes>
        <Route path="/Editor" element={<EditorPage />} />
        <Route path="/" element={<PreviewPage />} />
        <Route path="/services" element={<ServicesPage_1 />} />
        <Route path="/services/featured" element={<FeaturedPage_1 />} />
      </Routes>
    </Editor>
    
  );
}

export default App;
