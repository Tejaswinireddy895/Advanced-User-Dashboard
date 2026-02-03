import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useUnsavedWarning from "../hooks/useUnsavedWarning";

const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const existing = users.find((u) => u.id === Number(id));
  const [form, setForm] = useState(existing || {});
  const [isDirty, setIsDirty] = useState(false);

  useUnsavedWarning(isDirty);

  if (!existing) {
    return <p>User not found</p>;
  }

  const handleChange = (e) => {
    setIsDirty(true);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) =>
      prev.map((u) => (u.id === existing.id ? form : u))
    );

    navigate("/users");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h2>Edit User</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            required
            onChange={handleChange}
          />

          <input
            name="email"
            value={form.email}
            required
            onChange={handleChange}
          />

          <select
            name="role"
            value={form.role}
            required
            onChange={handleChange}
          >
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </select>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
