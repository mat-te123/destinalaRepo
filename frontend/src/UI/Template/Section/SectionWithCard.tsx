import { useEditorNav } from "../../../Services/EditorNavContext";
import { useLocation, useNavigate } from "react-router";
// UI Component
import { TextComponent } from "../../Utils/TextComponent";
import CardComponent from "../../Utils/CardComponent";

interface SectionWithCardProps {
  // Define any props you want to pass to the section or cards here
  SubDefinition?: string;

}

function SectionWithCard({ SubDefinition }: SectionWithCardProps) {
  const { navigateTo } = useEditorNav();
  const location = useLocation();
  const navigate = useNavigate();
  const isEditor = location.pathname.includes("editor");


  const cardData = ["Tehran", "Maldive", "Bali"]; // Example card data
  const TextPlaceholder =
    "This is a sub definition for the section. It provides additional information about the content of the cards.";

  return (
    <div className="flex flex-col py-12 px-50 w-full items-center gap-8">
      <h1 className="text-5xl font-semibold leading-tight text-center">
        Paket layanan Company ini
      </h1>
      <TextComponent
        context={SubDefinition || TextPlaceholder}
        fontSize="18px"
        fontColor="#333"
        fontWeight={500}
      />
      <div className="flex flex-row w-full gap-4 justify-center">
        {cardData.map((data, index) => (
          <div key={index} className="shrink-0 snap-center">
          <CardComponent key={index} title={data} hasoverlay={true} width="300px" height="350px" hasLinkClick={true} onCardClick={() => isEditor ? navigateTo("services") : navigate("/services")} Padding={[40, 20]} radius={30}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWithCard;
