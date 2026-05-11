import MainTemplate from "../../MainTemplate";
import { MyPlayer } from "../../../Utils/VideoPlayer";
import { StaticCardWithTextAndImage } from "../../../Utils/CardWithTextAndImage";
import SectionWithEmailSection from "../../Section/SectionWithEmailSection";

interface FeaturedPage_1Props {
  isEditMode?: boolean;
  FeaturedName?: string;
  FeaturedDesc?: string;
  FeaturedDetail?: {
    FeaturedDetailName?: string;
    FeaturedDetailNameDesc?: string;
    FeaturedDetailList?: string[];
  };
}

function FeaturedPage_1({
  FeaturedName = "Default Name",
  FeaturedDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam dolores, natus modi cupiditate eum quis voluptates earum, quae deleniti cumque officiis officia cum ratione quaerat culpa tempore reiciendis eveniet.",
  FeaturedDetail,
}: FeaturedPage_1Props) {
  const FeaturedCount = 2;
  return (
    <div className="flex-1 h-full w-full bg-gray-50 overflow-auto font-main min-w-0">
      <MainTemplate>
        <div className="bg-[url(../ContentPlaceholder.jpg)] p-16 font-main bg-cover bg-center">
          <h1 className="text-[58px] font-semibold text-white">
            {FeaturedName}
          </h1>
          <p className="text-[26px] font-medium text-white">{FeaturedDesc}</p>
        </div>
        <div className="pt-16">
          <h1 className="text-6xl text-center font-semibold pb-5 mb-5 border-b-2 mx-10">
            Apa Yang kami Tawarkan
          </h1>
          {Array.from({ length: FeaturedCount }).map((_, index) => {
            const iseven = index % 2 === 0;
            return (
              <div key={index} className="flex flex-col gap-10">
                <StaticCardWithTextAndImage isreverse={!iseven}>
                  <h2 className="text-4xl font-semibold mb-4">
                    {FeaturedDetail?.FeaturedDetailName || "Detail Name"}
                  </h2>
                  <p className="text-lg mb-4">
                    {FeaturedDetail?.FeaturedDetailNameDesc ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam dolores, natus modi cupiditate eum quis voluptates earum, quae deleniti cumque officiis officia cum ratione quaerat culpa tempore reiciendis eveniet."}
                  </p>
                  <ul className="list-disc list-inside">
                    {FeaturedDetail?.FeaturedDetailList?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    )) || (
                      <>
                        <li>Fitur Unggulan 1</li>
                        <li>Fitur Unggulan 2</li>
                        <li>Fitur Unggulan 3</li>
                      </>
                    )}
                  </ul>
                </StaticCardWithTextAndImage>
              </div>
            );
          })}
        </div>
        <SectionWithEmailSection />
        <div className="flex flex-col p-16 gap-10">
          <h1 className="text-6xl text-left font-semibold">
            Lihat GuideBook Kami tentang Layanan berikut
          </h1>
          <div className="flex flex-row gap-10">
            <MyPlayer src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
          </div>
        </div>
      </MainTemplate>
    </div>
  );
}

export default FeaturedPage_1;
