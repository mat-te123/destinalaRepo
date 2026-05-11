// UiComponent
import { TextComponent } from "../Utils/TextComponent";
import ButtonComponent from "../Utils/ButtonComponent";
import { Container } from "../Utils/ContainerComponent";
import { Frame, Element } from "@craftjs/core";
import Hero1 from "./Hero/Hero1";


function TemplateTest() {
  return (
    <Frame>
      <Element canvas is={Container} padding={20} background="#ffffff">
        <TextComponent context="Main Font" />
        <TextComponent context="Sub Font" />
        <ButtonComponent context="Click me" />
      </Element>
    </Frame>
  );
}

export default TemplateTest;
