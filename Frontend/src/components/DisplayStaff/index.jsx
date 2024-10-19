import { useEffect, useState } from "react";
import Button from "../Button/button";
import axios from "axios";
import { toast } from "react-toastify";
import "./dis-staff.css";

const DisplayStaff = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [update, setUpdate] = useState(false);
  //   const [id, setId] = useState("");

  const GetLibrarian = async () => {
    const response = await axios.get(
      "http://localhost:7000/staff/staff/display"
    );
    console.log("hey bro", response.data);
    setData(response.data);
  };

  const UpdatePage = async (_id) => {
    setUpdate(!update);
    const res = await axios.get(
      `http://localhost:7000/staff/staff/find/${_id}`
    );
    console.log("my name", res.data);
    setUser(res.data);
    // setId(set_id);
  };

  const Enter = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const UpdateData = async () => {
    const updateResponse = await axios.patch(
      `http://localhost:7000/staff/staff/update/${user._id}`,
      details
    );
    if (updateResponse.data.true) {
      toast.success("updated successfully");
    } else {
      toast.error("error occured");
    }
  };

  const Return = () => {
    setUpdate(!update);
  };

  const Display = (zz) => {
    console.log("halo means");
    setDisplay(!display);
    setName(zz);
  };

  const StudentDelete = async (ee) => {
    const res = await axios.delete(`http://localhost:7000/staff/delete/${ee}`);
    console.log("deletion", res);
    Display();
    toast.success("deleted successfully");
  };

  useEffect(() => {
    GetLibrarian();
  }, []);

  return (
    <div className="dis-lib2">
      {update ? "" : <h2 className="dis-h23"> Staff Details </h2>}
      <div className="dis2-card">
        {update ? (
          <div className="update-library">
            <div className="update2-card">
              <i onClick={Return} class="fa-solid fa-xmark"></i>
              <h1 className="up2-h1"> Update Staff </h1>
              <div className="up-content5">
                <label htmlFor="">
                  name : <span></span>
                  <input
                    //   value={user.name}
                    onChange={Enter}
                    type="text"
                    name="name"
                    placeholder={user.name}
                  />
                </label>
                <label htmlFor="">
                  email : <span></span>
                  <input
                    onChange={Enter}
                    type="text"
                    name="email"
                    placeholder={user.email}
                  />
                </label>
                <label htmlFor="">
                  password : <span></span>
                  <input
                    onChange={Enter}
                    type="password"
                    placeholder="new password"
                    name="password"
                  />
                </label>
                <label htmlFor="">
                  confirm : <span></span>
                  <input
                    onChange={Enter}
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                  />
                </label>
              </div>

              <Button className="up-btn4" OnClick={UpdateData}>
                Update
              </Button>
            </div>
          </div>
        ) : data.length == 0 ? (
          <h1 className="no-data367">No data !</h1>
        ) : (
          data.map((item, index) => {
            return (
              <div key={index} className="dis-lib232">
                <p>
                  {item.name}
                  <span>{item.email}</span>
                  <div className="dis2-btn">
                    <span>
                      <Button OnClick={() => UpdatePage(item._id)}>
                        Update
                      </Button>
                    </span>
                    <i
                      onClick={() => {
                        Display(item._id);
                      }}
                      class="fa-solid fa-trash-can"
                    ></i>
                  </div>
                </p>
              </div>
            );
          })
        )}
      </div>
      {display ? (
        <div className="display245-delete">
          <h3>Are you sure to delete ?</h3>
          <div className="cancel">
            <Button className="can" OnClick={Display}>
              Cancel
            </Button>
            <Button
              className="del"
              OnClick={() => {
                StudentDelete(name);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayStaff;
