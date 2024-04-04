import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
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
  const [editingNameIndex, setEditingNameIndex] = useState(null);
  const [editingOperationIndex, setEditingOperationIndex] = useState(null);
  const [editingCostPriceIndex, setEditingCostPriceIndex] = useState(null);
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
    switch (field) {
      case "name":
        setEditingNameIndex(null);
        break;
      case "operation":
        setEditingOperationIndex(null);
        break;
      case "costPrice":
        setEditingCostPriceIndex(null);
        break;
      default:
        break;
    }
  };

  const handleCancelEdit = (field) => {
    setEditingIndex(null);
    switch (field) {
      case "name":
        setEditingNameIndex(null);
        break;
      case "operation":
        setEditingOperationIndex(null);
        break;
      case "costPrice":
        setEditingCostPriceIndex(null);
        break;
      default:
        break;
    }
  };

  const handleNewResourceChange = (event, field) => {
    setNewResource({ ...newResource, [field]: event.target.value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSaveNewResource();
    }
  };

  return (
    <div className="h-screen ">
      <Header />
      <div className="flex flex-col p-6 max-[400px]:overflow-x-auto ">
        <div className="font-extrabold pl-8">Resource</div>
        <div className="w-[940px] pl-8 max-[400px]:text-[14px] max-[400px]:w-[820px]">
          <div className="py-2">
            You can reorder Resources on this list. The same order is used on
            the Tasks page in the Make section.
          </div>
          <div className="">
            You can add an operator as a default assignee to a resource. All
            operations using that resource will be assigned to this operator.
            The change will affect all unassigned and future tasks. Tasks with
            assignees will not be affected
          </div>
        </div>
        <div className="relative h-max w-max p-8 rounded-xl ">
          <div className="py-4  ">
            <table className="table-auto border-collapse border border-gray-300 ">
              <thead>
                <tr className="">
                  <th className="border border-gray-100  px-20 py-2 flex max-[400px]:w-44">
                    Name{" "}
                    <span className="m-1">
                      <IoIosArrowDown />
                    </span>
                  </th>
                  <th className="border border-gray-300  px-16 py-2">
                    Default Operation
                  </th>
                  <th className="border border-gray-300  px-20 py-2">
                    Default Cost Price
                  </th>
                  <th className="border border-gray-300 px-2 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource, index) => (
                  <tr key={resource.id}>
                    <td className="border border-gray-300 px-4 py-3">
                      {editingIndex === index && editingNameIndex === index ? (
                        <input
                          type="text"
                          value={resource.name}
                          onChange={(event) => {
                            const newResources = [...resources];
                            newResources[index].name = event.target.value;
                            setResources(newResources);
                          }}
                          onBlur={() => handleSaveEdit(index, "name")}
                          className="border border-gray-300 px-2 py-1 w-full"
                          autoFocus
                        />
                      ) : (
                        <span
                          onClick={() => {
                            setEditingIndex(index);
                            setEditingNameIndex(index);
                          }}
                          className="cursor-pointer"
                        >
                          {resource.name}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {editingIndex === index &&
                      editingOperationIndex === index ? (
                        <input
                          type="text"
                          value={resource.operation}
                          onChange={(event) => {
                            const newResources = [...resources];
                            newResources[index].operation = event.target.value;
                            setResources(newResources);
                          }}
                          onBlur={() => handleSaveEdit(index, "operation")}
                          className="border border-gray-300 px-2 py-1 w-full"
                          autoFocus
                        />
                      ) : (
                        <span
                          onClick={() => {
                            setEditingIndex(index);
                            setEditingOperationIndex(index);
                          }}
                          className="cursor-pointer"
                        >
                          {resource.operation}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {editingIndex === index &&
                      editingCostPriceIndex === index ? (
                        <input
                          type="number"
                          value={resource.costPrice}
                          onChange={(event) => {
                            const newResources = [...resources];
                            newResources[index].costPrice = event.target.value;
                            setResources(newResources);
                          }}
                          onBlur={() => handleSaveEdit(index, "costPrice")}
                          className="border border-gray-300 px-2 py-1 w-full remove-arrow "
                          autoFocus
                        />
                      ) : (
                        <span
                          onClick={() => {
                            setEditingIndex(index);
                            setEditingCostPriceIndex(index);
                          }}
                          className="cursor-pointer "
                        >
                          {resource.costPrice}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <MdDelete
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDelete(resource.id)}
                      />
                    </td>
                  </tr>
                ))}
                {addingNewResource && (
                  <tr>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        value={newResource.name}
                        onKeyPress={handleKeyPress}
                        onChange={(event) =>
                          handleNewResourceChange(event, "name")
                        }
                        className="border border-gray-300 px-2 py-0.5 w-5/6"
                        autoFocus
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={newResource.operation}
                        onKeyPress={handleKeyPress}
                        onChange={(event) =>
                          handleNewResourceChange(event, "operation")
                        }
                        className="border border-gray-300 px-2 py-0.5 w-5/6"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="number"
                        value={newResource.costPrice}
                        onKeyPress={handleKeyPress}
                        onChange={(event) =>
                          handleNewResourceChange(event, "costPrice")
                        }
                        className="border border-gray-300 px-2 py-0.5 w-5/6 remove-arrow"
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {!addingNewResource && (
              <div className="mt-4">
                <button
                  onClick={handleAddNewResource}
                  className=" font-bold py-2 px-4 rounded "
                >
                  + Add row
                </button>
              </div>
            )}
            {addingNewResource && (
              <div className="mt-4">
                <button
                  onClick={handleSaveNewResource}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelNewResource}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resource;
