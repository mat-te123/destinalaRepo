import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react"; // Gunakan flat import agar HeroUI tidak crash
import Destination from "./Index";
import DestinationPage_1 from "../../Template/Pages/Destination/DestinationPage_1";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { DestinationAPI } from "../../../Api/Services/DestinationAPI";
import { type DestinationPageContent } from "./DestinationInterface";

function DestinationDetail() {
  const [PreviewVisible, SetPreviewVisible] = useState(true);
  const [data, setData] = useState<DestinationPageContent | null>(null);
  const navigate = useNavigate();
  // 1. PERBAIKAN: Destructure 'id' langsung dari useParams agar bertipe string | undefined
  const { id } = useParams<{ id: string }>();

  // 2. OPTIMASI: Bungkus dengan useCallback agar fungsi stabil saat dimasukkan ke dependency useEffect
  const fetchData = useCallback(() => {
    if (id) {
      DestinationAPI.getById(parseInt(id, 10)) // sertakan radix 10 untuk kebersihan parseInt
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.warn(`Error Fetching destination With ID = ${id}`, error);
        });
    } else {
      console.warn("No ID provided in URL");
    }
  }, [id]);

  // 3. PERBAIKAN: Ubah useState menjadi useEffect untuk siklus hit API
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Destination>
      {/* Pembungkus utama children: mengisi penuh sisa tinggi container */}
      <div className="flex flex-col h-full overflow-hidden">
        {/* Top Bar Informasi Destinasi (flex-shrink-0 agar tingginya tetap) */}
        <div className="bg-white flex flex-row items-center justify-start p-5 gap-5 rounded-lg border border-[#EBEBEB] mb-5 shrink-0">
          <Button
            size="lg"
            variant="outline"
            className="border border-gray-300 text-gray-700 rounded-lg"
            onClick={() => navigate(-1)}
          >
            kembali
          </Button>
          <div className="flex flex-col items-start w-full">
            <h3 className="text-lg font-bold">
              {data?.main_data.main_title || "Nama Destinasi"}
            </h3>
            {/* <span className="text-gray-500 text-sm">Jumlah konten</span> */}
          </div>
          <div className="flex flex-row items-center gap-3">
            <Button
              size="lg"
              className="bg-black text-white rounded-lg"
              onClick={() => SetPreviewVisible((prevState) => !prevState)}
            >
              {` ${PreviewVisible ? "Sembunyikan" : "Tampilkan"} Preview`}
            </Button>
            <Button size="lg" className="bg-black text-white rounded-lg">
              Tambah Konten
            </Button>
          </div>
        </div>

        {/* AREA SPLIT SCREEN: Mengisi sisa ruang paling bawah secara presisi */}
        <div className="flex flex-row gap-6 flex-1 overflow-hidden w-full items-start">
          {/* SISI KIRI: Tabel Data (Gunakan h-full & overflow-y-auto) */}
          <Table
            aria-label="Tabel data konten"
            className="transition-all w-full "
          >
            <Table.ScrollContainer>
              <Table.Content>
                <TableHeader>
                  <TableColumn>#</TableColumn>
                  <TableColumn>Judul</TableColumn>
                  <TableColumn>Deskripsi</TableColumn>
                  <TableColumn>Aksi</TableColumn>
                </TableHeader>
                <TableBody>
                  {data?.content_data.length ? (
                    data.content_data.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.content_title}</TableCell>
                        <TableCell>{item.content_desc}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              Edit
                            </Button>
                            <Button size="sm" variant="ghost">
                              Hapus
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center">
                        Tidak ada data konten
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>

          {/* SISI KANAN: Live Preview (Ubah h-screen menjadi h-full) */}
          {/* Kotak ini sekarang akan ter-scroll mandiri di dalam jika konten web publiknya panjang */}

          {PreviewVisible && (
            <div className="w-1/2 h-full overflow-y-auto rounded-xl relative bg-white border border-gray-200 shadow-inner">
              <DestinationPage_1 />
            </div>
          )}
        </div>
      </div>
    </Destination>
  );
}

export default DestinationDetail;
