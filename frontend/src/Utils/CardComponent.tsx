import { TextComponent } from "./TextComponent";

interface CardProps {
  title?: string;
  backgroundImage?: string;
  hasoverlay?: boolean;
}

function CardComponent({
  title,
  backgroundImage = "./ContentPlaceholder.jpg",
  hasoverlay,
}: CardProps) {
  const cardStyle: React.CSSProperties = {
    width: "100%",
    height: "450px",
    borderRadius: "40px",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    background: hasoverlay
      ? `linear-gradient(0deg, #000 0%, rgba(102, 102, 102, 0.00) 100%), url(${backgroundImage})`
      : `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div style={cardStyle}>
      {title && <TextComponent context={title} fontSize="20px" fontColor="fffff" fontWeight={600} />}
    </div>
  );
}

export default CardComponent;
