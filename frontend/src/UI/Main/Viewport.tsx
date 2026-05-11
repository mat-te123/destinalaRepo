import { Frame, useEditor, Element } from "@craftjs/core";
import Hero1 from "../Template/Hero/Hero1";
import SectionWithCard from "../Template/Section/SectionWithCard";
import { Container } from "../Utils/ContainerComponent";
import SectionWithReasonText from "../Template/Section/SectionWithReasonText";
import SectionWithService from "../Template/Section/SectionWIthService";
import SectionWithTestimonial from "../Template/Section/SectionWithTestimonial";
import SectionWithAbout from "../Template/Section/SectionWithAbout";
import SectionWithEmailSection from "../Template/Section/SectionWithEmailSection";
import MainTemplate from "../Template/MainTemplate";


function PreviewPage() {
  const { connectors } = useEditor();
  return (
    <div
      className="flex-1 h-full w-full bg-gray-50 overflow-auto font-main min-w-0"
      ref={(ref) => {
        if (ref) {
          connectors.select(connectors.hover(ref, ""), "");
        }
      }}
    >
      <MainTemplate>
        <Frame>
          <Element
            id="root"
            canvas
            is={Container}
            padding={[0]}
            background="#ffffff"
            islocked={true}
            
          >
            <Hero1 />
            <SectionWithCard />
            <SectionWithReasonText />
            <SectionWithService />
            <SectionWithTestimonial />
            <SectionWithAbout />
            <SectionWithEmailSection />
          </Element>
        </Frame>
      </MainTemplate>
    </div>
  );
}

export default PreviewPage;
