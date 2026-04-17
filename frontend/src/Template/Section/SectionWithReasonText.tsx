import { Element } from "@craftjs/core";
import { Container } from "../../Utils/ContainerComponent";
import { TextComponent } from "../../Utils/TextComponent";
import ButtonComponent from "../../Utils/ButtonComponent";

interface SectionWithReasonTextProps {
  BackgroundImage?: string;
  MainFont?: string;
  SubFont?: string;
}

function SectionWithReasonText({
  BackgroundImage = "./ContentPlaceholder.jpg",
  SubFont = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}: SectionWithReasonTextProps) {
  return (
    <Element
      id="SectionWithReason"
      canvas
      is={Container}
      background={BackgroundImage || "#ffffff"}
      padding={[200, 150]}
    >
      <Element
        id="TextContainer"
        canvas
        is={Container}
        background="#ffffff80"
        gap={20}
        padding={[70, 50]}
        borderRadius={30}
      >
        <h1 className="text-6xl font-semibold">
            Kenapa Pilih Perusahaan ini?
            </h1>
        <TextComponent
          context={SubFont || ""}
          fontColor="#000000"
          fontSize="18px"
        />
        <ButtonComponent
          context="Pesan Trip"
          radius={10}
          backgroundColor="#28282B"
        />
      </Element>
    </Element>
  );
}

export default SectionWithReasonText;
