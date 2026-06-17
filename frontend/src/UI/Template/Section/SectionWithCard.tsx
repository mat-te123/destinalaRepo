import { useEffect, useState } from "react";
import { useEditorNav } from "../../../Services/EditorNavContext";
import { useLocation, useNavigate } from "react-router";
// UI Component
import { TextComponent } from "../../Utils/TextComponent";
// import CardComponent from "../../Utils/CardComponent";
import { Button } from "@heroui/react";
import { type CardSectionProps, type ContentProps } from "./SectionInterface";

// API
import { DestinationAPI } from "../../../Api/Services/DestinationAPI";

function SectionWithCard({ description }: CardSectionProps) {
  const { navigateTo } = useEditorNav();
  const location = useLocation();
  const navigate = useNavigate();
  const isEditor = location.pathname.includes("editor");

  const [data, setData] = useState<ContentProps[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await DestinationAPI.getHomeIndex();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching home destinations:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateHandler = (id: number) => {
    if (isEditor) {
      navigateTo(`/editor/destination/${id}`);
    } else {
      navigate(`/destination/${id}`);
    }
  }

  console.log({ data });

  return (
    <div className="flex flex-col py-12 px-50 w-full items-center gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold leading-tight text-center">
          Ingin Menjelajahi Dunia? Mulailah dengan Destinasi Impian Anda!
        </h1>
        {/* <TextComponent
          context={
            description
              ? description
              : "Muhe Travel siap mengantarkan Anda ke mana pun, mulai dari destinasi impian hingga pulau Lombok, semuanya dengan harga yang sangat terjangkau!"
          }
          fontSize="18px"
          fontColor="#333"
          fontWeight={500}
        /> */}

        <p className="text-lg font-medium text-center">
          Muhe Travel siap mengantarkan Anda ke mana pun, mulai dari destinasi
          impian hingga pulau Lombok, semuanya dengan harga yang sangat
          terjangkau!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl shadow-xl/20 hover:shadow-xl transition-all duration-300 aspect-4/5 w-full cursor-pointer "
            onClick={() => navigateHandler(item.id)}
          >
            {/* Image belum image ASLI */}
            <div
              style={{
                backgroundImage: `url("/ContentPlaceholder.jpg")`,
              }}
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradien Overlay untuk Keamanan Kontras Teks */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Konten Teks di Bagian Bawah Kartu */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-1/2">
              {/* Wadah horizontal untuk Judul dan Panah */}
              <div className="flex flex-row justify-between items-end w-full gap-4">
                {/* Judul: Menggunakan flex-1 agar mengambil sisa ruang yang ada sebelum terpotong */}
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide truncate drop-shadow-sm flex-1">
                  {item.main_title}
                </h2>

                {/* Indikator Panah: Menggunakan HTML Entity panah asli & efek animasi hover */}
                <span className="text-white text-xl md:text-4xl font-light transform group-hover:translate-x-1 transition-transform duration-300 shrink-0">
                  &rsaquo;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="bg-black text-white rounded-xl text-xl font-extralight py-7 px-10"
        onClick={() => navigate("/services")}
      >
        Lihat Lainnya
      </Button>
    </div>
  );
}

export default SectionWithCard;
