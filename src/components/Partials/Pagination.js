import React from "react";
import _ from "lodash";

const Pagination = ({ total, currentPage, perPage, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage);
  const pages = _.range(1, totalPages + 1);
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
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
