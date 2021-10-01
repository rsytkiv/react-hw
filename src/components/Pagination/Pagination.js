import React from "react";
import classes from "./Pagination.module.scss";
import PageButton from "./PageButton";

const Pagination = ({ className, itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => paginate((prev) => (prev === 1 ? prev : prev - 1));
  const nextPage = () => paginate((prev) => (prev === pageNumbers.length ? prev : prev + 1));

  return (
    <>
      <div className={`${className ?? ''} d-flex`}>
        <button className={`${classes.PaginationItem}`} onClick={() => paginate(1)}>
          &lt;&lt;
        </button>
        <button className={`${classes.PaginationItem}`} onClick={prevPage}>
          &lt;
        </button>
        <ul className={classes.PaginationContainer}>
          {pageNumbers.map((number) => (
            <li key={number}>
              <PageButton number={number} currentPage={currentPage} paginate={paginate} lastNumber={pageNumbers.length} />
            </li>
          ))}
        </ul>
        <button className={`${classes.PaginationItem}`} onClick={nextPage}>
          &gt;
        </button>
        <button className={`${classes.PaginationItem}`} onClick={() => paginate(pageNumbers.length)}>
          &gt;&gt;
        </button>
      </div>
    </>
  );
};

export default Pagination;
