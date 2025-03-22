import { useState, useMemo } from "react";
const sortByCreatedAt = (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
const sortByTitle = (a, b) => a.title.localeCompare(b.title);
const paginationInformation = (variants) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 8;
  const pageCount = (variants == null ? void 0 : variants.length) && Math.ceil(variants.length / pageSize) || 0;
  const canNextPage = useMemo(() => currentPage < pageCount - 1, [currentPage, pageCount]);
  const canPreviousPage = useMemo(() => currentPage - 1 >= 0, [currentPage]);
  const nextPage = () => {
    if (canNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (canPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  const currentVariants = useMemo(() => {
    const offset = currentPage * pageSize;
    const limit = Math.min(offset + pageSize, (variants == null ? void 0 : variants.length) || 0);
    return variants == null ? void 0 : variants.slice(offset, limit);
  }, [currentPage, pageSize, variants]);
  return {
    pageIndex: currentPage,
    pageSize,
    pageCount,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    currentVariants
  };
};
const fetchBackend = async (url, options = {}) => {
  const optionsObj = {
    credentials: "include",
    method: options.method || "GET"
  };
  if (!options.files)
    optionsObj.headers = {
      "Content-Type": "application/json"
    };
  if (options.body) {
    if (options.files) optionsObj.body = options.body;
    else optionsObj.body = JSON.stringify(options.body);
  }
  const res = await fetch(url, optionsObj);
  const result = await res.json().catch(() => void 0);
  if (!result) return void 0;
  return result;
};
export {
  fetchBackend,
  paginationInformation,
  sortByCreatedAt,
  sortByTitle
};
