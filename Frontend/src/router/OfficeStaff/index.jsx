import "./off.css";
import Button from "../../components/Button/button.jsx";
// import AddBorrow from "../../components/AddBorrow/index.jsx";
// import DisplayStudent from "../../components/DisplayStudent/index.jsx";
// import DisplayBorrow from "../../components/DisplayBorrow/index.jsx";
// import DisplayStudent from "../../components/DisplayStudent/index.jsx";
import DisplayStudent from "../../components/DisplayStudent/index.jsx";
import DisplayBorrow from "../../components/DisplayBorrow/index.jsx";
import { useNavigate } from "react-router-dom";
// import style from "../../components/DisplayStudent/dis-std.css";

const StaffHome = () => {
  const navigate = useNavigate();
  return (
    <div className="ad-lib">
      <span>
        {" "}
        <Button OnClick={() => navigate("/staff/login")} className="lib-logout">
          Logout
        </Button>{" "}
        <h1 className="staff2-h1">
          <span>O</span>ffice Staff Management
        </h1>{" "}
      </span>

      <div className="ad278-lib-form">
        <DisplayStudent></DisplayStudent>
        <DisplayBorrow></DisplayBorrow>
      </div>
    </div>
  );
};

export default StaffHome;
