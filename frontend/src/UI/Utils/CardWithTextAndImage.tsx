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
    <div className={`flex flex-row gap-10 items-center p-10 ${isreverse ? "flex-row-reverse bg-gray-100" : ""} `}>
      <img src="../ContentPlaceholder.jpg" alt="" className="w-150 h-150 object-cover rounded-4xl" />
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
      <img src={CardImage} alt="" className="h-112 object-cover rounded-2xl" />
      <div className="flex flex-col w-full">
        <h2 className="text-5xl font-semibold">{CardTitle}</h2>
        <p className="text-xl">{CardDescription}</p>
      </div>
    </div>
  );
}

export default CardWithTextAndImage;
export { StaticCardWithTextAndImage };
