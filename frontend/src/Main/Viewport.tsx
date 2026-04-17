import { Frame, useEditor, Element } from "@craftjs/core";
import Hero1 from "../Template/Hero/Hero1";
import SectionWithCard from "../Template/Section/SectionWithCard";
import { Container } from "../Utils/ContainerComponent";
import SectionWithReasonText from "../Template/Section/SectionWithReasonText";

function PreviewPage() {
  const { connectors } = useEditor();
  return (
    <div
      className="flex-1 h-full w-full bg-gray-50 overflow-auto"
      ref={(ref) => {
        if (ref) {
          connectors.select(connectors.hover(ref, ""), "");
        }
      }}
    >
      <Frame>
        <Element
          id="root"
          canvas
          is={Container}
          padding={[0]}
          background="#ffffff"
        >
          <Hero1 />
          <SectionWithCard />
          <SectionWithReasonText />
        </Element>
      </Frame>
    </div>
  );
}

export default PreviewPage;
