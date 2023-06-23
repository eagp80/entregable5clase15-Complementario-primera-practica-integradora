import { Schema, model } from "mongoose";

const cartsMongoCollection = 'Cart';//en otra parte se pone en minusculas y mongo le agrega una "s"

const cartsMongoSchema = new Schema({
  products: [{ productMongoId: String, quantity: Number }],
});


const cartsMongoModel = model(cartsMongoCollection, cartsMongoSchema);
export default cartsMongoModel;