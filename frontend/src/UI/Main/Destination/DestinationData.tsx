import { Button, Table, Form, Label, Input, Pagination } from "@heroui/react";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import Destination from "./Index";
import { DestinationAPI } from "../../../Api/Services/DestinationAPI";
import { type CMSPage } from "./DestinationInterface";

interface FormProps {
  onClose: () => void;
}

function FormModal({ onClose }: FormProps) {
  return (
    <div className="bg-white flex flex-col p-6 gap-5 rounded-2xl w-full max-w-md shadow-xl border border-gray-100">
      <div>
        <h4 className="text-xl font-bold text-gray-900">Tambah Destinasi</h4>
      </div>
      <Form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Nama Destinasi</Label>
          <Input placeholder="Masukkan nama destinasi" />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Deskripsi</Label>
          <Input placeholder="Masukkan deskripsi" />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Cover Image</Label>
          <Input type="file" className="cursor-pointer" />
        </div>
        <div className="flex flex-row justify-end gap-3 mt-4">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            className="bg-black text-white"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

function DestinationData() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [destinationData, setDestinationData] = useState<CMSPage | null>(null);

  // 1. State manajemen halaman (Default ke halaman 1)
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 2. Fungsi fetch yang didesain untuk menimpa data (bukan append lagi)
  const fetchDestinationData = useCallback(async (pageNumber: number) => {
    setIsLoading(true);
    DestinationAPI.getCMSIndex(pageNumber)
      .then((response) => {
        // Langsung set data mentah dari Laravel pagination response
        setDestinationData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching destination data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // 3. Trigger otomatis berjalan setiap kali state 'page' berubah
  useEffect(() => {
    fetchDestinationData(page);
  }, [page, fetchDestinationData]);

  // 4. Kalkulasi range baris data untuk komponen Pagination.Summary
  const itemsPerPage = 10; // Menyesuaikan nilai ->paginate(10) di Laravel controller
  const totalPages = destinationData?.last_page || 1;

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const startItem = destinationData
    ? (destinationData.current_page - 1) * itemsPerPage + 1
    : 0;
  const endItem = destinationData
    ? Math.min(
        destinationData.current_page * itemsPerPage,
        destinationData.total,
      )
    : 0;

  console.log({ destinationData });

  return (
    <Destination>
      <p className="text-gray-500 mb-5 text-sm">
        Klik "Kelola Konten" untuk melihat dan mengedit konten yang terkait
        dengan destinasi ini. Pastikan semua informasi akurat dan terbaru untuk
        membrikan pengalaman terbaik bagi pengunjung.
      </p>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <FormModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}

      <Table>
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column isRowHeader>#</Table.Column>
              <Table.Column>Nama Kota</Table.Column>
              <Table.Column>Jumlah konten</Table.Column>
              <Table.Column>Paket Terhubung</Table.Column>
              <Table.Column>Tanggal Ditambahkan</Table.Column>
              <Table.Column>Aksi</Table.Column>
            </Table.Header>
            <Table.Body
              className={isLoading ? "opacity-50 transition-opacity" : ""}
            >
              {destinationData?.data.map((item, index) => (
                <Table.Row key={item.id}>
                  {/* Nomor urut urutan absolut dihitung berdasarkan halaman aktif */}
                  <Table.Cell>{startItem + index}</Table.Cell>
                  <Table.Cell className="w-100">{item.main_title}</Table.Cell>
                  <Table.Cell>
                    {item.content_count ? item.content_count : 0}
                  </Table.Cell>
                  <Table.Cell>
                    {item.connected_packages &&
                    item.connected_packages.length > 0 ? (
                      item.connected_packages.map((pkg) => pkg.title).join(", ")
                    ) : (
                      <span className="text-gray-400 italic text-xs">
                        Belum ada paket
                      </span>
                    )}
                  </Table.Cell>
                  <Table.Cell>{item.created_at}</Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-row gap-3">
                      <Button onClick={() => navigate(`${item.id}`)}>
                        Kelola Konten
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Edit
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>

        {/* 5. IMPLEMENTASI COMPONENT FOOTER & PAGINATION */}
        {destinationData && destinationData.total > 0 && (
          <Table.Footer>
            <Pagination size="sm">
              <Pagination.Summary>
                {startItem} to {endItem} of {destinationData.total} results
              </Pagination.Summary>
              <Pagination.Content>
                {/* Tombol Previous */}
                <Pagination.Item>
                  <Pagination.Previous
                    isDisabled={page === 1 || isLoading}
                    onPress={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    <Pagination.PreviousIcon />
                    Prev
                  </Pagination.Previous>
                </Pagination.Item>

                {/* Angka Navigasi Halaman */}
                {pages.map((p) => (
                  <Pagination.Item key={p}>
                    <Pagination.Link
                      isActive={p === page}
                      onPress={() => setPage(p)}
                      isDisabled={isLoading}
                    >
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                ))}

                {/* Tombol Next */}
                <Pagination.Item>
                  <Pagination.Next
                    isDisabled={page === totalPages || isLoading}
                    onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
                  >
                    Next
                    <Pagination.NextIcon />
                  </Pagination.Next>
                </Pagination.Item>
              </Pagination.Content>
            </Pagination>
          </Table.Footer>
        )}
      </Table>
    </Destination>
  );
}

export default DestinationData;
