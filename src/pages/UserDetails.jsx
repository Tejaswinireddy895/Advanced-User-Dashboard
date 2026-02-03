import { useParams, useNavigate } from "react-router-dom";
import { usersData } from "../data/users";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = usersData.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>User not found</h2>
        <button onClick={() => navigate("/users")}>Back</button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>User Details</h2>

        <div style={styles.row}>
          <span>Name</span>
          <strong>{user.name}</strong>
        </div>

        <div style={styles.row}>
          <span>Email</span>
          <strong>{user.email}</strong>
        </div>

        <div style={styles.row}>
          <span>Role</span>
          <strong>{user.role}</strong>
        </div>

        <div style={styles.row}>
          <span>Status</span>
          <strong>{user.status}</strong>
        </div>

        <div style={styles.row}>
          <span>Created At</span>
          <strong>{user.createdAt}</strong>
        </div>

        <button style={styles.backBtn} onClick={() => navigate("/users")}>
          ← Back to Users
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f6f8",
  },
  card: {
    width: "420px",
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  },
  backBtn: {
    marginTop: "25px",
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default UserDetails;
