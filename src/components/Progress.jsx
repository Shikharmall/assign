import React from "react";
import { useLocation } from "react-router-dom";

export default function Progress({ width }) {
  // Ensure width is within 0-100 range
  const normalizedWidth = Math.max(0, Math.min(100, width));

  const location = useLocation();
  const { pathname } = location;

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className="my-10 mx-20 md:mx-40 flex justify-center items-center">
      {pathname === "/" ? null : (
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          fill="#000000"
          class="icon"
          version="1.1"
          stroke="2px"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer mr-3"
          onClick={handleClick}
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          />
        </svg>
      )}

      <div className="bg-gray-500 bg-opacity-25 rounded-full w-full h-1">
        <div
          className="bg-[#169c7d] h-1 p-0.5 rounded-full"
          style={{ width: `${normalizedWidth}%` }} // Set width dynamically
        ></div>
      </div>
    </div>
  );
}
