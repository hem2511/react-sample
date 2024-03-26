import {
  MdOutlineDashboard,
  MdOutlineShoppingCart,
  MdOutlineRequestQuote,
  MdPayment,
  MdOutlinePrecisionManufacturing,
  MdOutlineAccountBalance,
} from "react-icons/md";
import { BsBagCheck, BsShopWindow, BsGraphUp } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdOutlineDashboard size={25} />,
    subMenu: false,
    active: true,
  },
  {
    title: "Item",
    path: "/item",
    icon: <BsBagCheck size={25} />,
    subMenu: true,
    subNav: [
      {
        title: "Material",
        path: "/item/material",
      },
      {
        title: "Product",
        path: "/item/product",
      },
    ],
  },
  {
    title: "Sales",
    path: "/sales",
    icon: <BsShopWindow size={25} />,
    subMenu: true,
    subNav: [
      {
        title: "Customers",
        path: "/item/material",
      },
      {
        title: "Quotes",
        path: "/item/product",
      },
      {
        title: "Sales Orders",
        path: "/item/product",
      },
      {
        title: "Invoices",
        path: "/item/product",
      },
      {
        title: "Payments Received",
        path: "/item/product",
      },
    ],
  },
  {
    title: "Purchases",
    path: "/purchases",
    icon: <MdOutlineShoppingCart size={25} />,
    subMenu: true,
    subNav: [
      {
        title: "Vendors",
        path: "/item/material",
      },
      {
        title: "Expenses",
        path: "/item/product",
      },
      {
        title: "Purchase Orders",
        path: "/item/product",
      },
      {
        title: "Bills",
        path: "/item/product",
      },
      {
        title: "Payments Made",
        path: "/item/product",
      },
    ],
  },
  {
    title: "Make Order",
    path: "/purchases",
    icon: <MdOutlinePrecisionManufacturing size={25} />,
    subMenu: false,
  },
  {
    title: "Accountant",
    path: "/purchases",
    icon: <MdOutlineAccountBalance size={25} />,
    subMenu: false,
  },
  {
    title: "Reports",
    path: "/purchases",
    icon: <BsGraphUp size={25} />,
    subMenu: false,
  },
];
