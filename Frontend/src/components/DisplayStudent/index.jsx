import { useEffect, useState } from "react";
import Button from "../Button/button";
import axios from "axios";
import { toast } from "react-toastify";
import "./dis-std.css";

const DisplayStudent = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);

  const [details, setDetails] = useState({
    name: "",
    classs: "",
    fee: "",
  });
  const [update, setUpdate] = useState(false);
  //   const [id, setId] = useState("");

  const GetLibrarian = async () => {
    const response = await axios.get(
      "http://localhost:7000/student/student/display"
    );
    console.log("hey bro", response.data);
    setData(response.data);
  };

  const UpdatePage = async (_id) => {
    setUpdate(!update);
    const res = await axios.get(
      `http://localhost:7000/student/student/find/${_id}`
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
      `http://localhost:7000/student/student/update/${user._id}`,
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
    const res = await axios.delete(
      `http://localhost:7000/student/delete/${ee}`
    );
    console.log("deletion", res);
    Display();
    toast.success("deleted successfully");
  };

  // const GetProfile = (pay) => {
  //   const res = axios.get("http://localhost:7000/student/student/find/paid", {
  //     fee: pay,
  //   });
  //   console.log("profile", res.data);
  //   // setData(res.data);
  // };

  useEffect(() => {
    GetLibrarian();
  }, []);

  // console.log("jjjjj", display);

  return (
    <div className="dis-lib24">
      {update ? "" : <h2 className="dis-h24"> Student Details </h2>}
      {/* <Button OnClick={() => GetProfile("pending")}>pending</Button> */}
      <div className="dis24-card">
        {update ? (
          <div className="update-library">
            <div className="update24-card">
              <i onClick={Return} class="fa-solid fa-xmark"></i>
              <h1 className="up24-h1"> Update Student </h1>
              <div className="up-content54">
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
                  Register No : <span></span>
                  <input
                    //   value={user.name}
                    // onChange={Enter}
                    type="text"
                    name="name"
                    placeholder="Register No"
                  />
                </label>
                <label htmlFor="">
                  semester : <span></span>
                  <input
                    onChange={Enter}
                    type="text"
                    name="classs"
                    placeholder={user.classs}
                  />
                </label>
                <label htmlFor="">
                  fee : <span></span>
                  <input
                    onChange={Enter}
                    type="text"
                    placeholder="fee status"
                    name="fee"
                  />
                </label>
              </div>

              <Button className="up-btn87" OnClick={UpdateData}>
                Update
              </Button>
            </div>
          </div>
        ) : data.length == 0 ? (
          <h2 className="no-data789">No Details Added !</h2>
        ) : (
          data.map((item, index) => {
            return (
              <div key={index} className="dis-std24">
                {item.name}
                <span>{item.classs}</span>

                <div className="dis24-btn">
                  <span>
                    <Button OnClick={() => UpdatePage(item._id)}>Update</Button>
                  </span>

                  <p className="fee-h">
                    {item.fee == "pending" ? (
                      <span className="pending">{item.fee}</span>
                    ) : (
                      <span className="paid">{item.fee}</span>
                    )}
                  </p>
                  <i
                    onClick={() => {
                      Display(item._id);
                    }}
                    class="fa-solid fa-trash-can"
                  ></i>
                </div>
              </div>
            );
          })
        )}
      </div>
      {display ? (
        <div className="display875-delete">
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

export default DisplayStudent;
