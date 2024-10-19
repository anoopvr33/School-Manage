import "./ad-std.css";
// import Button from "../../../components/Button/button.jsx";
import AddStudent from "../../../components/AddStudent/index.jsx";
import DisplayStudent from "../../../components/DisplayStudent/index.jsx";

const AdminStudent = () => {
  return (
    <div className="ad-lib">
      <h1 className="ad43-h1">
        <span>S</span>tudent Management
      </h1>
      <div className="ad67-lib-form">
        <DisplayStudent></DisplayStudent>
        <AddStudent></AddStudent>
      </div>
    </div>
  );
};

export default AdminStudent;
