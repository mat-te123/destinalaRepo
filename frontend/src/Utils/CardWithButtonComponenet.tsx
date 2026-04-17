import { Button } from "@heroui/react";


interface CardWithButtonProps {
    ServicesImage ?: string;
    ServiceTitle ?: string;
    ServiceDescription ?: string;
}

function CardWithButtonComponent({
    ServicesImage = "./ContentPlaceholder.jpg",
    ServiceTitle = "Service Title",
    ServiceDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}: CardWithButtonProps) {
    return (
        <div className="flex flex-col border-[#E6E6E6] bg-white rounded-xl">
            <img src={ServicesImage} alt="" />
            <div>
                <h1>
                    {ServiceTitle}
                </h1>
                <p>
                    {ServiceDescription}
                </p>
            </div>
            <div>
                <Button>

                </Button>
            </div>


        </div>
    );
}