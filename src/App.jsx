import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import ProtectedRoute from "./routes/ProtectedRoute";
import { usersData } from "./data/users";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || usersData
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/users"
          element={<Users users={users} setUsers={setUsers} />}
        />

        <Route
          path="/users/add"
          element={<AddUser users={users} setUsers={setUsers} />}
        />

        <Route
          path="/users/edit/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />

        <Route path="/users/:id" element={<UserDetails users={users} />} />
      </Route>
    </Routes>
  );
}

export default App;
