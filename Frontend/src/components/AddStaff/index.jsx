import "./add-staff.css";
import Button from "../Button/button.jsx";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //   const navigate = useNavigate();

  const EnterData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const GetLibrary = async () => {
    const response = await axios.post(
      "http://localhost:7000/staff/signup",
      data
    );
    console.log("my resp", response);
    if (response.data.false) {
      toast.error("incorrect password or mail");
      console.log("errrrrrrrrrrrrror");
    } else {
      //   navigate("");
      toast.success("succussfuly added");
    }
  };

  console.log("halo", data);

  return (
    <div className="add-library">
      <div className="add25-card">
        <h1 className="ad3-h1">Add Office Staff</h1>
        <div className="addstaff-content">
          {" "}
          <label htmlFor="">
            <input
              onChange={EnterData}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
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
          <label htmlFor="">
            <input
              onChange={EnterData}
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
            />
          </label>
        </div>

        <Button className="add-staff-btn" OnClick={GetLibrary}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddStaff;
