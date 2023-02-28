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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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

    // <nav>
    //   <ul
    //     className="pagination"
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <li
    //       key="previous"
    //       className={currentPage === 1 ? "page-item disabled" : "page-item"}
    //     >
    //       <button
    //         className="page-link"
    //         onClick={() => onPageChange(currentPage - 1)}
    //         disabled={currentPage === 1}
    //         aria-label="Previous"
    //       >
    //         <span aria-hidden="true">&laquo;</span>
    //         <span className="sr-only">Previous</span>
    //       </button>
    //     </li>
    //     {pages
    //       .filter((page) => {
    //         return page >= currentPage - 2 && page <= currentPage + 2;
    //       })
    //       .map((page) => (
    //         <li
    //           key={page}
    //           className={
    //             page === currentPage ? "page-item active" : "page-item"
    //           }
    //         >
    //           <button className="page-link" onClick={() => onPageChange(page)}>
    //             {page}
    //           </button>
    //         </li>
    //       ))}
    //     {currentPage < totalPages && (
    //       <li
    //         key="next"
    //         className={
    //           currentPage === totalPages ? "page-item disabled" : "page-item"
    //         }
    //       >
    //         <button
    //           className="page-link"
    //           onClick={() => onPageChange(currentPage + 1)}
    //           disabled={currentPage === totalPages}
    //           aria-label="Next"
    //         >
    //           <span aria-hidden="true">&raquo;</span>
    //           <span className="sr-only">Next</span>
    //         </button>
    //       </li>
    //     )}
    //   </ul>
    // </nav>
  );
};

export default Pagination;
