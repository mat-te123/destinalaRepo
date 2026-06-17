// import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router";
import { Button } from "@heroui/react/button";

interface CardWithButtonProps {
  ServicesImage?: string;
  ServiceTitle?: string;
  ServiceDescription?: string;
  LinkPath?: string; 
}

function CardWithButtonComponent({
  ServicesImage = "./ContentPlaceholder.jpg",
  ServiceTitle = "Service Title",
  ServiceDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  LinkPath

}: CardWithButtonProps) {

  const navigate = useNavigate();

  const ButtonNavigate = () => {
    // Implement navigation logic here, e.g., using react-router's useNavigate
    if (LinkPath) {
      navigate(LinkPath);
    } else {
      console.warn("LinkPath is not defined for this card.");
    }
  }

  return (
    <div className="flex flex-col border-2 border-[#E6E6E6] bg-white rounded-3xl p-5 gap-4 min-w-156 max-w-156 h-160">
      <img src={ServicesImage} alt="" className="rounded-2xl" />
      <div>
        <h1 className="text-3xl font-semibold line-clamp-2">{ServiceTitle}</h1>
        <p className="line-clamp-2">{ServiceDescription}</p>
      </div>
      <div className="w-full flex justify-end mt-auto">
        <Button className="bg-black text-white rounded-xl text-lg font-extralight py-3 px-6" onClick={ButtonNavigate}>
          Pesan Trip
        </Button>
      </div>
    </div>
  );
}

export default CardWithButtonComponent;
