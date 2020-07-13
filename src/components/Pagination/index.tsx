import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "./../Icons";
import styles from "./pagination.module.css";

interface IPaginationProps {
  page: number;
  onChange: (page: number) => void;
  total: number;
}

const Pagination: React.FC<IPaginationProps> = ({ page, onChange, total }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === total;

  return (
    <nav aria-label="Pagination" className={styles.pagination}>
      <button
        aria-label="Prev button"
        className={styles.prevBtn}
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={isFirstPage}
      >
        <ArrowLeftIcon />
      </button>
      <div>
        <input
          className={styles.input}
          type="number"
          min="1"
          max={total}
          step="1"
          onChange={(e) => onChange(e.target.value)}
          value={page}
        />
        <span aria-label="Total pages" className={styles.total}> / {total}</span>
      </div>
      <button
        aria-label="Next button"
        className={styles.nextBtn}
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={isLastPage}
      >
        <ArrowRightIcon />
      </button>
    </nav>
  );
};

export default Pagination;
