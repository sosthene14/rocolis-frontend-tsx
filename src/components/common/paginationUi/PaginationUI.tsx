import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface IPaginationProps {
  currentPage: (page: number) => void;
  endIndex: number;
  totalPages: number;
  dataLength: number;
}
export const PaginationUI = ({ currentPage, endIndex, totalPages, dataLength }: IPaginationProps) => {
  const [page, setPage] = useLocalStorage("currentPaginatedPage",1);

  useEffect(() => {
    currentPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <div className="flex justify-center items-center gap-5 mt-20">
      <button
        className={
          page === 1
            ? "p-2 md:p-3 cursor-pointer bg-gray-400 rounded-md"
            : "p-2 md:p-3 rounded-md cursor-pointer bg-gradient-to-r from-[#10837F] via-[#153969] to-[#162F66]"
        }
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <FaArrowLeft color={page === 1 ? "gray" : "white"} />
      </button>
      <span
        style={{
          color: "#63809C",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
        className="text-[13px] md:text-[15px]"
      >
        {page} - {totalPages}
      </span>
      <button
        className={
          endIndex >= dataLength
            ? "p-2 md:p-3 cursor-pointer bg-gray-400 rounded-md"
            : "p-2 md:p-3 rounded-md cursor-pointer bg-gradient-to-r from-[#10837F] via-[#153969] to-[#162F66]"
        }
        onClick={() => setPage(page + 1)}
        disabled={endIndex >= dataLength}
      >
        <FaArrowRight color={endIndex >= dataLength ? "gray" : "white"} />
      </button>
    </div>
  );
};
