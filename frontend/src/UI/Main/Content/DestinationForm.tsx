import { Form, Input, Label } from "@heroui/react";

function DestinationForm() {
  return (
    <div className="flex flex-col mt-5">
      {/* Destination All Data */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h4>Pilih destinasi *</h4>
          <span>Pilih Destinasi yang akan ditambahkan konten</span>
        </div>
        <div className="flex flex-row overflow-y-auto gap-5 ">
          {Array.from({ length: 5 }, (_, index) => (
            <h4
              key={index}
              className="bg-white border border-[#EBEBEB] rounded-lg p-5 w-71 h-full shrink-0"
            >
              Nama Destinasi
            </h4>
          ))}
        </div>
      </div>
      {/* DetailKonten */}
      <Form className="w-1/2 gap-5 mt-5 flex flex-col">
        <div>
          <h3>Konten Detail *</h3>
          <span className="text-[13px] text-gray-500">
            isi detail untuk konten yang akan ditampilkan
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Judul Konten</Label>
          <Input
            placeholder="Judul konten"
            className="bg-white border border-[#DADADC] rounded-lg"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">Deskripsi konten</Label>
          <Input
            placeholder="Deskripsi konten"
            className="bg-white border border-[#DADADC]  rounded-lg    "
            required
          />
        </div>
        <div className="flex flex-col gap-2 bg-white border border-[#DADADC] rounded-lg p-5 w-fit">
          <img
            src="../ContentPlaceholder.jpg"
            alt="Content Placeholder"
            className="w-100 aspect-16/10"
          />
        </div>
      </Form>
    </div>
  );
}

export default DestinationForm;
