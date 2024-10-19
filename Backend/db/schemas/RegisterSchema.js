import { model, Schema } from "mongoose";

const RegisterSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  age: {
    type: Number,
    required: true,
  },
  destination: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
  },
  mobile: {
    type: BigInt,
  },
});

const Register = model("Register", RegisterSchema);

export default Register;
