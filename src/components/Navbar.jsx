import { useNavigate } from "react-router-dom";

const Navbar = ({
  search,
  setSearch,
  role,
  setRole,
  status,
  setStatus,
}) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-content">
        {/* LEFT : TITLE */}
        <div className="nav-left">
          <span className="dashboard-title">User Dashboard</span>
        </div>

        {/* RIGHT : CONTROLS */}
        <div className="nav-right">
          <input
            className="search-input"
            placeholder="Search name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="filter-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">All Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </select>

          <select
            className="filter-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="add-btn" onClick={() => navigate("/users/add")}>
            + Add User
          </button>

          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
