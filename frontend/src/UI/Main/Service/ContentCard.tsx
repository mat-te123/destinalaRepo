import { Button } from "@heroui/react";

function ContentCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 h-41.25 w-full sm:w-150 flex flex-col gap-2 shadow-sm shrink-0">
      {/* Bagian Atas: Judul & Status */}
      <div className="flex flex-row justify-between items-center">
        <h4 className="font-semibold text-base text-gray-800">Nama Paket</h4>
        <span className="bg-gray-50 border border-gray-300 px-2.5 py-0.5 rounded-lg text-xs font-medium text-gray-600">
          Status
        </span>
      </div>

      {/* Bagian Tengah: Deskripsi 
        line-clamp-2 mengunci teks maksimal 2 baris agar layout tinggi tetap aman.
      */}
      <p className="text-sm text-gray-500 truncate leading-relaxed border-b border-gray-200 pb-3">
        Deskripsi singkat tentang paket wisata ini. Menampilkan informasi utama
        secara seragam.
      </p>

      {/* Bagian Bawah: Aksi Tombol
        Menggunakan justify-between agar tombol 'Open' di kiri dan 'Edit' di kanan sesuai gambar Anda.
      */}
      <div className="flex flex-row justify-between items-center mt-auto">
        <Button size="sm" variant="outline" className="text-xs rounded-lg">
          Open <span className="text-[10px]">↗</span>
        </Button>
        <Button size="sm" variant="outline" className="text-xs rounded-lg">
          Edit
        </Button>
      </div>
    </div>
  );
}

export default ContentCard;
