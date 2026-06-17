import { Routes, Route } from "react-router";
import { Editor } from "@craftjs/core";

import PreviewPage from "./UI/Template/Pages/Home/Viewport";
import EditorPage from "./UI/Main/EditorPage";

// Resolver Components
import { TextComponent } from "./UI/Utils/TextComponent";
import ButtonComponent from "./UI/Utils/ButtonComponent";
import { Container, StaticContainer } from "./UI/Utils/ContainerComponent";
import TestimonialCard from "./UI/Utils/TestimonialCard";
import Hero1 from "./UI/Template/Hero/Hero1";
import SectionWithCard from "./UI/Template/Section/SectionWithCard";
import SectionWithReasonText from "./UI/Template/Section/SectionWithReasonText";
import SectionWithService from "./UI/Template/Section/SectionWIthService";
import SectionWithTestimonial from "./UI/Template/Section/SectionWithTestimonial";
import SectionWithAbout from "./UI/Template/Section/SectionWithAbout";
import SectionWithEmailSection from "./UI/Template/Section/SectionWithEmailSection";
import Footer_1 from "./UI/Template/Footer/Footer_1";
import FeaturedPage_1 from "./UI/Template/Pages/Featured/FeaturedPage_1";
import DestinationPage from "./UI/Template/Pages/Destination/DestinationMainPage";
import DestinationPage_1 from "./UI/Template/Pages/Destination/DestinationPage_1";
import PackagePage_1 from "./UI/Template/Pages/Package/PackagePage_1";
import ServicesPage from "./UI/Template/Pages/Services/ServicesMainPage";
import ServicesPage_1 from "./UI/Template/Pages/Services/ServicesPage_1";
import LoginPage from "./UI/Main/LoginPage";
import MediaPage from "./UI/Main/Media/MediaPage";
import Index from "./UI/Main/Welcome/Index";
import Service from "./UI/Main/Service/index";
import DestinationData from "./UI/Main/Destination/DestinationData";
import DestinationDetail from "./UI/Main/Destination/DestinationDetail";
import PackageData from "./UI/Main/Package/PackageData";
import PackageDetail from "./UI/Main/Package/PackageDetail";
import TestimoniData from "./UI/Main/Testimoni/TestimoniData";

const resolver = {
  TextComponent,
  Container,
  StaticContainer,
  ButtonComponent,
  Hero1,
  LoginPage,
  SectionWithCard,
  SectionWithReasonText,
  SectionWithService,
  SectionWithTestimonial,
  SectionWithAbout,
  SectionWithEmailSection,
  TestimonialCard,
  Footer_1,
  ServicesPage_1,
  FeaturedPage_1,
  DestinationPage,
  DestinationPage_1,
  PackagePage_1,
  ServicesPage,
};

function App() {
  return (
    <Editor
      resolver={resolver}
      enabled={true} // This one line handles everything
      onNodesChange={(query) => {
        const json = query.serialize();
        const SaveData = {
          timestamp: Date.now(),
          data: json,
        };
        localStorage.setItem("UI-Component", JSON.stringify(SaveData));
      }}
    >
      <Routes>
        {/* Admin Route */}
        <Route path="/admin" element={<EditorPage />}>
          <Route path="Dashboard" element={<Index />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="service" element={<Service />} />
          <Route path="destination">
            <Route index element={<DestinationData />} />
            <Route path="detail" element={<DestinationDetail />} />
          </Route>
          <Route path="package">
            <Route index element={<PackageData />} />
            <Route path="detail" element={<PackageDetail />} />
          </Route>
          <Route path="testimoni" element={<TestimoniData />} />
          {/* ChangeToId Later */}
        </Route>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/destination/:id" element={<DestinationPage_1 />} />
        <Route path="/package/:id" element={<PackagePage_1 />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:id" element={<ServicesPage_1 />} />
        <Route path="/services/featured" element={<FeaturedPage_1 />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Editor>
  );
}

export default App;
