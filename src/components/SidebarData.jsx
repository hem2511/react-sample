import {
    MdOutlineDashboard,
    MdOutlineShoppingCart,
    MdOutlineRequestQuote,
    MdPayment,
    MdOutlinePrecisionManufacturing ,
    MdOutlineAccountBalance, 
  } from 'react-icons/md';
  import {
    BsBagCheck,
    BsShopWindow, 
    BsGraphUp ,
  } from 'react-icons/bs';
  import { FaRegUser} from 'react-icons/fa';
  import { TbFileInvoice } from "react-icons/tb";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdOutlineDashboard size={25}/>,
        subMenu: false,
        active: true
    },
    {
        title: 'Item',
        path: '/item',
        icon: <BsBagCheck size={25}/>,
        subMenu: true,
        subNav: [
            {
                title: 'Material',
                path: '/item/material',
                icon: <BsBagCheck size={25}/>,
            },
            {
                title: 'Product',
                path: '/item/product',
                icon: <BsBagCheck size={25}/>,
            }
        ]
    },
    {
        title: 'Sales',
        path: '/sales',
        icon: <BsShopWindow size={25}/>,
        subMenu: true,
        subNav: [
            {
                title: 'Customers',
                path: '/item/material',
                icon: <FaRegUser size={25}/>,
            },
            {
                title: 'Quotes',
                path: '/item/product',
                icon: <MdOutlineRequestQuote  size={25}/>,
            },
            {
                title: 'Sales Orders',
                path: '/item/product',
                icon: <BsShopWindow  size={25}/>,
            },
            {
                title: 'Invoices',
                path: '/item/product',
                icon: <TbFileInvoice size={25}/>,
            },
            {
                title: 'Payments Received',
                path: '/item/product',
                icon: <MdPayment size={25}/>,
            },
        ]
    },
    {
        title: 'Purchases',
        path: '/purchases',
        icon: <MdOutlineShoppingCart size={25}/>,
        subMenu: true,
        subNav: [
            {
                title: 'Vendors',
                path: '/item/material',
                icon: <FaRegUser size={25}/>,
            },
            {
                title: 'Expenses',
                path: '/item/product',
                icon: <MdOutlineRequestQuote size={25}/>,
            },
            {
                title: 'Purchase Orders',
                path: '/item/product',
                icon: <TbFileInvoice size={25}/>,
            },
            {
                title: 'Bills',
                path: '/item/product',
                icon: <TbFileInvoice size={25}/>,
            },
            {
                title: 'Payments Made',
                path: '/item/product',
                icon: <MdPayment size={25}/>,
            },
        ]
    },
    {
        title: 'Make Order',
        path: '/purchases',
        icon: <MdOutlinePrecisionManufacturing  size={25}/>,
        subMenu: false,        
    },
    {
        title: 'Accountant',
        path: '/purchases',
        icon: <MdOutlineAccountBalance  size={25}/>,
        subMenu: false,   
         
    },
    {
        title: 'Reports',
        path: '/purchases',
        icon: <BsGraphUp size={25} />,
        subMenu: false,        
    },
];
