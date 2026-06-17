import MainTemplate from "../MainTemplate";
import { useState, useEffect } from "react";
import {
  type BaseListingPageProps,
  type PaginationStucture,
} from "./BaseInterface";

function BaseListingPage<T>({
  title,
  description,
  fetchData,
  renderItem,
}: BaseListingPageProps<T>) {
  const [page, setPage] = useState<number>(1);
  const [items, setItems] = useState<PaginationStucture<T> | null>(null);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  console.log("Load more ke - ", page);

  console.log({ items });

  const ListingFetchHandler = async (page: number) => {
    if (page === 1) {
      setIsFirstLoading(true);
    } else {
      setIsLoadingMore(true);
    }

    fetchData(page)
      .then((response) => {
        const incomingData: PaginationStucture<T> = response.data;

        setItems((prev) => {
          if (!prev || page === 1) {
            return incomingData;
          }
          return {
            ...incomingData,
            data: [...prev.data, ...incomingData.data],
          };
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsFirstLoading(false);
        setIsLoadingMore(false);
      });
  };

  useEffect(() => {
    ListingFetchHandler(1);
  }, [ListingFetchHandler]);

  const LoadMoreHandler = () => {
    if (items && items.current_page < items.last_page && !isLoadingMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      ListingFetchHandler(nextPage);
    }
  };

  const hasMorePages = items ? items.current_page < items.last_page : false;

  return (
    <MainTemplate>
      <div className="w-full min-h-screen bg-gray-50">
        {/* Banner Section */}
        <div
          className="h-screen flex flex-col items-center justify-end text-white text-left gap-6 p-6"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0) -45.83%, rgba(0, 0, 0, 0.62) 80.7%), url(/ContentPlaceholder.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-6xl font-semibold leading-tight text-left w-full">
            {title}
          </h1>
          <p className="text-2xl font-light leading-relaxed text-left w-full">
            {description}
          </p>
        </div>

        {/* Card Grid System */}
        <div className="flex flex-col items-center py-12 px-6">
          <div className="flex flex-row flex-wrap justify-center items-center gap-10 w-full">
            {isFirstLoading ? (
              <p className="text-xl text-gray-500 font-medium animate-pulse">
                Memuat destinasi awal...
              </p>
            ) : (
              items?.data.map((item) => renderItem(item))
            )}
          </div>

          {/* Container Tombol Load More */}
          {hasMorePages && (
            <div className="mt-16 mb-20">
              <button
                onClick={LoadMoreHandler}
                disabled={isLoadingMore}
                className={`px-8 py-4 bg-black text-white text-lg font-semibold rounded-2xl shadow-md transition-all duration-200 
                  ${isLoadingMore ? "opacity-50 cursor-not-allowed scale-95" : "hover:bg-gray-800 hover:scale-105 active:scale-95"}`}
              >
                {isLoadingMore
                  ? "Memuat Lebih Banyak..."
                  : "Muat Lebih Banyak Destinasi"}
              </button>
            </div>
          )}
        </div>
      </div>
    </MainTemplate>
  );
}

export default BaseListingPage;