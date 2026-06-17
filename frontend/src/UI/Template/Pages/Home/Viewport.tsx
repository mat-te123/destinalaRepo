  import { Frame, useEditor, Element } from "@craftjs/core";
  import Hero1 from "../../Hero/Hero1";
  import SectionWithCard from "../../Section/SectionWithCard";
  import { StaticContainer } from "../../../Utils/ContainerComponent";
  import SectionWithReasonText from "../../Section/SectionWithReasonText";
  import SectionWithService from "../../Section/SectionWIthService";
  import SectionWithTestimonial from "../../Section/SectionWithTestimonial";
  import SectionWithAbout from "../../Section/SectionWithAbout";
  import SectionWithEmailSection from "../../Section/SectionWithEmailSection";
  import MainTemplate from "../../MainTemplate";
  import { useEffect, useState } from "react";

  // API

  function PreviewPage() {
    const { connectors } = useEditor();
    const [loadedData, setLoadedData] = useState<string | null>(null);

    console.log({ loadedData });


    useEffect(() => {
      const savedData = localStorage.getItem("UI-Component");

      if (savedData) {
        try {
          const { timestamp, data } = JSON.parse(savedData);
          const OneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
          const isFresh = Date.now() - timestamp < OneDay;

          if (isFresh) {
            setLoadedData(data);
          } else {
            localStorage.removeItem("craft-ui-draft");
          }
        } catch (error) {
          console.error("Error parsing saved data:", error);
        }
      }
    }, []);


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
          <Frame data={loadedData || undefined}>
            <Element id="root" canvas is={StaticContainer} DivStyle="bg-white">
              <Hero1 />
              <SectionWithCard description=""/>
              <SectionWithReasonText />
              <SectionWithService title="" />
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
