import { useNavigate } from "react-router-dom";
import "./admin-home.css";

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-home">
      <div
        className="lib-card"
        onClick={() => {
          navigate("/admin/library");
        }}
      >
        Librarian
      </div>
      <div
        className="off-card"
        onClick={() => {
          navigate("/admin/staff");
        }}
      >
        Office Staff
      </div>
      <div
        className="student12-card"
        onClick={() => {
          navigate("/admin/student");
        }}
      >
        Students
      </div>
    </div>
  );
};

export default AdminHome;
