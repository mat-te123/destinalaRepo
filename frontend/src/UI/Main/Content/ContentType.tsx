import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

// 1. Definisikan tipe data ID agar TypeScript mengenali batasannya
export type ContentId = "destination" | "package" | "service";

interface CardConfig {
  id: ContentId;
  title: string;
  description: string;
}

interface ContentTypeProps {
  onSelect: (id: ContentId) => void;
}

const CARD_CONFIGURATIONS: CardConfig[] = [
  {
    id: "destination",
    title: "Konten Destinasi",
    description:
      "Menambahkan konten yang akan ditampilkan pada halaman detail destinasi. Konten dapat berupa teks dan gambar yang memberikan informasi lebih lengkap tentang destinasi tersebut.",
  },
  {
    id: "package",
    title: "Konten Paket Wisata",
    description:
      "Menambahkan konten yang akan ditampilkan pada halaman detail paket wisata. Konten dapat berupa teks dan gambar yang memberikan informasi lebih lengkap tentang paket wisata tersebut.",
  },
  {
    id: "service",
    title: "Konten Layanan",
    description:
      "Menambahkan konten yang akan ditampilkan pada halaman detail layanan. Konten dapat berupa teks dan gambar yang memberikan informasi lebih lengkap tentang layanan tersebut.",
  },
];

function ContentType({ onSelect }: ContentTypeProps) {
  const [activeCard, setActiveCard] = useState<ContentId | null>(null);

  return (
    <div className="grid grid-cols-3 gap-5">
      {/* 3. Render kartu secara dinamis menggunakan .map() */}
      {CARD_CONFIGURATIONS.map((card) => (
        <div
          key={card.id}
          id={card.id}
          className={`flex flex-col gap-3 bg-white border border-[#EBEBEB] rounded-lg p-5 justify-between transition-transform ease-in-out ${activeCard === card.id ? "ring-2 ring-black shadow-lg scale-105 transition-transform ease-in-out" : ""}`}
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600 ">{card.description}</p>
          </div>
          <div className="flex flex-row justify-end mt-4">
            <Button
              className="bg-black text-white rounded-lg"
              onClick={() => {
                onSelect(card.id);
                setActiveCard(card.id);
              }}
            >
              {activeCard === card.id ? "Selected" : "Select"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentType;
