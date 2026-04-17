import { TextComponent } from "../../Utils/TextComponent";
import CardComponent from "../../Utils/CardComponent";


interface SectionWithCardProps {
    // Define any props you want to pass to the section or cards here
    SubDefinition ?: string;
}

function SectionWithCard({SubDefinition }: SectionWithCardProps) {

    const cardData = ["Card 1", "Card 2", "Card 3", "Card 4"]; // Example card data
    const TextPlaceholder = "This is a sub definition for the section. It provides additional information about the content of the cards.";

    return (
        <div className="flex flex-col py-12 px-50 w-full items-center gap-8">
            <h1 className="text-5xl font-semibold leading-tight text-center"> 
                Paket layanan Company ini
            </h1>
            <TextComponent context={SubDefinition || TextPlaceholder} fontSize="18px" fontColor="#333" fontWeight={500} />
            <div className="flex flex-row w-full justify-between gap-10">
                {cardData.map((data, index) => (
                    <CardComponent key={index} title={data}  hasoverlay={true}/>
                ))}
            </div>

        </div>
    );
}



export default SectionWithCard;


