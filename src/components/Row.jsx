import React, { useState } from "react";
import OpenEye from "../assets/OpenEye";

const expandedProps = {
  width: "w-64",
  maxWidth: "none",
  rotate: "rotate-90",
  arrow: "↓",
};

const notExpandedProps = {
  width: "w-40",
  maxWidth: "160px",
  rotate: "",
  arrow: "→",
};

const Row = ({ record, onViewDetail }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { width, maxWidth, rotate, arrow } = isExpanded
    ? expandedProps
    : notExpandedProps;

  return (
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4 font-bold">{record.id}</td>
      <td className="py-2 px-4">
        <div
          className={`flex items-center cursor-pointer text-sky-600 transition-all duration-300 ${width} overflow-hidden`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span
            className={`whitespace-nowrap overflow-hidden text-ellipsis`}
            style={{ maxWidth: maxWidth }}
          >
            {record.name}
          </span>
          <span className={`ml-2 transition-transform duration-300 ${rotate}`}>
            {arrow}
          </span>
        </div>
      </td>
      <td className="py-2 px-4 text-gray-600">{record.email}</td>
      <td className="py-2 px-4">
        <button
          type="button"
          className="flex items-center px-4"
          onClick={onViewDetail}
        >
          <OpenEye className="h-5 w-5 text-gray-500" />
        </button>
      </td>
    </tr>
  );
};

export default Row;
