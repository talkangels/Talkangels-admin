import React from "react";

const Rating = ({ totalStars, Rating }) => {
  return (
    <div className="flex ">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          className={`h-8 w-8 fill-current cursor-pointer ${
            index < Rating ? "text-yellow" : "text-gray-400"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l2.5 6.5H19l-5 4.25 1.75 6L10 14.5 4.25 17.75 6 11.75 1 7.5h6.5L10 1z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
