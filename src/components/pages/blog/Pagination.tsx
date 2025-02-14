import React, { useState } from "react";
import Typography from "@/components/ui/Typography";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [goto, setGoto] = useState("");

  // Calculate the range of page numbers to display
  const paginationRange = () => {
    const delta = 2;
    const range: (number | string)[] = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }
    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }
    return range;
  };

  const range = paginationRange();

  const handleGotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoto(e.target.value);
  };

  const handleGotoSubmit = () => {
    const page = Number(goto);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
    setGoto("");
  };

  return (
    <div className="flex flex-col items-center mt-6 md:mt-12 lg:mt-20">
      <div className="flex items-center space-x-2">
        {/* Left Arrow */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border border-gray-300 rounded-[0.5rem] hover:bg-gray-200"
        >
          &lt;
        </button>
        {range.map((page, idx) =>
          typeof page === "string" ? (
            <span key={idx} className="px-3 py-1">
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => onPageChange(page)}
              className={`pagination-button ${
                currentPage === page
                  ? "bg-primary-orange text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {page}
            </button>
          )
        )}
        {/* Right Arrow */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border border-gray-300 rounded-[0.5rem] hover:bg-gray-200"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <Typography as="span" className="text-sm">
          Page {currentPage} of {totalPages}
        </Typography>
        <input
          type="number"
          value={goto}
          onChange={handleGotoChange}
          placeholder="Go to page"
          className="border border-gray-300 rounded-[0.5rem] px-2 py-1 go-to-button"
        />
        <button
          onClick={handleGotoSubmit}
          className="px-3 py-1 border border-gray-300 rounded-[0.5rem] hover:bg-gray-200"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Pagination;