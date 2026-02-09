import { useParams, useNavigate } from "react-router-dom";

const UserDetails = ({ users }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="details-page">
        <div className="details-card">
          <h2 className="details-title">User not found</h2>

          <button
            className="details-back-btn"
            onClick={() => navigate("/users")}
          >
            ← Back to Users
          </button>

        </div>
      </div>
    );
  }

  const formattedDate = user.createdAt.includes("T")
    ? user.createdAt.split("T")[0]
    : user.createdAt;

  return (
    <div className="details-page">

      <div className="details-card">

        <h2 className="details-title">
          User Details
        </h2>

        <div className="details-row">
          <span>Name</span>
          <strong>{user.name}</strong>
        </div>

        <div className="details-row">
          <span>Email</span>
          <strong>{user.email}</strong>
        </div>

        <div className="details-row">
          <span>Role</span>
          <strong>{user.role}</strong>
        </div>

        <div className="details-row">
          <span>Status</span>
          <strong>{user.status}</strong>
        </div>

        <div className="details-row">
          <span>Created At</span>
          <strong>{formattedDate}</strong>
        </div>

        <button
          className="details-back-btn"
          onClick={() => navigate("/users")}
        >
          ← Back to Users
        </button>

      </div>

    </div>
  );
};

export default UserDetails;
