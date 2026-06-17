import { useState, useEffect } from "react";
import {useNavigate,} from "react-router";
import { type PackageMainProps, type PackageResponse } from "./PackageInterface";

function PackageMain({ title, description, fetchData }: PackageMainProps) {
  const [items, setItems] = useState<PackageResponse[] | null>(null);
  const navigate = useNavigate();


  const PackageFetchHandler = () => {
    fetchData()
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    PackageFetchHandler();
  }, []);

  console.log({items})

  if (items?.length === 0) {
    return (
      <div className="flex  h-100 w-full items-center justify-center overflow-auto font-main min-w-0">
        <h1 className="text-xl font-semibold text-black">No Packages Available</h1>
      </div>
    );
  }


  return (
    <div className="flex flex-row h-full w-full">
      {/* Text */}
      <div className="w-1/2 flex flex-col justify-center text-black text-left gap-6 p-6">
        <h1 className="text-6xl font-semibold text-left">{title}</h1>
        <p>{description}</p>
      </div>
      {/* Package Items */}
      <div className="w-1/2 flex flex-row overflow-auto p-6 gap-6">
        {/* Card */}
        {items?.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-4xl w-72 shrink-0 h-120 flex flex-row justify-center items-end text-white gap-10 pb-10 cursor-pointer"
            style={{
              // ganti sama gambar dari placeholder semetara
              background: `linear-gradient(rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.85) 100%), url(/ContentPlaceholder.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => navigate(`/package/${item.id}`)}
          >
            <h3 className="text-4xl font-semibold line-clamp-2">{item.main_title}</h3>
            <span className="text-5xl font-bold"> {`>`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageMain;
