import "./library.css";
import Button from "../../../components/Button/button.jsx";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LibraryLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const EnterData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const GetLibrary = async () => {
    const response = await axios.post(
      "http://localhost:7000/library/login",
      data
    );
    if (response.data.false) {
      toast("incorrect password or mail");
      console.log("errrrrrrrrrrrrror");
    } else {
      toast("login successful");
      navigate("/library/home");
    }
  };

  console.log("halo", data);

  return (
    <div className="library-login">
      <div className="library-card">
        <h1 className="liblog-h1">Librarian Login</h1>
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
        <Button className="btn2-btn" OnClick={GetLibrary}>
          login
        </Button>
      </div>
    </div>
  );
};

export default LibraryLogin;
