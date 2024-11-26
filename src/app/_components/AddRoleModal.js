import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Select from "react-select";

export default function AddRoleModal({
  roles,
  setRoles,
  permissions,
  openAddRoleModal,
  setOpenAddRoleModal,
}) {
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (selectedOptions) => {
    const selectedPermissions = selectedOptions.map((option) => option.value);
    setNewRole((prev) => ({ ...prev, permissions: selectedPermissions }));
  };

  const handleAddRole = () => {
    const newRoleWithId = {
      ...newRole,
      id: roles.length ? roles[roles.length - 1].id + 1 : 1,
    };

    setRoles((prev) => [...prev, newRoleWithId]);
    setNewRole({ name: "", permissions: [] });
    setOpenAddRoleModal(false);
  };

  const handleCloseAddRoleModal = () => {
    setOpenAddRoleModal(false);
    setNewRole({ name: "", permissions: [] });
  }

  return (
    <Dialog
      open={openAddRoleModal}
      onClose={() => setOpenAddRoleModal(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
            transition
            className="relative transform rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    Add New Role
                  </DialogTitle>
                  <div className="mt-8 w-full">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={newRole.name}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6 pl-2"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="permissions"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Permissions
                      </label>
                      <div className="mt-2 w-full">
                        <Select
                          id="permissions"
                          name="permissions"
                          isMulti
                          options={permissions.map((permission) => ({
                            value: permission,
                            label: permission,
                          }))}
                          value={newRole.permissions.map((permission) => ({
                            value: permission,
                            label: permission,
                          }))}
                          onChange={handlePermissionChange}
                          className="react-select-container"
                          classNamePrefix="react-select"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleAddRole}
                className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-slate-300 disabled:text-slate-500 sm:ml-3 sm:w-auto"
                disabled={!newRole.name || newRole.permissions.length === 0}
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCloseAddRoleModal}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
