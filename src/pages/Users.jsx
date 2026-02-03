import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";

const USERS_PER_PAGE = 10;

const Users = ({ users, setUsers }) => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    let data = [...users];
    const query = search.toLowerCase().trim();

    if (query) {
      data = data.filter(
        (u) =>
          u.name.toLowerCase().startsWith(query) ||
          u.email.toLowerCase().startsWith(query)
      );
    }

    if (role) data = data.filter((u) => u.role === role);
    if (status) data = data.filter((u) => u.status === status);

    return data;
  }, [users, search, role, status]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
      />

      <UserTable users={paginatedUsers} setUsers={setUsers} />

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default Users;
