import ButtonComponent from "./ButtonComponent";

interface CardWithButtonProps {
  ServicesImage?: string;
  ServiceTitle?: string;
  ServiceDescription?: string;
}

function CardWithButtonComponent({
  ServicesImage = "./ContentPlaceholder.jpg",
  ServiceTitle = "Service Title",
  ServiceDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}: CardWithButtonProps) {
  return (
    <div className="flex flex-col border-2 border-[#E6E6E6] bg-white rounded-3xl p-5 gap-4 min-w-156 max-w-156">
      <img src={ServicesImage} alt="" className="rounded-2xl" />
      <div>
        <h1 className="text-3xl font-semibold">{ServiceTitle}</h1>
        <p>{ServiceDescription}</p>
      </div>
      <div className="w-full flex justify-end">
        <ButtonComponent
          context="pesan trip"
          backgroundColor="black"
          radius={9}
        />
      </div>
    </div>
  );
}

export default CardWithButtonComponent;
