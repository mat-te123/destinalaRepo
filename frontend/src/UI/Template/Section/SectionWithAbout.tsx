import CardWithTextAndImage from "../../Utils/CardWithTextAndImage";

function SectionWithAbout() {
  const aboutsItems = 5;
  return (
    <div className="flex flex-col py-12 w-full items-start ">
      <h1 className="w-full text-center font-semibold text-6xl border-b-2 pb-4">Tentang Destinala</h1>
        {Array.from({ length: aboutsItems }).map((_, index) => {
            const iseven = index % 2 === 0;
            return (
                <div key={index} className={iseven ? "bg-white" : "bg-[#E6E6E694]"} >
                    <CardWithTextAndImage key={index} isReverse={!iseven} />
                </div>
            );
        })}
    </div>
  );
}

export default SectionWithAbout;
