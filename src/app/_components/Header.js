import Image from "next/image";
import SecureSphereLogo from "../_public/Secure_sphere.png";

const Header = ({ setOpenAddUserModal, setOpenAddRoleModal }) => {
  const OpenAddUserModal = () => {
    setOpenAddUserModal(true);
  };

  const OpenAddRoleModal = () => {
    setOpenAddRoleModal(true);
  };

  return (
    <header className="text-black body-font shadow-xl border-b-2 border-gray-200 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <Image src={SecureSphereLogo} alt="logo" width={50} height={50} />
          <span className="ml-3 text-xl">SecureSphere</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-8">
          <button
            className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            onClick={OpenAddUserModal}
          >
            Add User
          </button>
          <button
            className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            onClick={OpenAddRoleModal}
          >
            Add Role
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
