import "./staff.css";
import Button from "../../../components/Button/button.jsx";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StaffLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const EnterData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const GetLibrary = async () => {
    const response = await axios.post(
      "http://localhost:7000/staff/login",
      data
    );
    if (response.data.false) {
      toast("incorrect password or mail");
      console.log("errrrrrrrrrrrrror");
    } else {
      toast("login successful");
      navigate("/staff/home");
    }
  };

  console.log("halo", data);

  return (
    <div className="staff-login">
      <div className="library-card">
        <h1>Staff Login</h1>
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
        <Button className="btn4-btn" OnClick={GetLibrary}>
          login
        </Button>
      </div>
    </div>
  );
};

export default StaffLogin;
