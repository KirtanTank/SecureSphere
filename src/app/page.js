"use client";

import Header from "./_components/Header";
import AddUserModal from "./_components/AddUserModal";
import AddRoleModal from "./_components/AddRoleModal";
import { useState } from "react";
import UserTable from "./_components/UserTable";
import UserDataMutation from "./_components/UserDataMutation";
import { users as mockUsers } from "./_data/mockData";
import { roles as mockRoles } from "./_data/mockData";
import { permissions as mockPermissions } from "./_data/mockData";

export default function Home() {
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [openAddRoleModal, setOpenAddRoleModal] = useState(false);
  const [users, setUsers] = useState(mockUsers);
  const [roles, setRoles] = useState(mockRoles);
  const [permissions, setPermissions] = useState(mockPermissions);

  return (
    <div className="bg-gray-200">
      <Header
        setOpenAddUserModal={setOpenAddUserModal}
        setOpenAddRoleModal={setOpenAddRoleModal}
      />
      <AddUserModal
        users={users}
        setUsers={setUsers}
        openAddUserModal={openAddUserModal}
        setOpenAddUserModal={setOpenAddUserModal}
      />
      <AddRoleModal
        roles={roles}
        setRoles={setRoles}
        permissions={permissions}
        setPermissions={setPermissions}
        openAddRoleModal={openAddRoleModal}
        setOpenAddRoleModal={setOpenAddRoleModal}
      />
      <UserDataMutation setUsers={setUsers} roles={roles} />
      <UserTable users={users} setUsers={setUsers} roles={roles} />
    </div>
  );
}
