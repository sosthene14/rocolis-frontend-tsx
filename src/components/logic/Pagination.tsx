import { useEffect } from "react";
import { IPaginationProps } from "../interfaces/interfaces";


export const Pagination = ({
  sortedData,
  page,
  setPaginatedData,
  setTotalPage,
  handleEndIndex,
}: IPaginationProps) => {
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(sortedData?.length / itemsPerPage);
  const paginatedData = sortedData?.slice(startIndex, endIndex);

  useEffect(() => {
    setPaginatedData(paginatedData);
    setTotalPage(totalPages);
    handleEndIndex && handleEndIndex(endIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sortedData, setPaginatedData, endIndex]);

  return null;
};
