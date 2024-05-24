import React, { useState, useRef, useEffect } from "react";

function Dropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dropdownSearchQuery, setDropdownSearchQuery] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [filteredDropdownUsers, setFilteredDropdownUsers] = useState([]);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [users, setUsers] = useState([
    {
      name: "Robert Gough",
      address: "456 Avenue",
      phoneNumber: "456-789-0123",
    },
    {
      name: "Jese Leos",
      address: "123 Street",
      phoneNumber: "123-456-7890",
    },
    {
      name: "Michael Johnson",
      address: "1010 Boulevard",
      phoneNumber: "101-112-1314",
    },
    {
      name: "Emily Smith",
      address: "789 Road",
      phoneNumber: "789-012-3456",
    },
    {
      name: "Sophia Brown",
      address: "1111 Lane",
      phoneNumber: "111-213-1415",
    },
    {
      name: "Daniel White",
      address: "1212 Court",
      phoneNumber: "121-314-1516",
    },
    {
      name: "Olivia Davis",
      address: "1313 Square",
      phoneNumber: "131-415-1617",
    },
    {
      name: "Ethan Miller",
      address: "1414 Circle",
      phoneNumber: "141-516-1718",
    },
    // Add more users as needed
  ]);

  const allUsers = [
    {
      name: "Robert Gough",
      address: "456 Avenue",
      phoneNumber: "456-789-0123",
    },
    {
      name: "Jese Leos",
      address: "123 Street",
      phoneNumber: "123-456-7890",
    },
    {
      name: "Michael Johnson",
      address: "1010 Boulevard",
      phoneNumber: "101-112-1314",
    },
    {
      name: "Emily Smith",
      address: "789 Road",
      phoneNumber: "789-012-3456",
    },
    {
      name: "Sophia Brown",
      address: "1111 Lane",
      phoneNumber: "111-213-1415",
    },
    {
      name: "Daniel White",
      address: "1212 Court",
      phoneNumber: "121-314-1516",
    },
    {
      name: "Olivia Davis",
      address: "1313 Square",
      phoneNumber: "131-415-1617",
    },
    {
      name: "Ethan Miller",
      address: "1414 Circle",
      phoneNumber: "141-516-1718",
    },
    // Add more users as needed
  ];

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.id !== "dropdownUsersButton"
    ) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserSelect = (user) => {
    if (editingUser !== null) {
      const updatedUsers = users.map((u, index) =>
        index === editingUser ? { ...u, name: user.name } : u
      );
      setUsers(updatedUsers);
    }
    setSelectedUser(user);
    setIsDropdownVisible(false);
    setEditingUser(null);
  };

  const handleDropdownInputChange = (event) => {
    setDropdownSearchQuery(event.target.value);
    const filteredUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredDropdownUsers(filteredUsers);
  };

  const handleUsernameClick = (event, index) => {
    const cellRect = event.target.getBoundingClientRect();
    setDropdownPosition({
      top: cellRect.bottom + window.scrollY,
      left: cellRect.left + window.scrollX,
    });
    setIsDropdownVisible(true);
    setFilteredDropdownUsers(allUsers); // Show all users in the dropdown initially
    setDropdownSearchQuery(""); // Clear search query
    setEditingUser(index); // Set the currently editing user
  };

  return (
    <div className="relative">
      {isDropdownVisible && (
        <div
          ref={dropdownRef}
          id="dropdownUsers"
          className="absolute z-10 bg-white rounded-lg shadow-lg w-40"
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          <input
            type="text"
            value={dropdownSearchQuery}
            onChange={handleDropdownInputChange}
            placeholder="Search users..."
            className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <ul
            className="h-48 py-2 overflow-y-auto text-gray-700"
            aria-labelledby="dropdownUsersButton"
          >
            {filteredDropdownUsers.map((user, index) => (
              <li key={index}>
                <button
                  onClick={() => handleUserSelect(user)}
                  className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  {user.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <table className="table-auto">
        <thead>
          <tr className="row space-x-3">
            <th>User</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="p-5">
              <td className="px-5">
                <button
                  onClick={(event) => {
                    handleUsernameClick(event, index);
                    setSelectedUser(user.name);
                  }}
                >
                  {user.name}
                </button>
              </td>
              <td className="px-5">{user.address}</td>
              <td className="px-5">{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dropdown;
