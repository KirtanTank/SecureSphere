"use client";

import Header from "./_components/Header";
import AddUserModal from "./_components/AddUserModal";
import AddRoleModal from "./_components/AddRoleModal";
import { useState } from "react";
import UserTable from "./_components/UserTable";

export default function Home() {
  const [openAddUserModal, setOpenAddUserModal] = useState(false);
  const [openAddRoleModal, setOpenAddRoleModal] = useState(false);

  return (
    <div>
      <Header
        setOpenAddUserModal={setOpenAddUserModal}
        setOpenAddRoleModal={setOpenAddRoleModal}
      />
      <AddUserModal
        openAddUserModal={openAddUserModal}
        setOpenAddUserModal={setOpenAddUserModal}
      />
      <AddRoleModal
        openAddRoleModal={openAddRoleModal}
        setOpenAddRoleModal={setOpenAddRoleModal}
      />
      <UserTable />
    </div>
  );
}
