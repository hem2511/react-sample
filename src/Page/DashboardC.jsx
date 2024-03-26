import React from "react";

const DashboardC = () => {
  return (
    <div className="p-3 ">
      <div className="flex flex-row items-center justify-between h-16 rounded-md p-3 bg-gray-50 mb-10">
        <div>
          <h3 className="font-semibold text-2xl">Sales Order</h3>
        </div>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </div>

      <div className=" overflow-x-auto shadow-md rounded-md sm:rounded-lg">
        <table className="w-full font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="font-medium text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Color
              </th>
              <th scope="col" className="px-6 py-3 ">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              {/* <th scope="col" className="px-6 py-3">
                    Action
                </th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">
                <span className="bg-blue-100 text-blue-800  font-medium me-2 px-2.5 py-0.5 rounded">
                  Silver
                </span>
              </td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
              {/* <td className="px-6 py-4">
                    <MdDelete size={25}/>
                </td> */}
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">
                <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                  Silver
                </span>
              </td>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 flex">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                {/* <MdDelete size={25}/>  */}
                {/* <MdEdit size={25}/> */}
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4">Phone</td>
              <td className="px-6 py-4">$799</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" overflow-x-auto shadow-md mt-5">
        <table className="border-collapse border border-slate-400 w-full font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="font-medium text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Color
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Color
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Color
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Color
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Category
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Price
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 border border-slate-300">Silver</td>
              <td className="px-6 py-4 border border-slate-300">Silver</td>
              <td className="px-6 py-4 border border-slate-300">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                  Silver
                </span>
              </td>
              <td className="px-6 py-4 border border-slate-300">Silver</td>
              <td className="px-6 py-4 border border-slate-300">Laptop</td>
              <td className="px-6 py-4 border border-slate-300">$2999</td>
              <td className="px-6 py-4 border border-slate-300">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4 border border-slate-300">White</td>
              <td className="px-6 py-4 border border-slate-300">White</td>
              <td className="px-6 py-4 border border-slate-300">
                <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                  Silver
                </span>
              </td>
              <td className="px-6 py-4 border border-slate-300">White</td>
              <td className="px-6 py-4 border border-slate-300">Laptop PC</td>
              <td className="px-6 py-4 border border-slate-300">$1999</td>
              <td className="px-6 py-4 border border-slate-300">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4 border border-slate-300">Black</td>
              <td className="px-6 py-4 border border-slate-300">Black</td>
              <td className="px-6 py-4 border border-slate-300">Black</td>
              <td className="px-6 py-4 border border-slate-300">Black</td>
              <td className="px-6 py-4 border border-slate-300">Accessories</td>
              <td className="px-6 py-4 border border-slate-300">$99</td>
              <td className="px-6 py-4 border border-slate-300">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4 border border-slate-300">Gray</td>
              <td className="px-6 py-4 border border-slate-300">Gray</td>
              <td className="px-6 py-4 border border-slate-300">Gray</td>
              <td className="px-6 py-4 border border-slate-300">Gray</td>
              <td className="px-6 py-4 border border-slate-300">Phone</td>
              <td className="px-6 py-4 border border-slate-300">$799</td>
              <td className="px-6 py-4 border border-slate-300">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4 border border-slate-300">Red</td>
              <td className="px-6 py-4 border border-slate-300">Red</td>
              <td className="px-6 py-4 border border-slate-300">Red</td>
              <td className="px-6 py-4 border border-slate-300">Red</td>
              <td className="px-6 py-4 border border-slate-300">Wearables</td>
              <td className="px-6 py-4 border border-slate-300">$999</td>
              <td className="px-6 py-4 border border-slate-300">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardC;
