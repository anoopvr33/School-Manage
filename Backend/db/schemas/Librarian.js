import { model, Schema } from "mongoose";

const LibrarianSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // role:{type:String,required:true,default:"user"},
  // image:{type:String},
});

const Librarian = model("Librarian", LibrarianSchema);
export default Librarian;
