import mongoose from 'mongoose';

const productMongoCollection = "Students";

const productsMongoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },  
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  courses: {
    type: Array,
    default: [],
  },
  grade: {
    type: Number,
  },
  gender: {
    type: String,
  },
 
  
});

const productMongoModel = mongoose.model(productMongoCollection, productsMongoSchema);//contiene seudonimo collection y esquema
export default productMongoModel;