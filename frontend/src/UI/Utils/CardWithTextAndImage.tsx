import React from "react";

interface CardWithTextAndImageProps {
  CardImage?: string;
  CardTitle?: string;
  CardDescription?: string;
  isReverse?: boolean;
}

interface StaticCardWithTextAndImageProps {
  children: React.ReactNode;
  isreverse?: boolean;
}

function StaticCardWithTextAndImage({
  children,
  isreverse = false,
}: StaticCardWithTextAndImageProps) {
  return (
    <div className={`flex flex-row gap-8 items-center p-12 ${isreverse ? "flex-row-reverse bg-[#F0F0F0]" : ""} `}>
      <img src="../ContentPlaceholder.jpg"  className="h-112 object-cover rounded-2xl" />
      <div>{children}</div>
    </div>
  );
}

function CardWithTextAndImage({
  CardImage = "./ContentPlaceholder.jpg",
  CardTitle = "Default Title",
  CardDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit voluptatum vitae eveniet rem eum blanditiis, iusto, esse dolorum id ea dolorem dicta delectus repudiandae animi aliquid? Explicabo, totam placeat.",
  isReverse = false,
}: CardWithTextAndImageProps) {
  return (
    <div
      className={`flex flex-row justify-between items-center gap-8 p-12 ${isReverse ? "flex-row-reverse" : ""}`}
    >
      <img src={CardImage}  className="h-112 object-cover rounded-2xl" />
      <div className="flex flex-col w-full gap-4">
        <h2 className="text-5xl font-semibold">{CardTitle}</h2>
        <p className="text-xl">{CardDescription}</p>
      </div>
    </div>
  );
}

export default CardWithTextAndImage;
export { StaticCardWithTextAndImage };
