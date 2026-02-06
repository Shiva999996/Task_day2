import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./dashboardLayout.css";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          <span></span>
          <h2>E-Commerce</h2>
        </div>

        <nav className="dashboard-nav">
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
             Products
          </NavLink>

          <NavLink
            to="/dashboard/add-product"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
             Add Product
          </NavLink>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
