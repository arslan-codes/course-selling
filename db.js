const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
const adminSchema = new Schema({
  name: String,
  email: String,
  password: String,
});
const courseSchema = new Schema({
  title: String,
  description: String,
  Price: Number,
  ImageUrl: String,
  createrId: { type: ObjectId, ref: "adminSchema" },
});
const purchaseSchema = new Schema({
  title: String,
  userId: { type: ObjectId, ref: "userSchema" },
  courseId: { type: ObjectId, ref: "courseSchema" },
});

const userModel = mongoose.model("users", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("courses", courseSchema);
const purchaseModel = mongoose.model("purchases", purchaseSchema);
module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
