import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../Header/Header";
import "../../App.css";

function Location() {
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "Location 1",
      legalName: "Legal Name 1",
      address: "Address 1",
    },
    {
      id: 2,
      name: "Location 2",
      legalName: "Legal Name 2",
      address: "Address 2",
    },
    {
      id: 3,
      name: "Location 3",
      legalName: "Legal Name 3",
      address: "Address 3",
    },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingNameIndex, setEditingNameIndex] = useState(null);
  const [editingLegalNameIndex, setEditingLegalNameIndex] = useState(null);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);
  const [addingNewLocation, setAddingNewLocation] = useState(false);
  const [newLocation, setNewLocation] = useState({
    name: "",
    legalName: "",
    address: "",
  });

  const handleDelete = (id) => {
    setLocations(locations.filter((location) => location.id !== id));
  };

  const handleAddNewLocation = () => {
    setAddingNewLocation(true);
  };

  const handleCancelNewLocation = () => {
    setNewLocation({ name: "", legalName: "", address: "" });
    setAddingNewLocation(false);
  };

  const handleSaveNewLocation = () => {
    if (
      newLocation.name.trim() !== "" &&
      newLocation.legalName.trim() !== "" &&
      newLocation.address.trim() !== ""
    ) {
      const id = Math.max(...locations.map((location) => location.id)) + 1;
      setLocations([...locations, { ...newLocation, id }]);
      setNewLocation({ name: "", legalName: "", address: "" });
      setAddingNewLocation(false);
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
      case "legalName":
        setEditingLegalNameIndex(null);
        break;
      case "address":
        setEditingAddressIndex(null);
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
      case "legalName":
        setEditingLegalNameIndex(null);
        break;
      case "address":
        setEditingAddressIndex(null);
        break;
      default:
        break;
    }
  };

  const handleNewLocationChange = (event, field) => {
    setNewLocation({ ...newLocation, [field]: event.target.value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (addingNewLocation) {
        handleSaveNewLocation();
      }
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <div className="h-max w-max p-8 rounded-xl ">
          <div className="py-4  ">
            <table className="table-auto border-collapse border border-gray-300 ">
              <thead>
                <tr className="">
                  <th className="border border-gray-300  px-20 py-2 flex max-[400px]:w-44">
                    Location Name{" "}
                    <span className="m-1">
                      <IoIosArrowDown />
                    </span>
                  </th>
                  <th className="border border-gray-300  px-16 py-2">
                    Legal Name
                  </th>
                  <th className="border border-gray-300  px-20 py-2">
                    Address
                  </th>
                  <th className="border border-gray-300 px-2 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location, index) => (
                  <tr key={location.id}>
                    <td className="border border-gray-300 px-4 py-3">
                      {editingIndex === index && editingNameIndex === index ? (
                        <input
                          type="text"
                          value={location.name}
                          onChange={(event) => {
                            const newLocations = [...locations];
                            newLocations[index].name = event.target.value;
                            setLocations(newLocations);
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
                          {location.name}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {editingIndex === index &&
                      editingLegalNameIndex === index ? (
                        <input
                          type="text"
                          value={location.legalName}
                          onChange={(event) => {
                            const newLocations = [...locations];
                            newLocations[index].legalName = event.target.value;
                            setLocations(newLocations);
                          }}
                          onBlur={() => handleSaveEdit(index, "legalName")}
                          className="border border-gray-300 px-2 py-1 w-full"
                          autoFocus
                        />
                      ) : (
                        <span
                          onClick={() => {
                            setEditingIndex(index);
                            setEditingLegalNameIndex(index);
                          }}
                          className="cursor-pointer"
                        >
                          {location.legalName}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {editingIndex === index &&
                      editingAddressIndex === index ? (
                        <input
                          type="text"
                          value={location.address}
                          onChange={(event) => {
                            const newLocations = [...locations];
                            newLocations[index].address = event.target.value;
                            setLocations(newLocations);
                          }}
                          onBlur={() => handleSaveEdit(index, "address")}
                          className="border border-gray-300 px-2 py-1 w-full"
                          autoFocus
                        />
                      ) : (
                        <span
                          onClick={() => {
                            setEditingIndex(index);
                            setEditingAddressIndex(index);
                          }}
                          className="cursor-pointer"
                        >
                          {location.address}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <MdDelete
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDelete(location.id)}
                      />
                    </td>
                  </tr>
                ))}
                {addingNewLocation && (
                  <tr>
                    <td className="border border-gray-300 px-2 py-2">
                      <input
                        type="text"
                        value={newLocation.name}
                        onChange={(event) =>
                          handleNewLocationChange(event, "name")
                        }
                        className="border border-gray-300 px-2 py-0.5 w-5/6"
                        autoFocus
                        onKeyDown={handleKeyPress}
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={newLocation.legalName}
                        onChange={(event) =>
                          handleNewLocationChange(event, "legalName")
                        }
                        className="border border-gray-300 px-2 py-0.5 w-5/6"
                        onKeyDown={handleKeyPress}
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="text"
                        value={newLocation.address}
                        onChange={(event) =>
                          handleNewLocationChange(event, "address")
                        }
                        className="border border-gray-300 px-2 py-0.5 w-5/6"
                        onKeyDown={handleKeyPress}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {!addingNewLocation && (
              <div className="mt-4">
                <button
                  onClick={handleAddNewLocation}
                  className=" font-bold py-2 px-4 rounded "
                >
                  + Add row
                </button>
              </div>
            )}
            {addingNewLocation && (
              <div className="mt-4">
                <button
                  onClick={handleSaveNewLocation}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelNewLocation}
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

export default Location;
