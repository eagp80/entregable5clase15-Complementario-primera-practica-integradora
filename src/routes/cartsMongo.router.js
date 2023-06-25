import { Router } from "express";
import cartsMongoModel  from "../dao/models/cartsMongo.models.js";
import CartMongoManager from "../dao/managers/cartMongo.manager.js";


class CartsMongoRoutes {
    //path="/courses";
  path = "/cartsmongo";
  router = Router();
  cartMongoManager = new CartMongoManager();

  constructor() {
    this.initCartsMongoRoutes();
  }

  initCartsMongoRoutes() {
    this.router.post(`${this.path}`, async (req, res) => {
      try {
        // TODO: HACER VALIDACIONES DEL BODY
        const cartMongo = [];

        // TODO REVISANDO SI EL ESTUDIANTE YA FUE CREADO ANTERIOMENTE
        const newCartMongo = await this.cartMongoManager.createCartMongo(cartMongo);
        if (!newCartMongo) {
          return res.json({
            message: `the cartMongo not created`,
          });
        }//se cambio por throw,

        return res.status(201).json({
          message: `cart created successfully in Mongo Atlas`,
          cart: newCartMongo,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: cartsMongo.routes.js:32 ~ CartsMongoRoutes ~ this.router.post ~ error:",
          error
        );
        //recibe tambiem el catch de createProductMongo
         return res.status(400).json({
            message: error.message ?? error            
          });
        }
    });

    //this.router.get(`${this.path}/:courseId`, async (req, res) => {
    this.router.get(`${this.path}/:cartsMongoId`, async (req, res) => {

      return res.json({ message: `cartsMongo GET` });
    });

    this.router.post(`${this.path}/`, async (req, res) => {
      return res.json({ message: `cartsMongo POST` });
    });

    this.router.put(`${this.path}/:cartsMongoId`, async (req, res) => {
      return res.json({ message: `cartsMongo PUT` });
    });

    this.router.delete(`${this.path}/:cartsMongoId`, async (req, res) => {
      return res.json({ message: `cartsMongo DELETE` });
    });
  }
}

export default CartsMongoRoutes;
