import "./admin-staff.css";
// import Button from "../../../components/Button/button.jsx";
import AddStaff from "../../../components/AddStaff/index.jsx";
import DisplayStaff from "../../../components/DisplayStaff/index.jsx";

const AdminStaff = () => {
  return (
    <div className="ad-lib">
      <h1 className="ad23-h1">
        <span>S</span>taff Management
      </h1>
      <div className="ad34-lib-form">
        <DisplayStaff></DisplayStaff>
        <AddStaff></AddStaff>
      </div>
    </div>
  );
};

export default AdminStaff;
