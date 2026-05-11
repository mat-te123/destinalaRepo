function Template() {
  return (
    <div className="bg-[#D7D7D7] w-full h-48 flex items-center justify-center rounded-4xl">
    </div>
  );
}

function Section() {
  return (
    <div className="flex flex-col ">
      <div>
        <h1 className="font-bold">Template Content Website</h1>
        <span>1440 x 768</span>
      </div>
      <div className="flex flex-col border-t border-[#D7D7D7] mt-4 pt-10 gap-4 px-10">
        {/* Section Content Demo */}
      {[...Array(10)].map((_, index) => (
        <Template key={index} />
      ))}
      </div>
    </div>
  );
}

export default Section;
