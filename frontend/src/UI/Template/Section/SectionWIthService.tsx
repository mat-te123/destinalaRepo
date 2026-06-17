import { type ContentProps, type CardSectionProps } from "./SectionInterface";
import { useEditorNav } from "../../../Services/EditorNavContext";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useLocation, useNavigate } from "react-router";

// API
import { ServiceAPI } from "../../../Api/Services/ServiceAPI";


function SectionWithService({ title }: CardSectionProps) {
  const [data, setData] = useState<ContentProps[] | null>(null);
  const { navigateTo } = useEditorNav();
  const location = useLocation();
  const navigate = useNavigate();
  const isEditor = location.pathname.includes("editor");

  const fetchData = async () => {
    try {
      const response = await ServiceAPI.homeshow();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching home services:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ButtonHandler = (id: number) => {
    if (isEditor){
      navigateTo
    } else {
      navigate(`/service/${id}`);
    }

  }

  console.log({ data });
  return (
    <div className="flex flex-col py-12 px-50 md:px-20 w-full items-start gap-5">
      <div className="flex flex-row items-center justify-between w-full border-b-2 border-[#E6E6E6] pb-4">
        <h1 className="text-6xl font-semibold ">{title}</h1>
        <span className="font-semibold cursor-pointer">
          Lihat lainnya {">"}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
        {data?.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl border-2 border-gray-200">
            {/* Img masih sementara */}
            <img
              src="/ContentPlaceholder.jpg"
              alt={item.main_title}
              className="w-full aspect-16/10 object-cover rounded-2xl mb-4"
            />
            <div className="flex flex-col gap-2 h-30">
              <h2 className="text-4xl font-semibold line-clamp-1">
                {item.main_title}
              </h2>
              <p>{item.main_desc}</p>
            </div>
            <div className="flex justify-end mt-4">
              <Button className="bg-black rounded-xl" variant="primary" onClick={() => ButtonHandler(item.id)}>
                Lihat Detail
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWithService;
