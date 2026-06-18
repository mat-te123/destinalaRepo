import { Button, Table, Form, Label, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Package from "./Index";
import { PackageAPI } from "../../../Api/Services/PackageAPI";
import { type CMSPage } from "./PackageInterface";

interface FormProps {
  onClose: () => void;
}

function FormModal({ onClose }: FormProps) {
  // Kita tidak butuh state lokal 'isOpenState' lagi di sini.
  // Keberadaan komponen ini sudah diatur sepenuhnya oleh komponen Parent (Service).
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

function PackageData() {
  const [packages, setPackages] = useState<CMSPage | null>(null);
  const [Page, setPage] = useState(1);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPackageData = async (Page: number) => {
    try {
      const response = await PackageAPI.getIndexCMS(Page);
      setPackages(response.data); // Sesuaikan dengan struktur respons API-mu
    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  };

  useEffect(() => {
    fetchPackageData(Page);
  }, [Page]);

  console.log("Fetched Packages:", packages); // Debug log untuk memastikan data diterima
  return (
    <Package>
      <p className="text-gray-500 mb-5 text-sm">
        Klik "Kelola Konten" untuk melihat dan mengedit konten yang terkait
        dengan destinasi ini. Pastikan semua informasi akurat dan terbaru untuk
        memberikan pengalaman terbaik bagi pengunjung.
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
              <Table.Column isRowHeader>Cover</Table.Column>
              <Table.Column>Nama Paket</Table.Column>
              <Table.Column>Jumlah konten</Table.Column>
              <Table.Column>Aksi</Table.Column>
            </Table.Header>
            <Table.Body>
              {packages?.data.map((item, index) => (
                <Table.Row key={index}>
                  {/* Nyamvung Database nanti */}
                  <Table.Cell>
                    <img
                      src="../ContentPlaceholder.jpg"
                      className="h-12 aspect-square rounded-xl border-2 border-gray-300"
                    />
                  </Table.Cell>
                  <Table.Cell>{item.main_title}</Table.Cell>
                  <Table.Cell>{item.package_contents_count}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => navigate(`${item.id}`)}>
                      Lihat Detail
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </Package>
  );
}

export default PackageData;
