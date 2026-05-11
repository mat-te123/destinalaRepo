import type React from "react";
import { TextComponent, NonEditableTextComponent } from "./TextComponent";

interface CardProps {
  title?: string;
  backgroundImage?: string;
  hasoverlay?: boolean;
  width?: string;
  height?: string;
  fontColor?: string;
  hasLinkClick?: boolean;
  LinkUrl?: string;
  Padding?: number[];
  radius?: number;
  onCardClick?: () => void;
}

interface StaticCardProps {
  divTailwindClass?: string;
  Context?: string;
  TextTailwindClass?: string;
  HasLinkClick?: boolean;
  onCardClick?: () => void;
}

function StaticCardComponent({
  divTailwindClass,
  TextTailwindClass = "p-4",
  Context = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque sint voluptates optio porro facere atque? Eos distinctio quae, nobis molestiae ipsam incidunt dolore veniam obcaecati exercitationem iste excepturi tempore.",
  HasLinkClick = false,
  onCardClick,
}: StaticCardProps) {
  console.log(HasLinkClick);
  return (
    <div className={divTailwindClass} onClick={onCardClick}>
      <NonEditableTextComponent
        TailwindStyle={TextTailwindClass}
        Context={Context}
        HasLinkClick={HasLinkClick}
      />
    </div>
  );
}

function CardComponent({
  title,
  backgroundImage = "./ContentPlaceholder.jpg",
  hasoverlay,
  width,
  height,
  fontColor = "#ffffff",
  hasLinkClick = false,
  radius,
  Padding,
  onCardClick,
}: CardProps) {
  const cardStyle: React.CSSProperties = {
    width: width || "100%",
    height: height || "450px",
    borderRadius: `${radius || 20}px`,
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    background: hasoverlay
      ? `linear-gradient(0deg, #000 0%, rgba(102, 102, 102, 0.00) 100%), url(${backgroundImage})`
      : `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding:
      Padding?.length === 2
        ? `${Padding[0]}px ${Padding[1]}px`
        : `${Padding ? Padding[0] : 20}px`,
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.4)",
    cursor: hasLinkClick ? "pointer" : "default",
    justifyContent: "space-between",
  };

  return (
    <div style={cardStyle} onClick={onCardClick}>
      {title && (
        <TextComponent
          context={title}
          fontSize="20px"
          fontColor={fontColor}
          fontWeight={600}
        />
      )}
      {hasLinkClick && (
        <span style={{ color: fontColor, fontSize: "20px" }}>{">"}</span>
      )}
    </div>
  );
}

export default CardComponent;
export { StaticCardComponent };
