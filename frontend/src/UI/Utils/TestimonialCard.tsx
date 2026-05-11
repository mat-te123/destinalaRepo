interface TestimonialCardProps {
  RatingNumber?: number;
  MainRespond?: string;
  SubRespond?: string;
  UserData?: {
    Name?: string;
    location?: string;
    Profile?: string;
  };
}

function TestimonialCard({
  RatingNumber = 0,
  MainRespond = "Awosome",
  SubRespond = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quasi quos impedit sint deserunt voluptas commodi tenetur delectus quibusdam rem.",
  UserData,
}: TestimonialCardProps) {
  const color = {
    true: "#F59E0B",
    false: "#E5E7EB",
  };

  const RatingArray = Array(5).fill(0);
  return (
    <div className="border-2 rounded-3xl px-8 py-10 min-w-80 max-w-80 bg-white shadow-sm flex flex-col gap-4 items-center">
      <div className="flex flex-row">
        {RatingArray.map((_, index) => (
          <img
            key={index}
            src={"./Star.svg"}
            alt="Star"
            style={{ color: index < RatingNumber ? color.true : color.false }}
          />
        ))}
      </div>
      <h2 className="w-full text-4xl font-semibold">{MainRespond}</h2>
      <p className="w-full text-md">{SubRespond}</p>
      <div className="flex flex-row gap-4 items-center mt-4 w-full">
        <img
          src={
            UserData?.Profile ? UserData?.Profile : "./ContentPlaceholder.jpg"
          }
          alt={UserData?.Name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{UserData?.Name ? UserData?.Name : "Default User"}</h3>
          <p className="text-[16px]">{UserData?.location ? UserData?.location : "Default Location"}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
