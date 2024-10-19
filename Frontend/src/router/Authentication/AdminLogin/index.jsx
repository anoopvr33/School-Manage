import "./login.css";
import Button from "../../../components/Button/button.jsx";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const EnterData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const GetLibrary = async () => {
    const response = await axios.post(
      "http://localhost:7000/admin/admin",
      data
    );
    if (response.data.message) {
      navigate("/admin/home");
    } else {
      toast("incorrect password or mail");
      console.log("errrrrrrrrrrrrror");
    }
  };

  console.log("halo", data);

  return (
    <div className="admin-login">
      <div className="admin-card">
        <h1 className="adlog-h1">Admin Login</h1>
        <label htmlFor="">
          <input
            onChange={EnterData}
            type="text"
            name="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="">
          <input
            onChange={EnterData}
            type="password"
            placeholder="password"
            name="password"
          />
        </label>
        <Button className="btn369-btn" OnClick={GetLibrary}>
          login
        </Button>
      </div>
    </div>
  );
};

export default AdminLogin;
