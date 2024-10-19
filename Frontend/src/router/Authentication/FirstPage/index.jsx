import { useNavigate } from "react-router-dom";
import "./first-page.css";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="first-page">
      <i class="fa-solid fa-gear"></i>
      <div className="f1-container">
        <button
          onClick={() => {
            navigate("library/login");
          }}
        >
          Librarian
        </button>
        <button
          onClick={() => {
            navigate("/staff/login");
          }}
        >
          Office Staff
        </button>
        <p>__________</p>
        <button
          onClick={() => {
            navigate("/admin");
          }}
        >
          School Admin
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
