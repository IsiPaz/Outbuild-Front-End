import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  totalResults,
  itemsPerPage,
  paginate,
}) => {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <div className="flex justify-between items-center mt-4 space-x-8">
      {currentPage > 1 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          className="bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-500 hover:text-white px-3 py-1 rounded-md transition duration-200"
        >
          Previous
        </button>
      )}
      <div>
        Showing {start} to {end} of {totalResults} results
      </div>
      {currentPage < totalPages && (
        <button
          onClick={() => paginate(currentPage + 1)}
          className="bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-500 hover:text-white px-3 py-1 rounded-md transition duration-200"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
