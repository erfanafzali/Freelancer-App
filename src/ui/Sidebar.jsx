import { NavLink } from "react-router-dom";
import { HiCollection, HiHome } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="">
      <ul className="w-full flex flex-col justify-start items-start md:mt-6 mt-4 gap-y-2 md:gap-y-5 md:px-2">
        <li className="w-full flex">
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li className="w-full flex ">
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({ children, to }) {
  const navLinkClass =
    "flex gap-x-2  justify-start items-center px-4  font-bold  text-sm sm:text-base  md:text-lg lg:text-xl  hover:bg-blue-400 transition-all duration-300 rounded-lg md:px-2 md:py-2 py-1  hover:text-gray-100 w-full";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `bg-blue-400 text-gray-100 ${navLinkClass}`
          : `${navLinkClass}`
      }>
      {children}
    </NavLink>
  );
}
