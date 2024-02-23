import mongoose from "mongoose";
import db from "./config/database";

const test1Schema = new mongoose.Schema({
    id: Number,
    question: String,
    answers: [Object],
    rightAnswerId: String,
    fullAnswer: String,
});
const Test = mongoose.model(`tests`, test1Schema);

// Create operation
const createTest = async (test) => {
    await Test.create(test);
};

// Read operations
const findAllTests = () => {
    return Test.find().exec();
};

const findTestById = async (id) => {
    return Test.findOne({ id }).exec();
};

// Update operation
const updateTest = async (id, updatedTest) => {
    await Test.updateOne({ id }, updatedTest);
};

// Delete operation
const deleteTest = async (id) => {
    await Test.deleteOne({ id });
};

export { createTest, findAllTests, findTestById, updateTest, deleteTest };
