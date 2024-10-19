import { model, Schema } from "mongoose";

const BorrowSchema = Schema({
  name: { type: String, required: true },
  sem: { type: String, required: true },
  book: { type: String, required: true },
  // role:{type:String,required:true,default:"user"},
  // image:{type:String},
});

const Borrow = model("Borrow", BorrowSchema);
export default Borrow;
