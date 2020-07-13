import { useState } from "react";

const LIMIT_PER_PAGE = 10;

function usePagination(list) {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT_PER_PAGE;
  const total = Math.ceil(list.length / LIMIT_PER_PAGE);
  const items = list.slice(offset, offset + LIMIT_PER_PAGE);

  function onPageChange(nextPage) {
    if (nextPage >= 1 && nextPage <= total) {
      setPage(nextPage);
    }
  }

  return { page, total, onPageChange, items };
}

export default usePagination;
