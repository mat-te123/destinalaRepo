import { Input, Label, Button } from "@heroui/react";

function SectionWithEmailSection() {
  return (
    <div className="bg-[url(../ContentPlaceholder.jpg)] bg-cover bg-center py-12 md:px-20 w-full h-200 gap-8 flex items-center justify-center">
      <div className="bg-white/80 rounded-3xl p-10 flex flex-col gap-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-semibold">Kontak Kami</h1>
          <span>
            Jika anda ingin mengetahui lebih dalam atau ingin reach out kami,
            anda dapat mengisi form dibawah dan kami akan segera in touch dengan
            anda !
          </span>
        </div>
        {/* First Last Email input */}
        <div className="flex flex-row justify-between gap-4 w-full ">
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="firstName" isRequired>
              Nama Depan
            </Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="lastName" isRequired>
              Nama Belakang
            </Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="email" isRequired>
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="message" isRequired>
            Pesan
          </Label>
          <Input
            id="message"
            placeholder="Enter your message"
            className="h-32"
          />
        </div>
        <div className="w-full flex justify-end">
          <Button className="bg-black text-white px-6 py-3 rounded-lg">
            Kontak Kami
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SectionWithEmailSection;
