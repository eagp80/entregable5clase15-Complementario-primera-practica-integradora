import { Schema, model } from "mongoose";

const cartsMongoCollection = 'Carts';

const cartsMongoSchema = new Schema({
  products: {
    type: Array,
    default: [],
  },  
});

const cartsMongoModel = model(cartsMongoCollection, cartsMongoSchema);
export default cartsMongoModel;