import { useEditorNav } from "../../../../Services/EditorNavContext";
import { useLocation, useNavigate, useParams } from "react-router";
import { useState, useEffect  } from "react";
import CardWithTextAndImage from "../../../Utils/CardWithTextAndImage";
import { StaticCardComponent } from "../../../Utils/CardComponent";
import MainTemplate from "../../MainTemplate";
import { type DestinationPageContent } from "./DestinationInterface";
import PackageMain from "../Package/PackageMain";

// 
import { DestinationAPI } from "../../../../Api/Services/DestinationAPI";
import { PackageAPI } from "../../../../Api/Services/PackageAPI";


function DestinationPage_1() {
  const { navigateTo } = useEditorNav();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditor = location.pathname.includes("editor");

  const [isLoad, setLoad] = useState<boolean>(false)
  const [Destination, setDestination] = useState<DestinationPageContent | null>(null)

  console.log({Destination})





  // Fetch API function
  const fetchingDestination = () => {
    if (id) {
      DestinationAPI.getById(parseInt(id))
        .then((res) => {
          setDestination(res.data);
          setLoad(false);
        })
        .catch((error) => {
          console.warn(`Error Fetching destination With ID =  ${id}`, error);
          setLoad(false);
        });
    } else {
      console.warn("No ID provided in URL");
      setLoad(false);
    }

  }

  useEffect(() => {
    setLoad(true);
    fetchingDestination();
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
    )
  }

  // Featured Mock
  const FeaturedCount = [
    "Paket Wisata",
    "Transportasi",
    "Akomodasi",
    "Kuliner",
    "Oleh-oleh",
  ];

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
          <h1 className="text-6xl font-semibold">{Destination?.main_data.main_title}</h1>
          <p className="text-lg font-medium">{Destination?.main_data.main_description}</p>
        </div>
        <div className="flex flex-col px-12 pt-16 gap-6">
          <h1 className="w-full text-center text-[58px] font-semibold border-b-2 border-gray-300 pb-8">
            Tentang {Destination?.main_data.main_title}
          </h1>
        </div>
        {/* Destination Content */}
        <div className="flex flex-col ">
          {Destination?.content_data?.map((content, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={isEven ? "bg-white" : "bg-[#E6E6E694]"}
              >
                <CardWithTextAndImage
                  CardTitle={
                    content.content_title || "Nama Destinasi"
                  }
                  CardDescription={
                    content.content_desc ||
                    "Klitih di Jogja merujuk pada kegiatan jalan-jalan tanpa tujuan, seringkali dilakukan malam hari, untuk mencari interaksi sosial atau petualangan. Ini adalah fenomena kontroversial yang melibatkan kelompok pemuda, kadang-kadang menyebabkan kejahatan kecil atau vandalisme, memicu keprihatinan dan perdebatan di masyarakat."
                  }
                  // Sementara pakai gambar placeholder, nanti tinggal ganti dengan gambar dari API
                  CardImage={
                    "/ContentPlaceholder.jpg"
                  }
                  isReverse={!isEven}
                />
              </div>
            );
          })}
        </div>
        {/* Featured */}
        <div className="flex flex-row p-8 gap-10">
          <PackageMain
            title="Paket Wisata"
            description="Jelajahi berbagai paket wisata menarik yang kami tawarkan, dirancang untuk memberikan pengalaman tak terlupakan bagi setiap pelancong."
            fetchData={() => PackageAPI.getIndexDestinations(id ? parseInt(id) : 0)}
          />
        </div>
      </MainTemplate>
    </div>
  );
}


export default DestinationPage_1;
