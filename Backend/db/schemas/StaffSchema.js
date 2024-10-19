import { model, Schema } from "mongoose";

const StaffSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // role:{type:String,required:true,default:"user"},
  // image:{type:String},
});

const Staff = model("Staff", StaffSchema);
export default Staff;
