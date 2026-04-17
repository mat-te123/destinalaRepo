import { TextComponent } from "../../Utils/TextComponent";
import ButtonComponent from "../../Utils/ButtonComponent";
import { Container } from "../../Utils/ContainerComponent";
import { Element, useNode } from "@craftjs/core";

interface Hero1Props {
  BackgroundImage?: string;
  MainFont?: string;
  SubFont?: string;
  ButtonText?: string;
  Padding?: number[];
  fontSize?: string;
  mainFontWeight?: number;
}

function Hero1({
  BackgroundImage,
  MainFont,
  SubFont,
  ButtonText,
  Padding,
  mainFontWeight,
}: Hero1Props) {
  console.log("Hero1 Props:", {
    BackgroundImage,
    MainFont,
    SubFont,
    ButtonText,
    Padding,
  });
  return (
    <Element
      id="hero1Section"
      canvas
      is={Container}
      padding={Padding !== undefined ? Padding : [200]}
      background={BackgroundImage || "#ffffff"}
      custom={{ displayName: "Hero Section" }}
      hasoverlay={true}
      minHeight="100vh"
    >
      <TextComponent
        context={MainFont || ""}
        fontColor="#ffffff"
        fontSize={"58px"}
        fontWeight={mainFontWeight || 600}
        letterSpacing={"-3px"}
      />
      <Element
        id="textButtonContainer"
        canvas
        is={Container}
        background=""
        gap={20}
      >
        <TextComponent
          context={SubFont || ""}
          fontColor="#ffffff"
          fontSize="34px"
        />
        <ButtonComponent
          context={ButtonText || ""}
          radius={10}
          backgroundColor="transparent"
        />
      </Element>
    </Element>
  );
}

function Hero1Settings() {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="flex flex-col gap-4">
      <label className="text-sm font-bold">Main Title</label>
      <input
        className="border p-2"
        value={props.MainFont}
        onChange={(e) =>
          setProp((p: any) => {
            p.MainFont = e.target.value;
          })
        }
      />
      {/* Add more inputs for BackgroundImage, SubFont, etc. */}
    </div>
  );
}

Hero1.craft = {
  props: {
    MainFont: "Travel Kemana Saja dengan Nyaman",
    MainFontStyle: "semibold",
    SubFont: "Travel Kemana Saja dengan Nyaman",
    fontSize: "58px",
    ButtonText: "Pesan Trip",
    BackgroundImage: "./ContentPlaceholder.jpg",
    padding: [200],
  },
  related: {
    settings: Hero1Settings,
  },
};

export default Hero1;
export { Hero1Settings };
