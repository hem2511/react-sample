import React, { useState } from "react";
import UnitOfMeasure from "./SettingsPages/UnitOfMeasure";

import Resource from "./SettingsPages/Resource";
import { IoIosClose } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import Operation from "./SettingsPages/Operation";

function Cards({ mainHeading, mainIcon, subHeadings }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSubheading, setSelectedSubheading] = useState(null);
  const history = useNavigate();

  const togglePopup = (subHeading) => {
    setSelectedSubheading(subHeading);
    setShowPopup(!showPopup);
  };

  const handleSubheadingClick = (subHeading) => {
    if (subHeading.redirect) {
      // If subheading should redirect, navigate to the specified link
      history(subHeading.link);
    } else {
      // Otherwise, toggle the popup
      togglePopup(subHeading);
    }
  };

  const renderSubheadingComponent = () => {
    switch (selectedSubheading.text) {
      case "Unit of Measure":
        return <UnitOfMeasure />;
      case "Operation":
        return <Operation />;
      case "Resource":
        return <Resource />;
      default:
        return null;
    }
  };

  return (
    <div className="w-[300px] h-[350px] bg-gray-200 p-8 flex flex-col rounded-xl shadow-lg max-[400px]:pl-16 ">
      <div className="flex items-center pb-2 font-medium">
        {mainIcon}
        <span className="ml-2">{mainHeading}</span>
      </div>
      {subHeadings.map((subHeading, index) => (
        <div key={index} className="pl-6 p-2">
          <button
            className="text-gray-700 hover:underline bg-transparent border-none"
            onClick={() => handleSubheadingClick(subHeading)}
          >
            {subHeading.text}
          </button>
        </div>
      ))}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ">
          <div className="bg-white overflow-y-scroll p-6 rounded-xl w-max h-5/6 ">
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl ">
                {selectedSubheading.text}
              </h2>
              <button className="text-3xl" onClick={() => setShowPopup(false)}>
                <IoIosClose />
              </button>
            </div>
            <div className="px-">{renderSubheadingComponent()}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
