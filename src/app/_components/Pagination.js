import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${
              currentPage === 1
                ? "cursor-not-allowed text-gray-300"
                : "hover:bg-gray-100 hover:text-gray-700"
            } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            Previous
          </a>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 ${
                currentPage === page
                  ? "text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100"
                  : "hover:bg-gray-100 hover:text-gray-700"
              } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ${
              currentPage === totalPages
                ? "cursor-not-allowed text-gray-300"
                : "hover:bg-gray-100 hover:text-gray-700"
            } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
