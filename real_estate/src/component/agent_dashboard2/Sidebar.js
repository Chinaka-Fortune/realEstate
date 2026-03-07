import { NavLink } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
import SidebarRoutesObjects from "./SidebarRoutesObjects";

export default function Sidebar() {
  return (
    <>
      <div className="text-center mb-4">
        {/* <FaUserCircle size={64} /> */}
        <h6 className="mt-2 mb-0">JOHN DON</h6>
        <small className="opacity-75">Johndon@company.com</small>
      </div>

      <ul className="nav flex-column gap-2">
        {SidebarRoutesObjects.map((route) => (
          <li key={route.path} className="nav-item">
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 text-white ${
                  isActive ? "fw-bold" : "opacity-75"
                }`
              }
            >
              {route.icon}
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
