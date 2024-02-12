import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/English");
const db = mongoose.connection;

const test1Schema = new mongoose.Schema({
  id: Number,
  question: String,
  answers: [Object],
  rightAnswerId: String,
  fullAnswer: String,
});
const Test = mongoose.model(`tests`, test1Schema);

const findAll = () => {
  var result = Test.find().exec();
  return result;
};

const findTest = async (idT) => {
  const result = await Test.find({id: idT})
  return result;
};

const insertTest = async (test) => {
    return await Test.create(test)   
}

export { findAll, findTest, insertTest };
