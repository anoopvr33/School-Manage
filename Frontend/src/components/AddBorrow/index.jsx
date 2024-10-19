import "./add-bor.css";
import Button from "../Button/button.jsx";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const AddBorrow = () => {
  const [data, setData] = useState({
    name: "",
    sem: "",
    book: "",
  });
  //   const navigate = useNavigate();

  const EnterData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const GetLibrary = async () => {
    const response = await axios.post("http://localhost:7000/borrow/add", data);
    console.log("my resp", response);
    if (response.data.false) {
      toast.error("error occured");
      console.log("errrrrrrrrrrrrror");
    } else {
      //   navigate("");
      // alert("succussfuly added");
      toast("added successfully");
    }
  };

  console.log("halo", data);

  return (
    <div className="add-library">
      <div className="add-bor-card">
        <h1>Borrow book</h1>
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
            name="sem"
            placeholder="sem"
          />
        </label>
        <label htmlFor="">
          <input
            onChange={EnterData}
            type="text"
            placeholder="book"
            name="book"
          />
        </label>

        <Button className="bor-btn" OnClick={GetLibrary}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddBorrow;
