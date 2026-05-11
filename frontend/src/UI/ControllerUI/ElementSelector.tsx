import Setting from "./Controller/SettingController";
import Image from "./Controller/ImageController";
import Section from "./Controller/SectionController";

function ElementSelector({selectedElement}:{selectedElement:string}) {
    switch(selectedElement) {
        case "Text":
            return <Setting />;
        case "Image":
            return <Image />;
        case "Section":
            return <Section />;
        default:
            return <div>Select an element to edit</div>;
    }
}

export default ElementSelector;