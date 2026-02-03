import { useNavigate } from "react-router-dom";

const UserTable = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              status: u.status === "Active" ? "Inactive" : "Active",
            }
          : u
      )
    );
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  if (!users || users.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        No users found
      </p>
    );
  }

  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>

            {/* STATUS TOGGLE */}
            <td className="status-cell">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={u.status === "Active"}
                  onChange={() => toggleStatus(u.id)}
                />
                <span className="slider"></span>
              </label>
            </td>

            {/* CREATED DATE */}
            <td>
              {new Date(u.createdAt).toLocaleDateString()}
            </td>

            {/* ACTIONS */}
            <td>
              <div className="actions">
                <button
                  className="action-btn view-btn"
                  onClick={() => navigate(`/users/${u.id}`)}
                >
                  View
                </button>
                <button
                  className="action-btn edit-btn"
                  onClick={() => navigate(`/users/edit/${u.id}`)}
                >
                  Edit
                </button>
                <button
                  className="action-btn delete-btn"
                  onClick={() => deleteUser(u.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
