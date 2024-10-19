import "./lib.css";
import Button from "../../components/Button/button.jsx";
import AddBorrow from "../../components/AddBorrow/index.jsx";
import DisplayBorrow from "../../components/DisplayBorrow/index.jsx";
import { useNavigate } from "react-router-dom";

const LibraryHome = () => {
  const navigate = useNavigate();
  return (
    <div className="ad-lib">
      <span>
        <h1 className="man-h1">Manage Books </h1>
        <Button
          className="lib-logout"
          OnClick={() => navigate("/library/login")}
        >
          Logout
        </Button>
      </span>
      <div className="ad-lib-form">
        <DisplayBorrow></DisplayBorrow>
        <AddBorrow></AddBorrow>
      </div>
    </div>
  );
};

export default LibraryHome;
