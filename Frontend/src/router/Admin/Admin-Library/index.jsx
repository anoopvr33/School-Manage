import "./ad-lib.css";
// import Button from "../../../components/Button/button.jsx";
import AddLibrary from "../../../components/AddLibrary/index.jsx";
import DisplayLibrary from "../../../components/DisplayLibrary/index.jsx";

const AdminLibrary = () => {
  return (
    <div className="ad-lib2">
      <h1 className="ad-h1">
        <span>L</span>ibrarian Management
      </h1>
      <div className="ad-lib2-form">
        <DisplayLibrary></DisplayLibrary>
        <AddLibrary></AddLibrary>
      </div>
    </div>
  );
};

export default AdminLibrary;
