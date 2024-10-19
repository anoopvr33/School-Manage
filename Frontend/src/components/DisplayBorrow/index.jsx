import { useEffect, useState } from "react";
import Button from "../Button/button";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./dis-bor.css";

const DisplayBorrow = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");

  //   const [id, setId] = useState("");

  const Display = (zz) => {
    console.log("halo means");
    setDisplay(!display);
    setName(zz);
  };
  const GetDelete = async (bid) => {
    const response = await axios.delete(
      `http://localhost:7000/borrow/delete/${bid}`
    );
    console.log("hey bro", response.data);
    toast.success("successfully closed");
    Display();
    // setData(response.data);
  };

  const GetLibrarian = async () => {
    const response = await axios.get(
      "http://localhost:7000/borrow/borrow/display"
    );
    console.log("hey bro", response.data);
    setData(response.data);
  };

  useEffect(() => {
    GetLibrarian();
  }, []);

  return (
    <div className="dis-lib">
      <ToastContainer />
      <h2 className="borrow-h2">Borrowed list</h2>
      <div className="dis-card">
        {data.length == 0 ? (
          <h1 className="no-data4">No data !</h1>
        ) : (
          data.map((item, index) => {
            return (
              <p className="borrow-list" key={index}>
                {item.name}
                <span>{item.sem}</span>
                <span>{item.book}</span>
                <div className="dis66-btn">
                  <span>
                    <Button
                      OnClick={() => {
                        Display(item._id);
                      }}
                    >
                      close
                    </Button>
                  </span>
                  {/* <i class="fa-solid fa-trash-can"></i> */}
                </div>
              </p>
            );
          })
        )}
      </div>
      {display ? (
        <div className="display548-delete">
          <h3>Are you sure to close ?</h3>
          <div className="cancel">
            <Button className="can" OnClick={Display}>
              Cancel
            </Button>
            <Button
              className="del"
              OnClick={() => {
                GetDelete(name);
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

export default DisplayBorrow;
