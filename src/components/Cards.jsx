import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cards({ mainHeading, mainIcon, subHeadings }) {
  return (
    <div className="w-[300px] h-[350px] bg-gray-200 p-8 flex flex-col rounded-xl">
      <div className="flex items-center pb-2 font-medium">
        {mainIcon}
        <span className="ml-2">{mainHeading}</span>
      </div>
      {subHeadings.map((subHeading, index) => (
        <div key={index} className="pl-6 p-2">
          <Link to={subHeading.link} className="text-gray-700 hover:underline">
            {subHeading.text}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
