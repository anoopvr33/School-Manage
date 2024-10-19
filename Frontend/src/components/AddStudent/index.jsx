import "./add-std.css";
import Button from "../Button/button.jsx";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [data, setData] = useState({
    name: "",
    classs: "",
    fee: "",
  });

  const EnterData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const GetLibrary = async () => {
    const response = await axios.post(
      "http://localhost:7000/student/add",
      data
    );
    console.log("my resp", response);
    if (response.data.message) {
      toast.error("incorrect password or mail");
      console.log("errrrrrrrrrrrrror");
    } else {
      toast.success("successfully added");
    }
  };

  console.log("halo", data);

  return (
    <div className="add-student">
      <div className="student-card">
        <h1 className="ad36-h1">Add Student</h1>
        <div className="addstudent-content">
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
              // onChange={EnterData}
              type="text"
              // name="name"
              placeholder="Reg.no"
            />
          </label>
          <label htmlFor="">
            <input
              onChange={EnterData}
              type="text"
              name="classs"
              placeholder="semester"
            />
          </label>
          <label htmlFor="">
            <input
              onChange={EnterData}
              type="text"
              placeholder="fee status-pending/paid"
              name="fee"
            />
          </label>
        </div>

        <Button className="add-std-btn" OnClick={GetLibrary}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddStudent;
