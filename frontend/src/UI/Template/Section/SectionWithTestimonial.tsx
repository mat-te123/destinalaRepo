import TestimonialCard from "../../Utils/TestimonialCard";

function SectionWithTestimonial() {
  const testimonials = 10;
  return (
    <div className="flex flex-col py-12 px-4 md:px-20 w-full gap-8 bg-[#BFBFBF1A] overflow-hidden">
      <h1 className="border-b-2 border-[#E6E6E6] pb-4 font-semibold text-6xl text-center">
        Testimonial Section
      </h1>
      <div className="flex flex-row w-full overflow-x-auto gap-8 pb-6 snap-x snap-mandatory no-scrollbar">
        {Array.from({ length: testimonials }).map((_, index) => (
          <div key={index} className="shrink-0 snap-center">
            <TestimonialCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWithTestimonial;
