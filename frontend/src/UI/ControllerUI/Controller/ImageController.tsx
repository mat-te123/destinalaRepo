import { Button } from "@heroui/react";

function Image() {
  const uploadicon: string = "./FileArrowUp.png";
  return (
    <div className="flex flex-col">
      <div className="flex flex-col border-b border-[#D7D7D7] pb-4">
        <h1 className="font-bold ">
          Upload selected image</h1>
        <span className="text-[12px]">pastikan gambar sesuai ukuran</span>
      </div>
      <Button className="flex flex-col items-center justify-center gap-2 bg-[#FFFFFF] border-dashed border-2 border-[#E9E9E9] rounded-4xl p-8 mt-4  hover:bg-gray-100 w-full whitespace-normal h-auto ">
        <img src={uploadicon} alt="Upload Icon" />
        <span className="text-sm font-bold text-gray-600">
          Click here{" "} 
          <span className="text-[#AEAEAE]"> 
             to upload your file or drag. Supported Formats: SVG, JPG, PNG
          (10mb each).
            </span>
        </span>
      </Button>
    </div>
  );
}

export default Image;
