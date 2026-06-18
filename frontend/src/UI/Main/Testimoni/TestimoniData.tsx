import { Button, Input, Table } from "@heroui/react";
import Template from "../Template";
import { useState, useEffect } from "react";
import { Icon } from "./Icon";
import axios from "axios"; // Pastikan axios sudah terinstall, atau sesuaikan dengan API instance kamu

// Definisikan Interface lokal agar TypeScript aman
interface TestimonialItem {
  id: number;
  customer: {
    name: string;
    initials: string;
  };
  title: string;
  description: string;
  rating: {
    score: number;
    label: string;
  };
  created_at: string;
}

interface SummaryData {
  total: number;
  average: number;
}

function TestimoniData() {
  // State untuk filtering & searching
  const [filter, setFilter] = useState<string | number>("semua");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // State untuk menampung data API
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [summary, setSummary] = useState<SummaryData>({ total: 0, average: 0 });
  const [lastPage, setLastPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fungsi helper untuk generate inisial nama jika backend mengembalikan fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  // Hit API Backend
  const fetchTestimonials = async () => {
    setIsLoading(true);
    try {
      // Susun query params
      let url = `http://localhost:8000/api/testimonials/cms?page=${page}`;
      if (filter !== "semua") {
        url += `&rating=${filter}`;
      }
      if (search) {
        url += `&search=${encodeURIComponent(search)}`;
      }

      const response = await axios.get(url);
      if (response.data.status === "success") {
        setTestimonials(response.data.testimonials.data);
        setSummary(response.data.summary);
        setLastPage(response.data.testimonials.last_page);
      }
    } catch (error) {
      console.error("Gagal mengambil data testimonial:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect dengan mekanisme Debounce untuk pencarian (search)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchTestimonials();
    }, 400); // Tunggu 400ms setelah user berhenti mengetik

    return () => clearTimeout(delayDebounce);
  }, [search, filter, page]);

  // Reset page ke halaman 1 jika filter atau search berubah
  const handleFilterChange = (newFilter: string | number) => {
    setFilter(newFilter);
    setPage(1);
  };

  return (
    <Template
      title="Testimonial"
      desc="Kelola testimoni dari pengguna"
      ButtonText="Add Testimoni"
    >
      <div className="flex flex-col gap-5">
        {/* STATS BOX CARD */}
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 bg-white border border-[#EBEBEB] rounded-lg p-5 gap-3">
            <h3 className="text-gray-300 text-sm">Total</h3>
            <span className="text-3xl font-semibold">{summary.total}</span>
          </div>
          <div className="col-span-1 bg-white border border-[#EBEBEB] rounded-lg p-5 gap-3">
            <h3 className="text-gray-300 text-sm">Rata-Rata</h3>
            <span className="text-3xl font-semibold">{summary.average}</span>
          </div>
        </div>

        <div className="flex flex-col w-full bg-white border border-[#EBEBEB] rounded-lg">
          <div className="flex flex-row items-center justify-between p-5">
            <h3 className="text-lg font-semibold">Daftar Testimoni</h3>
            <Button size="lg" className="bg-black text-white rounded-lg">
              Tambah
            </Button>
          </div>
          <hr style={{ borderColor: `#EBEBEB` }} />

          {/* SEARCH & FILTER CONTROLLER */}
          <div className="flex flex-row items-center justify-between p-5 gap-3">
            <Input
              className="bg-[#F3F3F5] border border-[#DBDBDD] rounded-lg w-1/2 text-[#7F7F80]"
              placeholder="Cari Data"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1); // kembalikan ke page 1 setiap mengetik baru
              }}
            />
            <div className="flex flex-row w-full gap-3 justify-start items-center">
              <span
                className={`text-sm font-medium cursor-pointer py-2 px-4 rounded-lg transition-all ${
                  filter === "semua"
                    ? "text-white bg-black"
                    : "text-gray-500 border border-gray-300"
                }`}
                onClick={() => handleFilterChange("semua")}
              >
                Semua
              </span>
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`text-sm font-medium cursor-pointer py-2 px-4 rounded-lg transition-all ${
                    filter === index + 1
                      ? "text-white bg-black"
                      : "text-gray-500 border border-gray-300"
                  }`}
                  onClick={() => handleFilterChange(index + 1)}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <span className="text-sm font-medium w-fit whitespace-nowrap">
              Total Terfilter: {testimonials.length} Data
            </span>
          </div>

          {/* DATA TABLE HEROUI */}
          <Table className="rounded-none">
            <Table.ScrollContainer>
              <Table.Content>
                <Table.Header>
                  <Table.Column>Customer</Table.Column>
                  <Table.Column className="w-1/2">
                    Judul dan Deskripsi
                  </Table.Column>
                  <Table.Column>Rating</Table.Column>
                  <Table.Column>Tanggal</Table.Column>
                  <Table.Column>Aksi</Table.Column>
                </Table.Header>
                <Table.Body>
                  {testimonials.map((item) => (
                    <Table.Row key={item.id}>
                      {/* Customer Info */}
                      <Table.Cell>
                        <div className="flex flex-row items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                            <span className="text-white font-semibold text-sm">
                              {getInitials(item.customer.name)}
                            </span>
                          </div>
                          <h4 className="font-semibold text-sm">
                            {item.customer.name}
                          </h4>
                        </div>
                      </Table.Cell>

                      {/* Judul & Deskripsi */}
                      <Table.Cell>
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-sm text-black">
                            {item.title}
                          </h4>
                          <p className="line-clamp-2 text-xs text-[#717182] mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </Table.Cell>

                      {/* Stars & Text Rating */}
                      <Table.Cell>
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-row gap-0.5">
                            {Array.from({ length: 5 }, (_, starIndex) => (
                              <Icon.Star
                                key={starIndex}
                                className={`w-3.5 h-3.5 ${
                                  starIndex < item.rating.score
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium text-gray-500">
                            {item.rating.label}
                          </span>
                        </div>
                      </Table.Cell>

                      {/* Tanggal */}
                      <Table.Cell className="w-fit text-xs text-gray-600 whitespace-nowrap">
                        {item.created_at}
                      </Table.Cell>

                      {/* Aksi */}
                      <Table.Cell>
                        <div className="flex flex-row gap-2">
                          <Button
                            size="sm"
                            variant="danger"
                            className="rounded-lg text-xs"
                          >
                            edit
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            className="rounded-lg text-xs"
                          >
                            delete
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>

          {/* SIMPLE PAGINATION FOOTER */}
          {lastPage > 1 && (
            <div className="flex justify-end p-4 gap-2 border-t border-[#EBEBEB]">
              <Button
                size="sm"
                variant="primary"
                isDisabled={page === 1}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              >
                Previous
              </Button>
              <span className="text-sm self-center px-2">
                Halaman {page} dari {lastPage}
              </span>
              <Button
                size="sm"
                variant="primary"
                isDisabled={page === lastPage}
                onClick={() => setPage((prev) => Math.min(prev + 1, lastPage))}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </Template>
  );
}

export default TestimoniData;
