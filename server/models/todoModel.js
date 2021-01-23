import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    content: String,
  },
  { timestamps: true }
);

// eslint-disable-next-line new-cap
const Todo = new mongoose.model("Todo", schema);
export default Todo;
