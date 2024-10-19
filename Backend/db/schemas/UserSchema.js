import { model, Schema } from "mongoose";

const UserSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // role:{type:String,required:true,default:"user"},
  // image:{type:String},
});

const User = model("user", UserSchema);
export default User;
