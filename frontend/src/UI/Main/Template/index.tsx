import Header from "../../ReuseableUI/Header";
import { Button, Input, Label, Form } from "@heroui/react";
import { useState } from "react";
import { type ReactNode } from "react";

// 1. Definisikan prop untuk menutup modal dari dalam komponen anak
interface FormProps {
  onClose: () => void;
}

interface DestinationProps {
  children: ReactNode;
  title: String;
  desc?: String;
  ButtonText: String;
  ScrollView?: boolean;
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

function Template({
  children,
  title,
  desc,
  ButtonText,
  ScrollView = false,
}: DestinationProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // KUNCI 1: Paksa parent mengisi tepat 1 layar penuh dan kunci scrollbar browser utama
    <div className="h-screen flex flex-col bg-white ">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <FormModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}

      {/* Header bawaan */}
      <Header />

      {/* KUNCI 2: Pembungkus konten utama menggunakan flex-col */}
      <div className="flex-1 flex flex-col overflow-hidden font-main">
        {/* Title Section (Gunakan flex-shrink-0 agar tingginya tidak menyusut) */}
        <div className="px-10 py-6 flex flex-row justify-between items-center shrink-0">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">
              {title ? title : "Title Example"}
            </h2>
            <p className="text-gray-500 text-sm">
              {desc
                ? desc
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro cupiditate impedit tempore dolores voluptas possimus quod maiores, maxime, ex dolore, reiciendis quia nostrum similique magni id earum facere eveniet"}
            </p>
          </div>
          <Button
            variant="primary"
            className="bg-black text-white rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            {ButtonText ? ButtonText : "lorem"}
          </Button>
        </div>

        {/* KUNCI 3: Ubah h-screen menjadi flex-1 overflow-hidden */}
        {/* Tempat children dirender sekarang fleksibel mengikuti sisa ruang bawah layar */}
        <div
          className={`p-10 bg-[#F8F8FA] flex-1 ${ScrollView ? "overflow-y-auto" : "overflow-hidden"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Template;
