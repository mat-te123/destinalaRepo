import Text from "./Element/Text";
import Image from "./Element/Image";
import Section from "./Element/Section";

function ElementSelector({selectedElement}:{selectedElement:string}) {
    switch(selectedElement) {
        case "Text":
            return <Text />;
        case "Image":
            return <Image />;
        case "Section":
            return <Section />;
        default:
            return <div>Select an element to edit</div>;
    }
}

export default ElementSelector;