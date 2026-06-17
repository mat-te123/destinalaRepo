import Header from "../../ReuseableUI/Header";
import { Button, Input, Label, Form } from "@heroui/react";
import Card from "./Card";
import { useState } from "react";

// 1. Definisikan prop untuk menutup modal dari dalam komponen anak
interface FormProps {
  onClose: () => void;
}

function FormModal({ onClose }: FormProps) {
  // Kita tidak butuh state lokal 'isOpenState' lagi di sini.
  // Keberadaan komponen ini sudah diatur sepenuhnya oleh komponen Parent (Service).
  return (
    <div className="bg-white flex flex-col p-6 gap-5 rounded-2xl w-full max-w-md shadow-xl border border-gray-100">
      <div>
        <h4 className="text-xl font-bold text-gray-900">Tambah Service</h4>
      </div>
      <Form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Nama Service</Label>
          <Input placeholder="Masukkan nama layanan" />
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

function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = 5;

  return (
    // Gunakan relative di pembungkus utama agar absolute/fixed bekerja dengan baik
    <div className="relative min-h-screen">
      {/* 2. KUNCI PERBAIKAN: Gunakan short-circuit && 
           Gunakan 'fixed' bukan 'absolute' agar jika halaman di-scroll, overlay tetap mengunci layar.
           Z-index dinaikkan ke z-50 untuk memastikan berada di atas komponen Header. */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <FormModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}

      <Header />

      <div className="p-10 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Manage Service</h2>
          <p className="text-gray-500">
            Atur dan kelola layanan yang ditawarkan untuk memastikan pengalaman
            pelanggan yang optimal.
          </p>
        </div>
        <Button
          variant="primary"
          className="bg-black text-white rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Add Service
        </Button>
      </div>

      <div className="bg-[#F8F8FA] p-10 h-[calc(100vh-200px)] overflow-y-auto flex flex-col gap-5">
        {[...Array(items)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Service;
