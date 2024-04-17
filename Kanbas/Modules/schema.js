import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  module: String,
});
const modulesSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  course: String,
  lessons: [lessonSchema]
}, { collection: "modules", versionKey: false  });
export default modulesSchema;