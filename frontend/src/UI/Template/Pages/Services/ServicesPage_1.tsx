import { useEditorNav } from "../../../../Services/EditorNavContext";
import { useLocation, useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import CardWithTextAndImage from "../../../Utils/CardWithTextAndImage";
import MainTemplate from "../../MainTemplate";
import { type ServicePageContent } from "./ServiceInterface";
import PackageMain from "../Package/PackageMain";

// API
import { ServiceAPI } from "../../../../Api/Services/ServiceAPI";
import { PackageAPI } from "../../../../Api/Services/PackageAPI";

function ServicesPage_1() {
  const { navigateTo } = useEditorNav();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditor = location.pathname.includes("editor");

  const [isLoad, setLoad] = useState<boolean>(false);
  const [Service, setService] = useState<ServicePageContent | null>(null);

  // Fetch API function
  const fetchingService = () => {
    if (id) {
      ServiceAPI.show(parseInt(id))
        .then((res) => {
          setService(res.data);
          setLoad(false);
        })
        .catch((error) => {
          console.warn(`Error Fetching service With ID =  ${id}`, error);
          setLoad(false);
        });
    } else {
      console.warn("No ID provided in URL");
      setLoad(false);
    }
  };

  useEffect(() => {
    setLoad(true);
    fetchingService();
  }, [id]);

  const NavigateHandler = (id: string) => {
    if (isEditor) {
      navigateTo("services");
    } else {
      navigate(`/package/${id}`);
    }
  };

  if (isLoad) {
    return (
      <MainTemplate>
        <div className="flex-1 h-full w-full bg-gray-50 overflow-auto font-main min-w-0">
          <h1 className="text-6xl font-semibold">Loading...</h1>
        </div>
      </MainTemplate>
    );
  }

  // Featured Mock

  return (
    <div className="flex-1 h-full w-full bg-gray-50 overflow-auto font-main min-w-0">
      <MainTemplate>
        <div
          className="min-h-screen flex flex-col justify-end px-12 py-16 gap-6 text-white"
          // Sementara pakai gambar placeholder, nanti tinggal ganti dengan gambar dari API
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${"/ContentPlaceholder.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-6xl font-semibold">
            {Service?.service.main_title}
          </h1>
          <p className="text-lg font-medium">{Service?.service.main_desc}</p>
        </div>
        <div className="flex flex-col px-12 pt-16 gap-6">
          <h1 className="w-full text-center text-[58px] font-semibold border-b-2 border-gray-300 pb-8">
            Tentang {Service?.service.main_title}
          </h1>
        </div>
        {/* Service Content */}
        <div className="flex flex-col ">
          {Service?.content?.map((content, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={isEven ? "bg-white" : "bg-[#E6E6E694]"}
              >
                <CardWithTextAndImage
                  CardTitle={content.content_title || "Nama Destinasi"}
                  CardDescription={
                    content.content_desc ||
                    "Klitih di Jogja merujuk pada kegiatan jalan-jalan tanpa tujuan, seringkali dilakukan malam hari, untuk mencari interaksi sosial atau petualangan. Ini adalah fenomena kontroversial yang melibatkan kelompok pemuda, kadang-kadang menyebabkan kejahatan kecil atau vandalisme, memicu keprihatinan dan perdebatan di masyarakat."
                  }
                  // Sementara pakai gambar placeholder, nanti tinggal ganti dengan gambar dari API
                  CardImage={"/ContentPlaceholder.jpg"}
                  isReverse={!isEven}
                />
              </div>
            );
          })}
        </div>
        {/* Featured */}
        <div className="flex flex-row p-8 gap-10">
          <PackageMain
            title={`Layanan Unggulan ${Service?.service.main_title}`}
            description={`Jelajahi layanan unggulan kami yang dirancang khusus untuk memenuhi kebutuhan Anda. Dari paket wisata eksklusif hingga layanan transportasi yang nyaman, kami menawarkan berbagai pilihan untuk memastikan pengalaman perjalanan Anda tak terlupakan. Temukan layanan terbaik kami dan buat perjalanan Anda menjadi lebih istimewa bersama kami.`}
            fetchData={() => PackageAPI.getIndexServices(id ? parseInt(id) : 0)}
            
          />
        </div>
      </MainTemplate>
    </div>
  );
}

export default ServicesPage_1;
