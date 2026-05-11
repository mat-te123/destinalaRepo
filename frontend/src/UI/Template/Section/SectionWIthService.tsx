import CardWithButtonComponent from "../../Utils/CardWithButtonComponenet";


function SectionWithService() {
  const services = 5;
  return (
    <div className="flex flex-col py-12 px-50 md:px-20 w-full items-start gap-5">
      <div className="flex flex-row items-center justify-between w-full border-b-2 border-[#E6E6E6] pb-4">
        <h1 className="text-6xl font-semibold ">Layanan Servis Kami</h1>
        <span className="font-semibold cursor-pointer">
          Lihat lainnya {">"}
        </span>
      </div>
      <div className="flex flex-row overflow-x-auto gap-10 w-full shrink-0">
        {Array.from({ length: services }).map((_, index) => (
          <div className="shrink-0 snap-center">
            <CardWithButtonComponent key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWithService;
