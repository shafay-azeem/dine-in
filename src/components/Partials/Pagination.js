import React from "react";
import _ from "lodash";

const Pagination = ({ total, currentPage, perPage, onPageChange }) => {
  let totalPages = Math.ceil(total / perPage);
  // console.log(total, 'total')
  if (totalPages == 0) {
    totalPages = 1;
    currentPage = 1;
  }

  // const pages = _.range(1, totalPages + 1);
  // console.log(pages)

  const pageRange = 5; // The number of pages displayed at a time
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Calculate the start and end indices of the current page range
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  return (
    <nav>
      <ul
        className="pagination"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li
          key="previous"
          className={currentPage === 1 ? "page-item disabled" : "page-item"}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {pageNumbers.slice(startPage - 1, endPage).map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item "}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          key="next"
          className={
            currentPage === totalPages ? "page-item disabled" : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
