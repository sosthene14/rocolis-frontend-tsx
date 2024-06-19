import { loadedDatas } from "@/mock/data";
import { UserAdsTraveler } from "./UserAdsTraveler";
import { IPublishAdd } from "@/components/interfaces/interfaces";
import { Sorting } from "@/components/logic/Sorting";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Pagination } from "@/components/logic/Pagination";
import { PaginationUI } from "@/components/common/paginationUi/PaginationUI";

export const HandlerUserAdsTraveler = () => {
  const [sortedDatas, setSortedDatas] = useState<IPublishAdd[]>(loadedDatas);
  const [paginatedData, setPaginatedData] = useState<IPublishAdd[]>(
    loadedDatas
  );
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [endIndex, setEndIndex] = useState(1);

  const handleCurrentPage = (value: number) => {
    setPage(value);
  };

  const handleEndIndex = (value: number) => {
    setEndIndex(value);
  }

  return (
    <div>
      <div className="flex justify-center mt-10 mb-10">
        <Sorting data={loadedDatas} setSortedData={setSortedDatas} />
        <Pagination
          page={page}
          setTotalPage={setTotalPage}
          sortedData={sortedDatas}
          setPaginatedData={setPaginatedData}
          handleEndIndex={handleEndIndex}
        />
      </div>
      <div>
        <Separator className="flex mt-5 w-[90%] rounded-lg mx-auto h-[1px] dark:bg-slate-600 bg-slate-100" />
      </div>
      <div className="flex justify-center gap-5 flex-wrap items-center">
        {paginatedData.map((loadedData: IPublishAdd, index: number) => (
          <UserAdsTraveler  loadedDatas={loadedData} key={index} />
        ))}
      </div>
      <PaginationUI endIndex={endIndex} dataLength={sortedDatas.length} currentPage={handleCurrentPage} totalPages={totalPages} />
    </div>
  );
};
