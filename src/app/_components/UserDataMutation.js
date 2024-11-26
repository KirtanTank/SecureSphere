import React, { useState, useEffect } from "react";
import { users as mockUsers } from "../_data/mockData";
import UserTable from "./UserTable";

const UserDataMutation = ({ setUsers, roles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");

  const [filteredUsers, setFilteredUsers] = useState(mockUsers);

  useEffect(() => {
    const filtered = mockUsers.filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        selectedStatus === "All" || user.status === selectedStatus;
      const matchesRole = selectedRole === "All" || user.role === selectedRole;

      return matchesSearch && matchesStatus && matchesRole;
    });

    setFilteredUsers(filtered);
  }, [searchQuery, selectedStatus, selectedRole]);

  useEffect(() => {
    setUsers(filteredUsers);
  }, [filteredUsers, setUsers]);

  return (
    <div className="container px-20 pt-10 flex flex-row w-full gap-12">
      <div className="mb-4 w-1/2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-10 w-full text-sm border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4 flex space-x-4">
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="p-2 text-sm border border-gray-300 rounded-lg"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 text-sm border border-gray-300 rounded-lg"
        >
          <option value="All">All Roles</option>
          {roles.map((role, index) => (
            <option key={index} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserDataMutation;
