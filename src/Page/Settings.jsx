import React from "react";
import Header from "../components/Header/Header";
import Cards from "../components/Cards";
import { CgOrganisation } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Settings() {
  const cardsData = [
    {
      mainHeading: "Organization",
      mainIcon: <CgOrganisation />,
      subHeadings: [
        { text: "Profile", link: "/subheading1-1" },
        { text: "Warehouses", link: "/subheading1-2" },
        { text: "Branding", link: "/subheading1-2" },
        { text: "Currencies", link: "/subheading1-2" },
        { text: "Open Balances", link: "/subheading1-2" },
        { text: "Manage Subscription", link: "/subheading1-2" },
      ],
    },
    {
      mainHeading: "Settings",
      mainIcon: <IoSettingsOutline />,
      subHeadings: [
        { text: "Unit of Measure", popup: true },
        { text: "Operation", popup: true },
        { text: "Resource", redirect: true, link: "/resource" },
        { text: "Location", redirect: true, link: "/location" },
        { text: "Category", link: "/subheading2-3" },
      ],
    },
    {
      mainHeading: "Card 1",
      mainIcon: <CgOrganisation />,
      subHeadings: [
        { text: "Subheading 1.1", link: "/subheading1-1" },
        { text: "Subheading 1.2", link: "/subheading1-2" },
      ],
    },
    {
      mainHeading: "Card 2",
      mainIcon: <FaHome />,
      subHeadings: [
        { text: "Subheading 2.1", link: "/subheading2-1" },
        { text: "Subheading 2.2", link: "/subheading2-2" },
        { text: "Subheading 2.3", link: "/subheading2-3" },
      ],
    },
    {
      mainHeading: "Card 1",
      mainIcon: <CgOrganisation />,
      subHeadings: [
        { text: "Subheading 1.1", link: "/subheading1-1" },
        { text: "Subheading 1.2", link: "/subheading1-2" },
      ],
    },
    {
      mainHeading: "Card 2",
      mainIcon: <FaHome />,
      subHeadings: [
        { text: "Subheading 2.1", link: "/subheading2-1" },
        { text: "Subheading 2.2", link: "/subheading2-2" },
        { text: "Subheading 2.3", link: "/subheading2-3" },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className="p-16 grid grid-cols-4 gap-7">
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            mainHeading={card.mainHeading}
            mainIcon={card.mainIcon}
            subHeadings={card.subHeadings}
          />
        ))}
      </div>
    </div>
  );
}

export default Settings;
