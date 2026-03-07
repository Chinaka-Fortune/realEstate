import { Outlet } from "react-router-dom";
// import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import Sidebar from "./Sidebar";
import ThemeHelper from "./ThemeHelper";

 function DashboardLayout() {
  const [darkMode, setDarkMode] = ThemeHelper();

  return (
    <div
      className={`container-fluid min-vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light"
      }`}
    >
      <div className="row min-vh-100">

        {/* Desktop Sidebar */}
        <aside className="d-none d-md-block col-md-3 col-lg-2 bg-primary text-white p-4">
          <Sidebar />
        </aside>

        {/* Mobile Offcanvas Sidebar */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="mobileSidebar"
        >
          <div className="offcanvas-body bg-primary text-white">
            <Sidebar />
          </div>
        </div>

        {/* Main */}
        <main className="col-12 col-md-9 col-lg-10 p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-outline-secondary d-md-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebar"
              >
                {/* <FaBars /> */}
              </button>
              <h4 className="mb-0">Dashboard</h4>
            </div>

            <button
              className="btn btn-outline-secondary"
              onClick={() => setDarkMode(!darkMode)}
            >
              {/* {darkMode ? <FaSun /> : <FaMoon />} */}
            </button>
          </div>

          {/* Page Content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;