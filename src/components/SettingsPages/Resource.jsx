import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../Header/Header";
import "../../App.css";

function Resource() {
  const [resources, setResources] = useState([
    { id: 1, name: "Resource 1", operation: "Operation 1", costPrice: "10" },
    { id: 2, name: "Resource 2", operation: "Operation 2", costPrice: "20" },
    { id: 3, name: "Resource 3", operation: "Operation 3", costPrice: "30" },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [addingNewResource, setAddingNewResource] = useState(false);
  const [newResource, setNewResource] = useState({
    name: "",
    operation: "",
    costPrice: "",
  });

  const handleDelete = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  const handleAddNewResource = () => {
    setAddingNewResource(true);
  };

  const handleCancelNewResource = () => {
    setNewResource({ name: "", operation: "", costPrice: "" });
    setAddingNewResource(false);
  };

  const handleSaveNewResource = () => {
    if (
      newResource.name.trim() !== "" &&
      newResource.operation.trim() !== "" &&
      newResource.costPrice.trim() !== ""
    ) {
      const id = Math.max(...resources.map((resource) => resource.id)) + 1;
      setResources([...resources, { ...newResource, id }]);
      setNewResource({ name: "", operation: "", costPrice: "" });
      setAddingNewResource(false);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index, field) => {
    setEditingIndex(null);
    setResources((prevResources) =>
      prevResources.map((resource, i) => {
        if (i === index) {
          return { ...resource, [field]: resource[field] };
        }
        return resource;
      })
    );
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handleNewResourceChange = (event, field) => {
    setNewResource({ ...newResource, [field]: event.target.value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSaveNewResource();
    }
  };

  const handleEditChange = (event, index, field) => {
    const updatedResources = [...resources];
    updatedResources[index][field] = event.target.value;
    setResources(updatedResources);
  };

  return (
    <div className="h-screen flex justify-center">
      <section className="bg-gray-50 mt-32 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-700 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  onClick={handleAddNewResource}
                  className="flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  <svg
                    className="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add Resource
                </button>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button
                    id="actionsDropdownButton"
                    data-dropdown-toggle="actionsDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                    type="button"
                  >
                    <svg
                      className="-ml-1 mr-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    Actions
                  </button>
                  <div
                    id="actionsDropdown"
                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 "
                      aria-labelledby="actionsDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 "
                        >
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  <button
                    id="filterDropdownButton"
                    data-dropdown-toggle="filterDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-4 w-4 mr-2 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Filter
                    <svg
                      className="-mr-1 ml-1.5 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </button>
                  <div
                    id="filterDropdown"
                    className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow "
                  >
                    <h6 className="mb-3 text-sm font-medium text-gray-900 ">
                      Choose brand
                    </h6>
                    <ul
                      className="space-y-2 text-sm"
                      aria-labelledby="filterDropdownButton"
                    >
                      <li className="flex items-center">
                        <input
                          id="apple"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 "
                        />
                        <label
                          htmlFor="apple"
                          className="ml-2 text-sm font-medium text-gray-900 "
                        >
                          Apple (56)
                        </label>
                      </li>
                      <li className="flex items-center">
                        <input
                          id="fitbit"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2 "
                        />
                        <label
                          htmlFor="fitbit"
                          className="ml-2 text-sm font-medium text-gray-900 "
                        >
                          Microsoft (16)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 max-[400px]:text-xs">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Resource name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Operation
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Cost Price
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((resource, index) => (
                    <tr key={resource.id} className="border-b">
                      <td className="py-2 px-4">
                        {editingIndex === index ? (
                          <input
                            type="text"
                            value={resource.name}
                            onChange={(e) => handleEditChange(e, index, "name")}
                            className="outline outline-slate-300 rounded max-[400px]:w-16"
                          />
                        ) : (
                          <span>{resource.name}</span>
                        )}
                      </td>
                      <td className="py-2 px-4">
                        {editingIndex === index ? (
                          <input
                            type="text"
                            value={resource.operation}
                            onChange={(e) =>
                              handleEditChange(e, index, "operation")
                            }
                            className="outline outline-slate-300 rounded  max-[400px]:w-16"
                          />
                        ) : (
                          <span>{resource.operation}</span>
                        )}
                      </td>
                      <td className="py-2 px-4">
                        {editingIndex === index ? (
                          <input
                            type="number"
                            value={resource.costPrice}
                            onChange={(e) =>
                              handleEditChange(e, index, "costPrice")
                            }
                            className="outline outline-slate-300 rounded max-[400px]:w-14"
                          />
                        ) : (
                          <span>{resource.costPrice}</span>
                        )}
                      </td>
                      <td className="py-2 px-4">
                        {editingIndex === index ? (
                          <div>
                            <button
                              className="pr-1 font-semibold"
                              onClick={handleSaveEdit}
                            >
                              Save
                            </button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                          </div>
                        ) : (
                          <div className="">
                            <button
                              className="text-gray-500 hover:text-gray-800 focus:outline-none "
                              onClick={() => handleEdit(index)}
                            >
                              <MdEdit className="w-5 h-5 max-[400px]:-ml-5" />
                            </button>
                            <button
                              className="text-gray-500 hover:text-gray-800 focus:outline-none "
                              onClick={() => handleDelete(resource.id)}
                            >
                              <MdDelete className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  {addingNewResource && (
                    <tr>
                      <td className="p-3">
                        <input
                          type="text"
                          value={newResource.name}
                          onChange={(e) => handleNewResourceChange(e, "name")}
                          placeholder="Name"
                          autoFocus
                          className="text-black p-0.5 rounded max-[400px]:w-20"
                          onKeyPress={handleKeyPress}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={newResource.operation}
                          onChange={(e) =>
                            handleNewResourceChange(e, "operation")
                          }
                          placeholder="Operation"
                          className="text-black p-0.5 rounded max-[400px]:w-20"
                          onKeyPress={handleKeyPress}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={newResource.costPrice}
                          onChange={(e) =>
                            handleNewResourceChange(e, "costPrice")
                          }
                          placeholder="Cost Price"
                          className="text-black p-0.5 rounded max-[400px]:w-14"
                          onKeyPress={handleKeyPress}
                        />
                      </td>
                      <td>
                        <button
                          onClick={handleSaveNewResource}
                          className="px-2  font-semibold"
                        >
                          Save
                        </button>
                        <button onClick={handleCancelNewResource}>
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 ">
                Showing
                <span className="font-semibold text-gray-900 ">1-10</span>
                of
                <span className="font-semibold text-gray-900 ">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 text-gray-900 bg-white border-t border-b border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    3
                  </a>
                </li>
                <li>
                  <span className="flex items-center justify-center h-full py-1.5 px-3 text-gray-500 bg-white border-t border-b border-gray-300 ">
                    ...
                  </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 mr-0 text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resource;
