import { model, Schema } from "mongoose";

const StudentSchema = Schema({
  name: { type: String, required: true },
  classs: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },

  // role:{type:String,required:true,default:"user"},
  // image:{type:String},
});

const Student = model("Student", StudentSchema);
export default Student;
