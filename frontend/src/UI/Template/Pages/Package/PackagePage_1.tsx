import MainTemplate from "../../MainTemplate";
import { MyPlayer } from "../../../Utils/VideoPlayer";
import { StaticCardWithTextAndImage } from "../../../Utils/CardWithTextAndImage";
import SectionWithEmailSection from "../../Section/SectionWithEmailSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {type PackageContentDetailResponse } from "./PackageInterface";

// API
import { PackageAPI } from "../../../../Api/Services/PackageAPI";

function PackagePage_1() {
  const { id } = useParams();
  const [packageData, setPackageData] = useState<PackageContentDetailResponse | null>(null);
  const [isLoad, setLoad] = useState<boolean>(false);

  const fetchPackageData = () => {
    if (id) {
      PackageAPI.getContent(parseInt(id))
        .then((res) => {
          setPackageData(res.data);
        })
        .catch((error) => {
          console.warn(`Error Fetching package With ID =  ${id}`, error);
        });
    } else {
      console.warn("No ID provided in URL");
    }
  }

  useEffect(() => {
    setLoad(false);
    fetchPackageData();
  }, [id]);

  if (isLoad || !packageData) {
    return (
      <MainTemplate>
        <div className="flex-1 h-screen w-full bg-white overflow-auto font-main min-w-0">
          <h1 className="text-xl font-semibold text-black">Loading...</h1>
        </div>
      </MainTemplate>
    );
  }


  return (
    <div className="flex-1 h-full w-full bg-gray-50 overflow-auto font-main min-w-0 mt-15">
      <MainTemplate>
        <div className="flex flex-col justify-end p-20 font-main bg-cover bg-center h-130 gap-5" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0.85) 100%), url(/ContentPlaceholder.jpg)`,
        }}>
          <h1 className="text-5xl font-semibold text-white">
            {packageData.main.main_title}
          </h1>
          <p className="text-2xl font-medium text-white">{packageData.main.main_desc}</p>
        </div>
        <div className="pt-16">
          <h1 className="text-6xl text-center font-semibold pb-5 mb-5 border-b-2 mx-10">
            Apa Yang kami Tawarkan
          </h1>
          {packageData.contents.map((content, index) => {
            const iseven = index % 2 === 0;
            return (
              <div key={index} className="flex flex-col gap-10">
                <StaticCardWithTextAndImage isreverse={!iseven}>
                  <h2 className="text-4xl font-semibold mb-4">
                    {content.content_title}
                  </h2>
                  <p className="text-lg mb-4">
                    {content.content_desc}
                  </p>
                </StaticCardWithTextAndImage>
              </div>
            );
          })}
        </div>
        <SectionWithEmailSection />
        <div className="flex flex-col p-16 gap-10">
          <h1 className="text-6xl text-left font-semibold -mb-5 truncate w-4/5">
            Lihat GuideBook Kami tentang {packageData.main.main_title}
          </h1>
          <hr className="border-b-2 border-gray-300" />
          <MyPlayer src="/TestVideo.mp4" />
        </div>
      </MainTemplate>
    </div>
  );
}

export default PackagePage_1;
