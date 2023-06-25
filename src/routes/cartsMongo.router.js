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
    this.router.get(`${this.path}/:cartMongoId`, async (req, res) => {
      try {
        // TODO: HACER VALIDACIONES ************************************************
        const cartMongoId=req.params.cartMongoId;
        let cartMongoData = await this.cartMongoManager.getCartMongoById(cartMongoId);
        
        // TODO REVISANDO SI EL CARRITO YA FUE CREADO ANTERIOMENTE
        
        if (!cartMongoData) {
          return res.json({
            message: `the cart by Id in Mongo Atlas not found`,
          });
        }//se cambio por throw,

        return res.status(201).json({
          message: `cart found successfully in Mongo Atlas`,
          cart: cartMongoData,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: cartsMongo.routes.js:48 ~ CartsMongoRoutes ~ this.router.get ~ error:",
          error
        );
        //recibe tambiem el catch de getCartById ProductMongo
         return res.status(400).json({
            message: error.message ?? error            
          });
        }
    });

    this.router.post(`${this.path}/`, async (req, res) => {
      return res.json({ message: `cartsMongo POST no implementado aun` });
    });

    this.router.put(`${this.path}/:cartsMongoId`, async (req, res) => {
      return res.json({ message: `cartsMongo PUT no implementado aun` });
    });

    this.router.delete(`${this.path}/:cartsMongoId`, async (req, res) => {
      return res.json({ message: `cartsMongo DELETE no implementado aun` });
    });
  }
}

export default CartsMongoRoutes;
