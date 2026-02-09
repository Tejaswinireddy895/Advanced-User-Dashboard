import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUnsavedWarning from "../hooks/useUnsavedWarning";

const AddUser = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  useUnsavedWarning(isDirty);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setIsDirty(true);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const createdDate = new Date().toISOString().split("T")[0];

    setUsers([
      ...users,
      {
        id: Date.now(),
        name: form.name,
        email: form.email,
        role: form.role,
        status: "Active",
        createdAt: createdDate, // FIXED
      },
    ]);

    setIsDirty(false);

    navigate("/users");
  };

  return (
    <div className="form-page">
      <div className="form-card">

        <h2>Add User</h2>

        <form onSubmit={handleSubmit} noValidate>

          <div>
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <p className="form-error">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="form-error">{errors.email}</p>
            )}
          </div>

          <div>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>User</option>
            </select>

            {errors.role && (
              <p className="form-error">{errors.role}</p>
            )}
          </div>

          <button type="submit">
            Add User
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddUser;
