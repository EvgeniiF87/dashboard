import type { FC } from "react";
import { paginationNumbers } from "./helper";
import { PaginationProps } from "./types";

import "./Pagination.css";

const Pagination: FC<PaginationProps> = ({
  countPerPage,
  totalCount,
  currentPage,
  clickNumber,
  prevPage,
  nextPage,
  className,
  color,
}) => {
  const lastPage = Math.ceil(totalCount / countPerPage);
  const numbers: number[] = [...paginationNumbers(currentPage, lastPage)];

  return (
    <section
      className={className ? `pagination-rg ${className}` : "pagination-rg"}
    >
      <button
        onClick={currentPage > 1 ? prevPage : () => false}
        className={
          currentPage > 1
            ? "pagination-button"
            : `pagination-button pagination-button__opasity`
        }
      >
        {"<"}
      </button>

      {numbers.map((page, index) => (
        <div
          key={index}
          onClick={() =>
            page === currentPage || !page ? false : clickNumber(page)
          }
          className={
            page === currentPage
              ? `pagination-page ${`pagination-page__${color}`} `
              : "pagination-page"
          }
        >
          {page === 0 ? <div>...</div> : page}
        </div>
      ))}

      <button
        onClick={currentPage < lastPage ? nextPage : () => false}
        className={
          currentPage < lastPage
            ? "pagination-button"
            : `pagination-button pagination-button__opasity`
        }
      >
        {">"}
      </button>
    </section>
  );
};

export { Pagination };
