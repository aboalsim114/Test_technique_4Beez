import React, { useState } from "react";

const Pagination = ({ dataPerPage, totalData, handlePageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage === pageNumbers.length) return;
    setCurrentPage(currentPage + 1);
    handlePageChange(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    handlePageChange(currentPage - 1);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link btn" onClick={prevPage}>
            Back
          </button>
        </li>
        <li className="page-item">
          <button className="page-link btn" onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
